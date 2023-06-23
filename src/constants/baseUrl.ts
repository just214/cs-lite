import { NODE_ENV } from "utils/env";

export const baseUrl =
  NODE_ENV === "production"
    ? "https://cs-lite.vercel.app"
    : "http://localhost:3000";
