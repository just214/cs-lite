import { SectionTitle } from "components/SectionTitle";

type Props = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export const Card = (props: Props) => {
  const { children, className, title } = props;
  return (
    <section className={`w-full rounded-xl  surface p-4 md:p-8 ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};
