import { FaCarSide } from "react-icons/fa";
import { GiWalk } from "react-icons/gi";

import { Anchor } from "components/Anchor";
import { Card } from "components/Card";
import { SectionTitle } from "components/SectionTitle";
import { AirTableFoodShare } from "types";
import { fetchFoodShares } from "utils/airtable-api";
import { createMetadata } from "utils/createMetadata";

export const metadata = createMetadata({
  title: "Food Shares",
  path: "/food-shares",
});

export default async function FoodSharePage() {
  const shares = await fetchFoodShares();

  return (
    <>
      <SectionTitle>Food Shares</SectionTitle>

      {shares.map((foodShare: AirTableFoodShare) => {
        const dayOfWeek = foodShare.fields["Day Of Week"];
        return (
          <Card key={foodShare.fields.Link} className="mb-12">
            <div className="p-4 md:p-6 ease-in-out w-full flex flex-col md:flex-row items-center gap-8 justify-between">
              <section>
                <p className="display-text text-5xl text-cs-pink">
                  {foodShare.fields.Location}, NY
                </p>
                <p className="display-text text-3xl my-2">
                  Every <span className="text-cs-pink">{dayOfWeek}</span>, Rain
                  or Shine
                </p>

                <p className="uppercase font-medium text-xs w-42 flex-shrink-0 bg-cs-pink text-white wiggles mt-2 rounded-full py-1 px-4 inline-flex items-center gap-2">
                  {["Drive Up", "Drive or Walk Up"].includes(
                    foodShare.fields["Distribution Type"]
                  ) && <FaCarSide className="text-lg" />}{" "}
                  {["Walk Up", "Drive or Walk Up"].includes(
                    foodShare.fields["Distribution Type"]
                  ) && <GiWalk className="text-lg" />}{" "}
                  {foodShare.fields["Distribution Type"]}
                </p>

                <div className="my-8 text-lg font-semibold">
                  <p>
                    Volunteer @{" "}
                    <span className="text-cs-pink">
                      {foodShare.fields["Volunteer Start Time"]}
                    </span>
                  </p>
                  <p>
                    Distribution @{" "}
                    <span className="text-cs-pink">
                      {foodShare.fields["Distribution Start Time"]}
                    </span>
                  </p>

                  <p>Located at {foodShare.fields.Address}</p>
                </div>

                <div className="mt-6">
                  <Anchor
                    variant="button"
                    href={foodShare.fields.Link}
                    key={foodShare.fields.Link}
                  >
                    Learn More
                  </Anchor>
                </div>
              </section>

              <iframe
                title="Google Map"
                src={foodShare.fields["Map URL"]}
                width="600"
                height="450"
                className="rounded-xl aspect-auto w-full md:w-96 h-64"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        );
      })}
    </>
  );
}
