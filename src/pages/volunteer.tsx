import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import { FoodSharesLink } from "components/FoodSharesLink";
import { NextLink } from "components/NextLink";

export default function Page() {
  return (
    <Layout>
      <SEO />
      <div>
        <SectionTitle>Volunteer</SectionTitle>
        <section className="max-w-4xl texture rounded-xl surface-alt p-4 md:p-6">
          <p>
            We couldn&apos;t do what we do without our awesome volunteers and
            community members. Here are just some of the ways that you can get
            involved:
          </p>

          <ul className="list-disc ml-6 mt-8">
            <li>
              <p>
                Prepare and distribute groceries at any of our{" "}
                <FoodSharesLink />.
              </p>
            </li>
            <li>
              <p>
                Pick up groceries from our donors and deliver to Food Shares.
              </p>
            </li>
            <li>
              <p>Host a fundraiser or food/clothing drive.</p>
            </li>
          </ul>
          <p className="mt-8">
            Please <NextLink href="/contact">get in touch</NextLink> and
            let&apos;s talk about how we can work together!
          </p>
        </section>
      </div>
    </Layout>
  );
}
