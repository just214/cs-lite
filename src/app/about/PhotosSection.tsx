"use client";

import { CardSection } from "components/CardSection";
import { images } from "constants/photo-album";

import { Carousel } from "./Carousel";

export function PhotosSection() {
  return (
    <CardSection title="Photos">
      <Carousel
        className="w-full max-w-96"
        showThumbs={true}
        autoPlay={true}
        showIndicators={false}
      >
        {images.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={photo.src} src={photo.src} alt="CS Photos" />
        ))}
      </Carousel>
    </CardSection>
  );
}
