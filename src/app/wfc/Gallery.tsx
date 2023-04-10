"use client";

import shuffle from "lodash/shuffle";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";

import { images } from "constants/wfc-album";

import type { RenderPhotoProps } from "react-photo-album";

function NextJsImage({
  imageProps: { src, alt, title, sizes, className },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={wrapperStyle}>
      <Image
        fill={true}
        src={src}
        alt={alt}
        title={title}
        sizes={sizes}
        className={className}
      />
    </div>
  );
}

export function Gallery() {
  const imgProps = shuffle(images);
  return (
    <PhotoAlbum layout="columns" photos={imgProps} renderPhoto={NextJsImage} />
  );
}
