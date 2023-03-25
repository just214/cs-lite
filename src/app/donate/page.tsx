import { BsStars } from "react-icons/bs";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaMailBulk,
  FaPaypal,
  FaRedo,
  FaWalking,
} from "react-icons/fa";

import { Card } from "components/Card";
import { DonateButton } from "components/DonateButton";
import { FoodSharesLink } from "components/FoodSharesLink";
import { SectionTitle } from "components/SectionTitle";
import { donationTypes } from "constants/donationTypes";

import { Alert } from "./Alert";

type DonationCardProps = {
  title: string;
  icon: any;
  children: React.ReactNode;
  Footer?: React.ReactNode;
};

function DonationCard(props: DonationCardProps) {
  const { title, icon: Icon, children, Footer } = props;
  return (
    <Card>
      <div className="flex flex-col items-center h-64 justify-between max-w-sm mx-auto">
        <div className="flex items-center gap-2 font-bold text-4xl my-4 display-text text-cs-pink">
          <Icon />
          {title}
        </div>

        <div className="my-4 text-center text flex-1">{children}</div>
        <div className="w-full">{Footer}</div>
      </div>
    </Card>
  );
}

const description =
  "As a 501(c)3 organization, Community Solidarity can only grow and continue our mission with your continued financial support. Please consider making a tax deductible donation today.";

export default function Page() {
  return (
    <>
      <div>
        <p className="mb-12 p-6 md:p-8 bg-yellow-400 rounded-lg text-xl font-semibold text-gray-800">
          {description}
        </p>
        <SectionTitle>Monetary Donation</SectionTitle>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <DonationCard
            title="PayPal"
            icon={FaPaypal}
            Footer={
              <Alert
                icon={FaRedo}
                variant="warning"
                title="One-time or recurring"
              />
            }
          >
            <DonateButton />
          </DonationCard>

          <DonationCard
            title="By Mail"
            icon={FaMailBulk}
            Footer={
              <Alert
                icon={FaExclamationCircle}
                variant="danger"
                title="Please do not mail cash"
              />
            }
          >
            <div className="text-center border-4 border-dashed border-color p-2 rounded-xl">
              <p className="font-medium">PO Box 208 </p>
              <p className="font-medium">Huntington, NY 11743</p>
            </div>
          </DonationCard>

          <DonationCard
            title="In Person"
            icon={FaWalking}
            Footer={
              <Alert
                icon={FaCheckCircle}
                variant="success"
                title="Cash accepted in
                person"
              />
            }
          >
            <p className="px-4  border-4 border-dashed border-color p-2 rounded-xl">
              Visit one of our <FoodSharesLink />
            </p>
          </DonationCard>
          <DonationCard title="Superstar" icon={BsStars}>
            <a
              className="btn mt-4 w-full"
              href="https://give.communitysolidarity.org/give/214062/#!/donation/checkout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Become a monthly sustainer!
            </a>
            <a
              href="https://give.communitysolidarity.org/campaign/community-campaign/c269349"
              target="_blank"
              rel="noopener noreferrer"
              className="block anchor mt-8 w-full"
            >
              Start a Fundraiser!
            </a>
          </DonationCard>
        </section>
      </div>

      <div className="mt-24">
        <SectionTitle>Item Donations</SectionTitle>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {donationTypes.map((type) => {
            const [label, Icon] = type;
            return (
              <li key={label as string}>
                <Card className="justify-center md:justify-start flex items-center gap-2">
                  <Icon />
                  <p className="font-medium text-lg">{label as string}</p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}