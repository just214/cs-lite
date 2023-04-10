"use client";

import shuffle from "lodash/shuffle";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";

import { images } from "constants/wfc-album";

export function Gallery() {
  const imgProps = shuffle(images);
  return <PhotoAlbum layout="columns" photos={imgProps} />;
}
