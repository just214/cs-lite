"use client";

import shuffle from "lodash/shuffle";
import Image from "next/image";
import Masonry from "react-responsive-masonry";

import { images } from "constants/wfc-album";

export function Gallery() {
  const values = shuffle(images);
  return (
    <Masonry>
      {values.map((src) => {
        return (
          <Image
            key={src.url}
            src={src.url}
            height={src.height}
            width={src.width}
            alt="wfc"
          />
        );
      })}
    </Masonry>
  );
}
