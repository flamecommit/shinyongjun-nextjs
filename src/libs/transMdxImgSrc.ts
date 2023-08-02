import fs from 'fs';
import { visit } from 'unist-util-visit';

export default function transformImgSrc({ slug }: { slug: string }) {
  return (tree: any) => {
    visit(tree, 'paragraph', (node) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === 'image',
      );

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
