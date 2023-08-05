type Props = {
  children: React.ReactNode;
};

function WorkLayout({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default WorkLayout;
