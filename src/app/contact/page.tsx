import { BsMailbox2 } from "react-icons/bs";
import { MdLocalPhone, MdOutlineAlternateEmail } from "react-icons/md";

import { Card } from "components/Card";
import { FoodSharesLink } from "components/FoodSharesLink";
import { SectionTitle } from "components/SectionTitle";

import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div>
      <SectionTitle>Contact Us</SectionTitle>
      <p className="font-medium text-2xl mb-4">We&apos;re not hard to reach!</p>
      <Card>
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-around lg:items-center">
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
      </Card>

      <ul className="list space-y-2 my-8">
        <li>Fill out the contact form below.</li>
        <li>Call, email, or mail us.</li>
        <li>
          Drop by any of our <FoodSharesLink /> to chat in person!
        </li>
      </ul>

      <ContactForm />
    </div>
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
