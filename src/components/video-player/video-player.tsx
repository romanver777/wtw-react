import React from "react";

import { VideoType } from "../../types/types";
import { convertUrl } from "../../helpers/helpers";

interface Props {
  data: VideoType;
}

const style: { [key: string]: string | number } = {
  position: "absolute",
  zIndex: 4,
  width: "100%",
  height: "100%",
  top: 0,
};

const VideoPlayer: React.FC<Props> = ({ data }) => {
  return (
    data && (
      <iframe
        style={style}
        src={convertUrl(data.trailers[0].url)}
        frameBorder="10"
        allowFullScreen
      ></iframe>
    )
  );
};

export default VideoPlayer;
