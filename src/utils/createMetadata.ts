import { baseUrl } from "constants/baseUrl";

import type { Metadata } from "next";

type Args = {
  title: string;
  description?: string;
  path: `/${string}`;
  image?: string;
};

const defaultTitle = "CS Lite";
const defaultDescription =
  "Welcome to CS Lite, a Community Solidarity project.";
const defaultPath = "/";
const defaultImage = "/cs-lite.png";

export function createMetadata(args?: Args): Metadata {
  const title = args?.title || defaultTitle;
  const description = args?.description || defaultDescription;
  const path = args?.path || defaultPath;
  const image = args?.image || defaultImage;

  const url = `${baseUrl}${path}`;
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 628,
          alt: "Community Solidarity",
        },
      ],
      locale: "en-US",
      type: "website",
    },

    // Icons
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },

    // Manifest
    manifest: "/manifest.webmanifest",

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    // Viewport
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  };
}
