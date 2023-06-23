import Airtable from "airtable";
import { NextApiRequest, NextApiResponse } from "next";

import { AirTableFoodShare } from "types";
import { AIRTABLE_BASE_ID, AIRTABLE_TOKEN } from "utils/env";

const base = new Airtable({ apiKey: AIRTABLE_TOKEN }).base(AIRTABLE_BASE_ID);

export async function fetchFoodShares(): Promise<AirTableFoodShare[]> {
  const results: AirTableFoodShare[] = [];
  return base("Food Shares")
    .select({
      maxRecords: 10,
      view: "Grid view",
    })
    .eachPage((records, fetchNextPage) => {
      records.forEach((record) => {
        // eslint-disable-next-line functional/immutable-data
        results.push(record as unknown as AirTableFoodShare);
      });
      fetchNextPage();
    })
    .then((v) => {
      return results;
    });
}

export function formSubmission(tableName: string) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body;

    base(tableName).create(
      [
        {
          fields: body,
        },
      ],
      function (err) {
        if (err) {
          console.error(err);
          res.status(500).json({ status: "error" });
          return;
        }
        res.status(200).json({ status: "success" });
        return;
      }
    );
  };
}
