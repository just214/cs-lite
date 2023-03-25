"use client";

import ReactPlayer from "react-player";

export const YoutubeSlide = ({
  url,
  isSelected,
}: {
  url: string;
  isSelected?: boolean;
}) => (
  <ReactPlayer
    muted={true}
    controls={true}
    width="100%"
    height="500px"
    url={url}
    playing={isSelected}
  />
);
