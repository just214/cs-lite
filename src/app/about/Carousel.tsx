"use client";

import {
  Carousel as BaseCarousel,
  CarouselProps,
} from "react-responsive-carousel";

export function Carousel(props: Partial<CarouselProps>) {
  return <BaseCarousel {...props} />;
}
