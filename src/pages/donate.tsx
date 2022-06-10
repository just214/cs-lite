import Link from "next/link";
import {
  FaMailBulk,
  FaExclamationCircle,
  FaPaypal,
  FaWalking,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Card } from "components/Card";
import { PayPalDonateButton } from "components/PayPalDonateButton";
import { donationTypes } from "constants/donationTypes";

type DonationCardProps = {
  title: string;
  icon: any;
  children: React.ReactNode;
  Footer?: React.ReactNode;
};

export const DonationCard = (props: DonationCardProps) => {
  const { title, icon: Icon, children, Footer } = props;
  return (
    <div className="p-4 surface-alt texture rounded-xl h-72 md:w-80 w-full inline-flex flex-col  items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-3xl my-4">
        <Icon />
        {title}
      </div>

      <div className="my-4 text-center text">{children}</div>
      <div>{Footer}</div>
    </div>
  );
};

const description =
  "As a 501(c)3 organization, Community Solidarity can only grow and continue our mission with your continued financial support. Please consider making a tax deductible donation today.";

export default function Page() {
  return (
    <Layout>
      <SEO title="Donate to Community Solidarity" description={description} />

      <Card title="Monetary Donation">
        <p className="mb-4">{description}</p>
        <section className="flex flex-col md:flex-row  gap-4">
          <DonationCard title="PayPal" icon={FaPaypal}>
            <div className="mt-2">
              <PayPalDonateButton />
            </div>
          </DonationCard>

          <DonationCard
            title="By mail"
            icon={FaMailBulk}
            Footer={
              <p className="w-full flex items-center gap-2 my-2 text-base border-l-2 border-cs-pink surface texture p-2 text-cs-pink">
                <FaExclamationCircle /> Please do not mail cash.
              </p>
            }
          >
            <div className="text-center">
              <p className="font-medium">PO Box 208 </p>
              <p className="font-medium">Huntington, NY 11743</p>
            </div>
          </DonationCard>

          <DonationCard
            title="In Person"
            icon={FaWalking}
            Footer={
              <p className="flex w-full items-center gap-2 my-2 text-base border-l-2 border-emerald-500 surface texture p-2 text-emerald-500">
                <FaCheckCircle className="text-emerald-500" /> Cash accepted in
                person.
              </p>
            }
          >
            <p className="px-4">
              Visit us at any{" "}
              <Link href="/food-shares">
                <a className="anchor">Food Share location</a>
              </Link>
            </p>
          </DonationCard>
          <DonationCard title="Other Ways" icon={FaStar}>
            <button className="cta mt-4 w-full">
              Become a monthly sustainer!
            </button>
            <button className="cta mt-4 w-full">Start a Fundraiser!</button>
          </DonationCard>
        </section>
      </Card>

      <Card className=" mt-4" title="Other Useful Donations">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {donationTypes.map((type) => {
            const [label, Icon] = type;
            return (
              <li
                key={label as string}
                className="surface-alt justify-center md:justify-start p-2 rounded-lg texture flex items-center gap-2"
              >
                <Icon />
                <p className="font-medium text-lg">{label as string}</p>
              </li>
            );
          })}
        </ul>
      </Card>
    </Layout>
  );
}
