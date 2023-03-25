import { CardSection } from "components/CardSection";

import { Carousel } from "./Carousel";

export function PhotosSection() {
  const NUMBER_OF_PHOTOS = 65;

  const photos = Array.from(
    { length: NUMBER_OF_PHOTOS },
    (_, i) => `/album/${i + 1}.jpg`
  );

  return (
    <CardSection title="Photos">
      <Carousel
        width="100%"
        className="w-full max-w-96"
        showThumbs={true}
        autoPlay={true}
        showIndicators={false}
      >
        {photos.map((photo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={photo} src={photo} alt="CS Photos" />
        ))}
      </Carousel>
    </CardSection>
  );
}
