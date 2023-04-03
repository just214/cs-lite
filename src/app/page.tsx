import Link from "next/link";
import { BsMailbox2 } from "react-icons/bs";
import { FaDonate, FaPeopleCarry, FaUserLock } from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

import { MissionCycleCard } from "components/MissionCycleCard";

const links = [
  {
    href: "/food-shares",
    label: "Food Shares",
    icon: MdOutlineVolunteerActivism,
    bg: "bg-yellow-600",
  },
  {
    href: "/volunteer",
    label: "Volunteer",
    icon: FaPeopleCarry,
    bg: "bg-fuchsia-600",
  },
  { href: "/donate", label: "Donate", icon: FaDonate, bg: "bg-emerald-600" },
  {
    href: "/about",
    label: "About Us",
    icon: TbHeartHandshake,
    bg: "bg-sky-600",
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: BsMailbox2,
    bg: "bg-slate-600",
  },
  {
    href: "/portal",
    label: "Volunteer Portal",
    icon: FaUserLock,
    bg: "bg-red-600",
  },
];

export default function IndexPage() {
  return (
    <div className="mx-auto text-center p-2">
      <MissionCycleCard />
      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {links.map((link) => {
            const Icon = link.icon;
            const baseClasses =
              "display-text text-white text-5xl w-full h-52 md:w-72 md:h-72 bubbles p-4 flex flex-col items-center justify-center  rounded-xl";
            const pseudoClasses =
              "hover:shadow-xl focus:shadow-xl  transition-all ease-in-out";
            return (
              <li key={link.href} className="flex w-full justify-center">
                <Link
                  href={link.href}
                  className={`${baseClasses} ${pseudoClasses} ${link.bg} group`}
                >
                  <Icon />
                  <p className="mt-4 text-5xl display-text group-hover:underline">
                    {link.label}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
