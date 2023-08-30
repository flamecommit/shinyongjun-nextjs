'use client';

interface IProps {
  children: React.ReactNode;
  href: string;
}

function PostOutlink({ children, href }: IProps) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

export default PostOutlink;
