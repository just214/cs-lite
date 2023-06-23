import * as React from "react";

import { createMetadata } from "utils/createMetadata";

import { Lightbox } from "./Lightbox";

export const metadata = createMetadata({
  title: "WFC",
  path: "/wfc",
});

export default function App() {
  return <Lightbox />;
}
