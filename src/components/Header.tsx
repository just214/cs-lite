import { MobileNavigation } from "components/MobileNavigation";
import { NavigationMenu } from "components/NavigationMenu";
import { ThemeSwitch } from "components/ThemeSwitch";

import { NavLink } from "./NavLink";

export const Header = () => {
  return (
    <header className="p-2 pb-0 flex lg:items-center justify-between flex-col lg:flex-row xl:container mx-auto">
      <section className="flex flex-1 items-center justify-between">
        <NavLink
          to="/"
          label={
            <div>
              <p className="text-6xl display-text">
                C<span className="text-cs-pink">S</span>
                <span className="text-2xl ml-2">Lite</span>
              </p>
              <p className="text-[10px] xl:text-sm text-alt -mt-4 md:mt-0">
                <span className="font-sans">A</span>
                <span className="display-text"> COMMUNITY </span>
                <span className="text-cs-pink display-text">SOLIDARITY </span>
                <span className="font-sans">project</span>
              </p>
            </div>
          }
        />

        <section className="hidden lg:flex items-center">
          <NavigationMenu orientation="row" />
          <ThemeSwitch />
        </section>

        <MobileNavigation />
      </section>
    </header>
  );
};
