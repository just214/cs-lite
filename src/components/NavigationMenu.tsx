import { useRouter } from "next/router";
import { NavLink } from "components/NavLink";

const navLinks = [
  ["Food Shares", "/food-shares"],
  ["Volunteer", "/volunteer"],
  ["Donate", "/donate"],
  ["About Us", "/about"],
  ["Contact Us", "/contact"],
];

export const NavigationMenu = ({
  orientation,
}: {
  orientation: "row" | "col";
}) => {
  const router = useRouter();
  const isRow = orientation === "row";
  return (
    <nav className="">
      <ul
        className={`${
          isRow ? "flex-row gap-2 mr-8" : "flex-col gap-8"
        } flex items-center font-display`}
      >
        {navLinks.map(([label, to]) => (
          <li key={to}>
            <NavLink to={to} label={label} isActive={router.pathname === to} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
