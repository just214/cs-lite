import { BsMailbox2 } from "react-icons/bs";
import { MdLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";

import { CardSection } from "components/CardSection";
import { FoodSharesLink } from "components/FoodSharesLink";

export default function ContactPage() {
  return (
    <CardSection title="Contact Us">
      <div className="px-2 md:px-8">
        <p className="my-8">
          Reach out with any of the methods below or drop by anyone of our{" "}
          <FoodSharesLink /> to meet up in person!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 align-middle">
          <ContactMethod icon={MdLocalPhone} label="Phone Number">
            <p>631-223-4370</p>
          </ContactMethod>

          <ContactMethod icon={MdOutlineAlternateEmail} label="Email Address">
            <p>info@communitysolidarity.com</p>
          </ContactMethod>

          <ContactMethod icon={BsMailbox2} label="Address">
            <p>PO Box 208</p>
            <p>Huntington, NY 11743</p>
          </ContactMethod>
        </div>
      </div>
    </CardSection>
  );
}

type ContactMethodProps = {
  icon: any;
  label: string;
  children: React.ReactNode;
};
const ContactMethod = (props: ContactMethodProps) => {
  const { icon: Icon, label, children } = props;
  return (
    <div className="inline-flex items-center justify-left md:justify-center gap-4 text-xl ">
      <div className="rounded-full bg-cs-pink grid place-items-center p-2 text-white">
        <Icon aria-label={label} />
      </div>
      <div className="font-medium">{children}</div>
    </div>
  );
};
