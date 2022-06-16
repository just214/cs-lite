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
    <div className="flex items-center gap-4 text-xl ">
      <div className="h-8 w-8 rounded-full bg-sky-800 grid place-items-center">
        <Icon className="text-white" aria-label={label} />
      </div>
      <div className="text-lg font-medium">{children}</div>
    </div>
  );
};

export const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around flex-wrap p-2 surface-alt texture rounded-xl">
      <ContactMethod icon={MdLocalPhone} label="Phone Number">
        <p>631-223-4370</p>
      </ContactMethod>

      <ContactMethod icon={MdMail} label="Email Address">
        <p>info@communitysolidarity.com</p>
      </ContactMethod>

      <ContactMethod icon={HiOfficeBuilding} label="Address">
        <p>PO Box 208</p>
        <p>Huntington, NY 11743</p>
      </ContactMethod>
    </div>
  );
};
