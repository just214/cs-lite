import { DonateButton } from "./DonateButton";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <footer className="p-4 text-center text-sm w-full mt-12 flex flex-col items-center gap-4 justify-center py-12">
      <p className="rounded-lg p-2 bg-gray-500/10 px-6">
        © {new Date().getFullYear()} Community Solidarity
      </p>
      {router.pathname !== "/donate" && <DonateButton />}
    </footer>
  );
};
