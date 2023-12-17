"use client";
import MuxPlayer from "@mux/mux-player-react";

import React from "react";

const Video = () => {
  return (
    <div className="relative">
      <MuxPlayer
        streamType="on-demand"
        playbackId="IAwHsT01TsfbDOY6Kbhim6p9uSrcotN7cEJyjjFX401WA"
        metadataVideoTitle="Placeholder (optional)"
        metadataViewerUserId="Placeholder (optional)"
        primaryColor="#FFFFFF"
        secondaryColor="#000000"
        className="mx-auto w-full"
      />
    </div>
  );
};

export { Video };
