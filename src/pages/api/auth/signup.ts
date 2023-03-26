import { NextApiRequest, NextApiResponse } from "next";

import { supabase } from "utils/supabaseClient";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const { data, error } = await supabase.auth.signUp(body);

  // if (err) {
  //   console.error(err);
  //   res.status(500).json({ status: "error" });
  //   return;
  // }
}
