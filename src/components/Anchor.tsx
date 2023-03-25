type Props = {
  children: React.ReactNode;
  href: string;
  variant?: "link" | "button";
  className?: string;
};

export function Anchor(props: Props) {
  const { children, href, variant = "link", className = "" } = props;
  const baseClassNames = variant === "link" ? "anchor" : "btn";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClassNames} ${className}`}
    >
      {children}
    </a>
  );
}
