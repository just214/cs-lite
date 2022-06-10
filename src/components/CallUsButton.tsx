import { MdLocalPhone, MdPhoneInTalk } from "react-icons/md";

export const CallUsButton = () => {
  return (
    <a
      className="inline-flex gap-2 items-center text-xl rounded-md p-2  bg-sky-800 text-white  group"
      href="tel:631-403-0362"
    >
      <MdLocalPhone className="block group-hover:hidden" />
      <MdPhoneInTalk className="hidden group-hover:block" />
      <p className="font-medium text-white">631-403-0362</p>
    </a>
  );
};
