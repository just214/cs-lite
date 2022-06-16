import { SEO } from "components/SEO";
import { NavLink } from "components/NavLink";

export default function IndexPage() {
  return (
    <div className="grid h-screen place-items-center">
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
    </div>
  );
}
