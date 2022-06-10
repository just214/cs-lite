import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-sm w-full mt-12 flex items-center gap-4 justify-center py-12">
      <p className="rounded-lg p-2 bg-gray-500/10">
        © {new Date().getFullYear()} Community Solidarity
      </p>
    </footer>
  );
};
