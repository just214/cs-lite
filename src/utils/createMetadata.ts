import { baseUrl } from "constants/baseUrl";

import type { Metadata } from "next";

type Args = {
  title?: string;
  description?: string;
  path?: `/${string}`;
  image?: string;
};

const defaultTitle = "CS Lite";
const defaultDescription =
  "Welcome to CS Lite, a Community Solidarity project.";
const defaultPath = "";
const defaultImage = "/cs-lite.png";

export function createMetadata(args?: Args): Metadata {
  const title = args?.title || defaultTitle;
  const description = args?.description || defaultDescription;
  const path = args?.path || defaultPath;
  const image = args?.image || defaultImage;

  const url = `${baseUrl}${path}`;
  return {
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
          alt: "Long Island JavaScript",
        },
      ],
      locale: "en-US",
      type: "website",
    },

    // Icons
    icons: {
      icon: "/icon.svg",
      // shortcut: "/shortcut-icon.png",
      apple: "/apple-touch-icon.png",
      // other: {
      //   rel: "apple-touch-icon-precomposed",
      //   url: "/apple-touch-icon-precomposed.png",
      // },
    },

    // Manifest
    manifest: "manifest.webmanifest",

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
