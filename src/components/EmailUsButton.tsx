import { IoMdMail, IoMdMailOpen } from "react-icons/io";

export const EmailUsButton = () => {
  return (
    <a
      className="flex gap-2 items-center text-xl rounded-md p-3 bg-sky-800 text-white group"
      href="mailto:team@longislandclaims.com"
    >
      <IoMdMail className="block group-hover:hidden" />
      <IoMdMailOpen className="hidden group-hover:block" />
      <p className="text-base">team@longislandclaims.com</p>
    </a>
  );
};
