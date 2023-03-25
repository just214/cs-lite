"use client";

import { CardSection } from "components/CardSection";

import { Carousel } from "./Carousel";
import { YoutubeSlide } from "./YoutubeSlide";

const YOUTUBE_VIDEO_IDS = [
  "SbZTR5rMvn4",
  "xuQPQ9ly-ek",
  "v76MyFuXfqc",
  "1TreRFT6Zqg",
  "E_IPVJSfwl0",
];

export function VideosSection() {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => {
    return url.split("https://www.youtube.com/embed/")[1];
  };

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      // eslint-disable-next-line @next/next/no-img-element
      return <img key={videoId} src={getVideoThumb(videoId)} alt="thumbnail" />;
    });
  return (
    <CardSection title="Videos">
      <Carousel
        width="100%"
        className="w-full max-w-96"
        emulateTouch={true}
        showArrows={true}
        showThumbs={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}
        renderItem={customRenderItem}
        renderThumbs={customRenderThumb}
      >
        {YOUTUBE_VIDEO_IDS.map((videoId) => {
          return (
            <YoutubeSlide
              key={videoId}
              url={`https://www.youtube.com/embed/${videoId}`}
            />
          );
        })}
      </Carousel>
    </CardSection>
  );
}
