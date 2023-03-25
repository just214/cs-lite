import Link from "next/link";
import { BsMailbox2 } from "react-icons/bs";
import {
  FaDonate,
  FaInfoCircle,
  FaPeopleCarry,
  FaUserLock,
} from "react-icons/fa";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

const links = [
  {
    href: "/food-shares",
    label: "Food Shares",
    icon: MdOutlineVolunteerActivism,
    bg: "bg-yellow-500",
  },
  {
    href: "/volunteer",
    label: "Volunteer",
    icon: FaPeopleCarry,
    bg: "bg-fuchsia-500",
  },
  { href: "/donate", label: "Donate", icon: FaDonate, bg: "bg-emerald-500" },
  {
    href: "/about",
    label: "About Us",
    icon: TbHeartHandshake,
    bg: "bg-sky-500",
  },
  {
    href: "/contact",
    label: "Contact Us",
    icon: BsMailbox2,
    bg: "bg-slate-500",
  },
  {
    href: "/portal",
    label: "Volunteer Portal",
    icon: FaUserLock,
    bg: "bg-red-500",
  },
];

export default function IndexPage() {
  return (
    <div className="mx-auto text-center p-2">
      <section className="container mx-auto max-w-4xl">
        <p className="p-4 rounded-xl texture font-semibold surface-alt my-6 text-xl ">
          <FaInfoCircle className="text-cs-pink inline mr-2" />
          <span>
            CS Lite is a minimal version of the official Community Solidarity
            site. You can visit the official site at
          </span>
          <a
            href="https://www.communitysolidarity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor"
          >
            {" "}
            www.communitysolidarity.org
          </a>
          .
        </p>
      </section>
      <div className="flex items-center justify-center flex-wrap gap-8 container mx-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const baseClasses =
            "display-text text-white text-3xl w-full h-52 md:w-72 md:h-72 bubbles p-4 flex flex-col items-center justify-center  rounded-xl";
          const pseudoClasses =
            "hover:shadow-xl focus:shadow-xl  transition-all ease-in-out";
          return (
            <Link
              href={link.href}
              key={link.href}
              className={`${baseClasses} ${pseudoClasses} ${link.bg} group`}
            >
              <Icon />
              <p className="mt-2 text-4xl display-text group-hover:underline">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
