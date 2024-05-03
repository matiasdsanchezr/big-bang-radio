"use client";

import React, { useRef, useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import H5AudioPlayer from "react-h5-audio-player";

import "./audio-player.css";

const AudioPlayerComponent = () => {
  const [url, setUrl] = useState(
    "https://radio.streamingnacional.online/8066/stream"
  );
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(1);
  const playerRef = useRef<H5AudioPlayer>(null);

  return (
    <div className="flex rounded p-3 gap-5 w-full max-w-[210px]">
      <AudioPlayer
        ref={playerRef}
        src={url}
        style={{
          backgroundColor: "#0008",
          padding: "1rem",
          borderRadius: "20px",
        }}
        showSkipControls={false}
        showFilledProgress={true}
        showJumpControls={false}
        timeFormat="mm:ss"
        customAdditionalControls={[]}
        customVolumeControls={[RHAP_UI.VOLUME]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
        customProgressBarSection={[
          RHAP_UI.CURRENT_TIME,
          // RHAP_UI.CURRENT_TIME,
          // RHAP_UI.VOLUME,
          // RHAP_UI.CURRENT_LEFT_TIME,
          // <div>/</div>,
          // RHAP_UI.DURATION,
        ]}
        onPause={() => {
          playerRef.current?.audio.current?.load();
        }}
        onPlay={() => {
          setUrl("https://radio.streamingnacional.online/8066/stream");
        }}
      />
    </div>
  );
};
export default AudioPlayerComponent;
