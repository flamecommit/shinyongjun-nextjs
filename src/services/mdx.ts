import fs from 'fs';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';
import { getExtensionOfFilename } from '@/utils/file';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkBreaks from 'remark-breaks';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

type TImage = {
  type: string;
  url: string;
  alt: string;
};

export const transformImgSrc = ({
  mdxPath,
  path,
}: {
  mdxPath: string;
  path: string;
}) => {
  return (tree: Node) => {
    visit(tree, 'paragraph', (node: Parent) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === 'image',
      ) as TImage | undefined;

      if (image === undefined) return;

      const fileName = image.url.replace('./', '');
      const imageUrl = `${path}/${mdxPath}/${fileName}`;
      const imageBuffer = fs.readFileSync(imageUrl);
      const base64String = imageBuffer.toString('base64');
      const extension = getExtensionOfFilename(fileName);
      image.url = `data:image/${extension};base64,${base64String}`;

      if (!image.alt) return;

      const citeNode = {
        type: 'mdxJsxFlowElement',
        name: 'cite',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'className', value: 'image-cite' },
        ],
        children: [{ type: 'text', value: image.alt }],
      };

      node.children.push(citeNode);
    });
  };
};

export const extractLastDirectory = (path: string): string => {
  const parts = path.split('/');
  const filteredParts = parts.filter((part) => part !== '');

  if (filteredParts.length > 1) {
    return filteredParts[filteredParts.length - 2];
  }

  return '';
};

export const mdxFilePath = (path: string, basePath: string): string => {
  return path
    .slice(path.indexOf(basePath))
    .replace(`${basePath}/`, '')
    .replace('/index.mdx', '');
};

export const getPackageDocument = async (documentPath: string) => {
  const DOCUMENT_PATH = path.join(process.cwd(), documentPath);
  const content = fs.readFileSync(DOCUMENT_PATH, 'utf8');

  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkBreaks, remarkGfm],
      rehypePlugins: [rehypeCodeTitles, rehypeHighlight],
      format: 'mdx',
    },
  });

  return {
    mdx,
  };
};
