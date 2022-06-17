import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Card } from "components/Card";
import { FoodSharesLink } from "components/FoodSharesLink";
import { NextLink } from "components/NextLink";

export default function Page() {
  return (
    <Layout>
      <SEO />
      <Card title="Volunteer">
        <section className="max-w-4xl texture rounded-xl surface-alt p-4">
          <p>
            It&apos;s not easy sharing as much fresh vegetarian groceries as we
            do, and we definitely couldn&apos;t do it without our awesome
            volunteers. If you would like to be part of our mission, we would
            love to have you!
          </p>

          <p className="mt-4">
            Here are just some of the ways that you can get involved:
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
              <p>Host a fundraiser or food/clothing drive.</p>.
            </li>
          </ul>
          <p>
            Please <NextLink href="/contact">get in touch</NextLink> and
            let&apos;s talk about how we can work together!
          </p>
        </section>
      </Card>
    </Layout>
  );
}
