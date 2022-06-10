import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Card } from "components/Card";

export default function Page() {
  return (
    <Layout>
      <SEO />
      <Card title="Volunteer">
        <section className="max-w-4xl">
          <p>
            It&apos;s not easy sharing as much fresh food as we do, and we
            definitely couldn&apos;t do it without our awesome volunteers. If
            you would like to be part of our mission to provide fresh food to as
            many families as we can, we would love to have you!
          </p>
        </section>
      </Card>
    </Layout>
  );
}
