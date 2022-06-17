import { SEO } from "components/SEO";
import { Footer } from "components/Footer";
import Link from "next/link";
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaPeopleCarry, FaDonate } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";

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
];

export default function IndexPage() {
  return (
    <div className="mx-auto text-center p-2">
      <SEO />
      <div className="font-display my-12">
        <p className="text-8xl">
          C<span className="text-cs-pink">S</span>
          <span className="ml-2 text-3xl">lite</span>
        </p>
        <p className="text-lg">
          <span className="font-sans mr-1">A</span>COMMUNITY{" "}
          <span className="text-cs-pink">SOLIDARITY</span>
          <span className="font-sans ml-1">project</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-8">
        {links.map((link) => {
          const Icon = link.icon;
          const base =
            "text-white text-3xl w-full h-52 md:w-72 md:h-72 bubbles p-4 flex flex-col items-center justify-center rounded-xl hover:shadow-lg focus:shadow-lg  transition-colors hover:bg-cs-pink focus:bg-cs-pink hover:text-white focus:text-white ease-in-out";
          return (
            <Link href={link.href} key={link.href}>
              <a className={`${base} ${link.bg} group`}>
                <Icon className="group-hover:animate-pulse" />
                <p className="mt-2 text-4xl font-display">{link.label}</p>
              </a>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
