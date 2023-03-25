import Link from "next/link";

export const NextLink = (props) => {
  const { href, children } = props;
  return (
    <Link
      href={href}
      className="text-cs-pink font-semibold hover:underline focus:underline"
    >
      {children}
    </Link>
  );
};
