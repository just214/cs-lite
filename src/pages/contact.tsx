import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { ContactInfo } from "components/ContactInfo";
import { SectionTitle } from "components/SectionTitle";

export default function Page() {
  return (
    <Layout>
      <SEO />
      <div>
        <SectionTitle>Contact Us</SectionTitle>

        <div className="my-8">
          <ContactInfo />
        </div>
      </div>
    </Layout>
  );
}
