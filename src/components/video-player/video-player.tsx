import React from "react";

import { VideoDataType } from "../../types/types";
import { convertUrl } from "../../helpers/helpers";

interface Props {
  data: VideoDataType | null;
  isFullScreen: boolean;
}

const hoverStyle: { [key: string]: string | number } = {
  position: "absolute",
  zIndex: 4,
  width: "100%",
  height: "100%",
  top: 0,
};

const errorStyle: { [key: string]: string | number } = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "11px",
  background: "rgba(23,2,2,0.9)",
};

const VideoPlayer: React.FC<Props> = ({ data, isFullScreen }) => {
  if (!data)
    return (
      <div style={{ ...hoverStyle, ...errorStyle }}>Видео не доступно..</div>
    );

  const filterData = (dataObj: VideoDataType) =>
    dataObj.items.filter((obj) => obj.site.toLowerCase() == "youtube");

  const filtered = filterData(data);

  if (!filtered.length)
    return (
      <div style={{ ...hoverStyle, ...errorStyle }}>Видео не доступно..</div>
    );

  return (
    <iframe
      style={hoverStyle}
      src={convertUrl(filtered[0].url)}
      allowFullScreen={isFullScreen}
      frameBorder="0"
    ></iframe>
  );
};

export default VideoPlayer;
