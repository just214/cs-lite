import { SEO } from "components/SEO";
import { Footer } from "components/Footer";
import Link from "next/link";
import { NavLink } from "components/NavLink";
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaPeopleCarry, FaDonate } from "react-icons/fa";
import { BsMailbox2 } from "react-icons/bs";

const links = [
  {
    href: "/food-shares",
    label: "Food Shares",
    icon: MdOutlineVolunteerActivism,
  },
  { href: "/volunteer", label: "Volunteer", icon: FaPeopleCarry },
  { href: "/donate", label: "Donate", icon: FaDonate },
  { href: "/about-us", label: "About Us", icon: TbHeartHandshake },
  { href: "/contact-us", label: "Contact Us", icon: BsMailbox2 },
];

export default function IndexPage() {
  return (
    <div className="mx-auto text-center p-2">
      <SEO />
      <NavLink
        to="/"
        label={
          <div className="font-display">
            <p className="text-8xl">
              CS-<span className="text-cs-pink">LITE</span>
            </p>
            <p className="text-lg">
              <span className="font-sans mr-1">A</span>COMMUNITY{" "}
              <span className="text-cs-pink">SOLIDARITY</span>
              <span className="font-sans ml-1">project</span>
            </p>
          </div>
        }
      />
      <div className="flex items-center justify-center flex-wrap gap-8">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <Link href={link.href} key={link.href}>
              <a className="text text-3xl w-full h-72 md:w-72 md:h-72 bubbles surface-alt  p-4 flex flex-col items-center justify-center rounded-xl hover:shadow-lg focus:shadow-lg  transition-colors hover:bg-cs-pink focus:bg-cs-pink hover:text-white focus:text-white ease-in-out">
                <Icon />
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
