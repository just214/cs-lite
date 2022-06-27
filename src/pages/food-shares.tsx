import { InferGetStaticPropsType } from "next";
import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import { GiWalk } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { AirTableFoodShare } from "types";

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <Layout>
      <SEO />
      <div>
        <SectionTitle>Food Share Locations</SectionTitle>
        <section className="flex flex-col items-center gap-12">
          {props.shares.map((foodShare: AirTableFoodShare) => {
            const dayOfWeek = foodShare.fields["Day Of Week"];
            return (
              <div
                key={foodShare.fields.Link}
                className="p-4 md:p-6 transition-colors ease-in-out rounded-xl surface-alt texture w-full flex flex-col md:flex-row items-center gap-8 justify-between"
              >
                <section className="flex-shrink-0 ">
                  <p className="text-5xl text-cs-pink font-display">
                    {foodShare.fields.Location}, NY
                  </p>
                  <p className="font-display text-3xl my-2">
                    Every <span className="text-cs-pink">{dayOfWeek}</span>,
                    Rain or Shine
                  </p>
                  <p>Volunteer @ {foodShare.fields["Volunteer Start Time"]}</p>
                  <p>
                    Distribution @ {foodShare.fields["Distribution Start Time"]}
                  </p>

                  <p>Located at {foodShare.fields.Address}</p>
                  <p className="uppercase font-medium text-xs w-42 flex-shrink-0 bg-cs-pink text-white wiggles mt-2 rounded-full py-1 px-4 inline-flex items-center gap-2">
                    {["Drive Up", "Drive or Walk Up"].includes(
                      foodShare.fields["Distribution Type"]
                    ) && <FaCarSide className="text-lg" />}{" "}
                    {["Walk Up", "Drive or Walk Up"].includes(
                      foodShare.fields["Distribution Type"]
                    ) && <GiWalk className="text-lg" />}{" "}
                    {foodShare.fields["Distribution Type"]}
                  </p>
                  <div className="mt-6">
                    <a
                      className="cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={foodShare.fields.Link}
                      key={foodShare.fields.Link}
                    >
                      Learn More
                    </a>
                  </div>
                </section>

                <iframe
                  src={foodShare.fields["Map URL"]}
                  width="600"
                  height="450"
                  className="rounded-xl aspect-auto w-full md:w-96 h-64"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            );
          })}
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const endpoint =
    "https://api.airtable.com/v0/appaVXGD5Ib4czzuq/Food%20Shares?maxRecords=3&view=Grid%20view";

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
    },
  });
  const res = await response.json();

  return {
    props: {
      shares: res.records as AirTableFoodShare[],
    },
  };
};
