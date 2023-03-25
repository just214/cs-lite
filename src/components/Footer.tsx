import { FaInfoCircle } from "react-icons/fa";

import { DonateButton } from "./DonateButton";

export function Footer() {
  return (
    <footer className="p-4 text-sm w-full flex flex-col items-center gap-4 justify-center my-12 space-y-6">
      <DonateButton />

      <p className="p-4 rounded-xl texture font-medium surface-alt my-6 text-sm ">
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
      <p>© {new Date().getFullYear()} Community Solidarity</p>
    </footer>
  );
}
