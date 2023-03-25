export const SectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="inline-flex items-center text-5xl p-3 display-text text-white -rotate-2 mb-12 bg-cs-pink rounded-lg stripes">
      {props.children}
    </h2>
  );
};
