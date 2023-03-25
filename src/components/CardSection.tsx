import { Card } from "components/Card";

import { SectionTitle } from "./SectionTitle";

type Props = {
  title?: string;
  children?: React.ReactNode;
  className?: string;
};
export function CardSection(props: Props) {
  const { title, children, className = "" } = props;
  return (
    <section className={className}>
      <SectionTitle>{title}</SectionTitle>
      <Card>{children}</Card>
    </section>
  );
}
