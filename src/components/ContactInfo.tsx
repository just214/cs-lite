import { MdLocalPhone, MdMail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";

type ContactMethodProps = {
  icon: any;
  label: string;
  children: React.ReactNode;
};
const ContactMethod = (props: ContactMethodProps) => {
  const { icon: Icon, label, children } = props;
  return (
    <div className="flex items-center gap-4 text-xl text-sky-800">
      <div className="h-8 w-8 rounded-full bg-sky-800 grid place-items-center">
        <Icon className="text-white" aria-label={label} />
      </div>
      <div className="text-lg font-medium">{children}</div>
    </div>
  );
};

export const ContactInfo = () => {
  return (
    <div className="inline-block space-y-4 rounded-xl surface-alt p-4 shadow">
      <ContactMethod icon={MdLocalPhone} label="Phone Number">
        <p className="text-sky-800">631-403-0362</p>
      </ContactMethod>
      <div className="h-[1px] w-3/4 bg-gray-100" />
      <ContactMethod icon={MdMail} label="Email Address">
        <p className="text-sky-800">info@communitysolidarity.com</p>
      </ContactMethod>
      <div className="h-[1px] w-3/4 bg-gray-100" />
      <ContactMethod icon={HiOfficeBuilding} label="Address">
        <p className="text-sky-800">PO Box 208</p>
        <p className="text-sky-800">Huntington, NY 11743</p>
      </ContactMethod>
    </div>
  );
};
