export const SectionTitle = (props: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl md:text-5xl font-display mb-6 px-1">
      {props.children}
    </h2>
  );
};
