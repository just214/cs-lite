import Airtable from "airtable";

import { AirTableFoodShare } from "types";
const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function fetchFoodShares(): Promise<AirTableFoodShare[]> {
  const results = [];
  return base("Food Shares")
    .select({
      maxRecords: 10,
      view: "Grid view",
    })
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        results.push(record);
      });
      fetchNextPage();
    })
    .then((v) => {
      return results;
    });
}
