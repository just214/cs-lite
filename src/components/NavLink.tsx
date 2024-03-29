"use client";

import Link from "next/link";

type Props = {
  label: React.ReactNode;
  to: string;
  isActive?: boolean;
  onClick?: (path: string) => void;
};

export const NavLink = (props: Props) => {
  const baseClassNames =
    "font-medium mx-1  text-2xl transition-colors duration-200 ease-in-out px-4 sm:px-3 xl:px-6 py-2 rounded-md";

  const selectedClassNames = props.isActive
    ? " bg-gray-500/10 text-cs-pink"
    : "hover:bg-gray-500/10  focus:bg-gray-500/10 text-alt";
  return (
    <Link
      href={props.to}
      className={`${baseClassNames} ${selectedClassNames}`}
      onClick={() => props.onClick?.(props.to)}
    >
      {props.label}
    </Link>
  );
};
