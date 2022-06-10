import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { Card } from "components/Card";

export default function Page() {
  return (
    <Layout>
      <SEO />
      <Card className="texture" title="Contact Us">
        <p>
          Have a question about our food shares? Interested in volunteering?
          Whatever it is, we&apos;d love to hear from you!
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfJrs_TsUx9_JV-IXXqEGk1YuOkM8lcS4anqYQroTdnw3K2XA/viewform?embedded=true"
          width="480"
          height="1000"
          className="w-full md:w-1/2"
        >
          Loading…
        </iframe>
      </Card>
    </Layout>
  );
}
