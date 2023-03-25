import { FaInfoCircle } from "react-icons/fa";

import { Anchor } from "./Anchor";
import { DonateButton } from "./DonateButton";

export function Footer() {
  return (
    <footer className="p-4 text-sm w-full flex flex-col items-center gap-4 justify-center my-12 space-y-2">
      <DonateButton />

      <p className="p-4 rounded-xl texture font-medium surface-alt text-sm ">
        <FaInfoCircle className="text-cs-pink inline mr-2" />
        <span>
          CS Lite is a minimal version of the official Community Solidarity
          site. You can visit the official site at{" "}
        </span>
        <Anchor href="https://www.communitysolidarity.org">
          www.communitysolidarity.org
        </Anchor>
        .
      </p>
      <p>© {new Date().getFullYear()} Community Solidarity</p>
    </footer>
  );
}
