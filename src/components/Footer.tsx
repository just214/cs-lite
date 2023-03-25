import { DonateButton } from "./DonateButton";

export function Footer() {
  return (
    <footer className="p-4 text-sm w-full flex flex-col items-center gap-4 justify-center my-12">
      <DonateButton />
      <p className="rounded-lg p-2 bg-gray-500/10 px-6">
        © {new Date().getFullYear()} Community Solidarity
      </p>
    </footer>
  );
}
