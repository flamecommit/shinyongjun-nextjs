import { visit } from "unist-util-visit";

const imgDirInsidePublic = "posts";

export default function transformImgSrc({ slug }: { slug: string }) {
  return (tree: any) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find(
        (child: { type: string }) => child.type === "image"
      );

      if (image) {
        const fileName = image.url.replace("./", "");
        image.url = `./${imgDirInsidePublic}/${slug}/${fileName}`;
      }
    });
  };
}
