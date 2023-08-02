import fs from 'fs';
import { visit } from 'unist-util-visit';
import { Node, Parent } from 'unist';

type Image = {
  url: string;
};

export default function transformImgSrc({ slug }: { slug: string }) {
  return (tree: Node) => {
    visit(tree, 'paragraph', (node: Parent) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === 'image',
      ) as Image | undefined;

      if (image) {
        const fileName = image.url.replace('./', '');
        const imageUrl = `./posts/${slug}/${fileName}`;
        const imageBuffer = fs.readFileSync(imageUrl);
        const base64String = imageBuffer.toString('base64');
        image.url = `data:image/jpeg;base64,${base64String}`;
      }
    });
  };
}
