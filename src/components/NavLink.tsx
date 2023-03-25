import Link from "next/link";

type Props = {
  label: React.ReactNode;
  to: string;
  isActive?: boolean;
};

export const NavLink = (props: Props) => {
  const baseClassNames =
    "font-medium mx-2 text-2xl sm:text-lg xl:text-2xl transition-colors duration-200 ease-in-out px-6 py-2 rounded-md";

  const selectedClassNames = props.isActive
    ? " bg-gray-500/10 text-cs-pink"
    : "hover:bg-gray-500/10  focus:bg-gray-500/10 text-alt";
  return (
    <Link href={props.to} className={`${baseClassNames} ${selectedClassNames}`}>
      {props.label}
    </Link>
  );
};
