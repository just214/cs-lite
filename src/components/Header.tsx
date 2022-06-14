import Link from "next/link";
import Image from "next/image";
import { NavLink } from "./NavLink";

// Components
import { CallUsButton } from "components/CallUsButton";
import { NavigationMenu } from "components/NavigationMenu";
import { MobileNavigation } from "components/MobileNavigation";

export const Header = () => {
  return (
    <header className="p-4 my-4 md:my-12 flex lg:items-center justify-between flex-col lg:flex-row">
      <section className="flex flex-1  items-center justify-between">
        <NavLink
          to="/"
          label={
            <div className="font-display">
              <p className="text-4xl">
                CS-<span className="text-cs-pink">LITE</span>
              </p>
              <p className="text-sm">
                <span className="font-sans mr-1">A</span>COMMUNITY{" "}
                <span className="text-cs-pink">SOLIDARITY</span>
                <span className="font-sans ml-1">project</span>
              </p>
            </div>
          }
        />

        <section className="hidden lg:block">
          <NavigationMenu orientation="row" />
        </section>
        <MobileNavigation />
      </section>
    </header>
  );
};
