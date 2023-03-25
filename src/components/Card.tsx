type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Card(props: Props) {
  const { children, className = "" } = props;
  return (
    <div className={`texture p-4 rounded-xl surface-alt ${className}`}>
      {children}
    </div>
  );
}
