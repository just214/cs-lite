"use client";

import ReactPlayer from "react-player";

import { CardSection } from "components/CardSection";

import { Carousel } from "./Carousel";

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
        emulateTouch={true}
        showArrows={false}
        showThumbs={true}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={false}
        renderItem={customRenderItem}
        renderThumbs={customRenderThumb}
      >
        {YOUTUBE_VIDEO_IDS.map((videoId) => {
          return (
            <ReactPlayer
              key={videoId}
              className="aspect-video"
              muted={true}
              controls={true}
              forceSafariHLS={true}
              width="100%"
              playsinline={true}
              url={`https://www.youtube.com/embed/${videoId}`}
            />
          );
        })}
      </Carousel>
    </CardSection>
  );
}
