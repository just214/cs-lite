import Link from "next/link";
import {
  FaMailBulk,
  FaExclamationCircle,
  FaPaypal,
  FaWalking,
  FaCheckCircle,
  FaStar,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcDiscover,
  FaRedo,
} from "react-icons/fa";
import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Card } from "components/Card";
import { donationTypes } from "constants/donationTypes";
import { FoodSharesLink } from "components/FoodSharesLink";

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
      <div className="flex items-center gap-2 font-bold text-3xl my-4 text">
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
        <section className="flex flex-col md:flex-row gap-4">
          <DonationCard
            title="PayPal"
            icon={FaPaypal}
            Footer={
              <p className="flex w-full items-center gap-2 my-2 text-base border-l-2 border-yellow-500 surface p-2 text-yellow-500">
                <FaRedo className="text-yellow-500" /> One-time or recurring
              </p>
            }
          >
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <div className="inner_content">
                <input name="landing_page" type="hidden" value="billing" />
                <input
                  name="cpp_cart_border_color"
                  type="hidden"
                  value="FF0000"
                />
                <input name="cpp_payflow_color" type="hidden" value="D20137" />
                <input
                  name="business"
                  type="hidden"
                  value="jonsteps@communitysolidarity.org"
                />
                <input name="cmd" type="hidden" value="_donations" />
                <input
                  type="hidden"
                  name="notify_url"
                  value="https://communitysolidarity.us7.list-manage.com/subscribe/paypal-ipn?u=d526e39052615c32057079576&amp;id=775a503f33"
                />
                <input
                  type="hidden"
                  name="return"
                  value="https://communitysolidarity.org/donate/funds/thank_you"
                />
                <input name="item_name" type="hidden" value="Donation" />

                <input name="currency_code" type="hidden" value="USD" />
              </div>

              <button type="submit" className="cta flex-col !w-72">
                <p>Donate now!</p>
                <div className="items-center gap-1 flex">
                  <FaCcVisa /> <FaCcMastercard /> <FaCcAmex />
                  <FaCcDiscover />
                </div>
              </button>
            </form>
          </DonationCard>

          <DonationCard
            title="By mail"
            icon={FaMailBulk}
            Footer={
              <p className="w-full flex items-center gap-2 my-2 text-base border-l-2 border-cs-pink surface p-2 text-cs-pink">
                <FaExclamationCircle /> Please do not mail cash.
              </p>
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
              <p className="flex w-full items-center gap-2 my-2 text-base border-l-2  border-emerald-500 surface p-2 text-emerald-500">
                <FaCheckCircle className="text-emerald-500" /> Cash accepted in
                person.
              </p>
            }
          >
            <p className="px-4  border-4 border-dashed border-color p-2 rounded-xl">
              Visit one of our <FoodSharesLink />
            </p>
          </DonationCard>
          <DonationCard title="Superstar" icon={FaStar}>
            <a
              className="cta mt-4 w-full"
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
              className="cta mt-4 w-full"
            >
              Start a Fundraiser!
            </a>
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
