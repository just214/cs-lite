import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import { Card } from "components/Card";
import { foodShares } from "constants/foodShares";
import { GiWalk } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { getDay } from "utils";

export default function Page() {
  const today = new Date().getDay();
  return (
    <Layout>
      <SEO />
      <div>
        <SectionTitle>Food Share Locations</SectionTitle>
        <section className="flex flex-col items-center gap-4">
          {foodShares.map((foodShare) => {
            const dayOfWeek = getDay(foodShare.dayOfTheWeek);
            return (
              <div
                key={foodShare.href}
                className="p-4 md:p-6 transition-colors ease-in-out rounded-xl surface-alt texture w-full flex flex-col md:flex-row items-center gap-8 justify-between"
              >
                <section className="flex-shrink-0 ">
                  <p className="text-5xl text-cs-pink font-display">
                    {foodShare.location}, NY
                  </p>
                  <p className="font-display text-3xl my-2">
                    Every <span className="text-cs-pink">{dayOfWeek}</span>,
                    Rain or Shine
                  </p>
                  <p>Volunteer @ {foodShare.volunteerStartTime}</p>
                  <p>Distribution @ {foodShare.distributionStartTime}</p>

                  <p>Located at {foodShare.address}</p>
                  <p className="uppercase font-medium text-xs w-42 flex-shrink-0 surface mt-2 rounded-full py-1 px-4 inline-flex items-center gap-2">
                    {["Drive Up", "Drive or Walk Up"].includes(
                      foodShare.distributionType
                    ) && <FaCarSide className="text-lg" />}{" "}
                    {["Walk Up", "Drive or Walk Up"].includes(
                      foodShare.distributionType
                    ) && <GiWalk className="text-lg" />}{" "}
                    {foodShare.distributionType}
                  </p>
                  <div className="mt-2">
                    <a
                      className="cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={foodShare.href}
                      key={foodShare.href}
                    >
                      Learn More
                    </a>
                  </div>
                </section>

                <iframe
                  src={foodShare.mapUrl}
                  width="600"
                  height="450"
                  loading="lazy"
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
