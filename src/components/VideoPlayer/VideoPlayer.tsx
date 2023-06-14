import { FC, useRef, useEffect } from "react";
import { useMediaPlayer } from "hooks";
import { IconButton } from "@mui/material";
import { Cancel, VolumeUp, VolumeOff } from "@mui/icons-material";
import {
  VideoPlayerContainer,
  VideoWrapper,
  Video,
  CloseControlWrapper,
  CentralControlsWrapper,
  VideoPlayerTimeline,
  VelocityControl,
} from "./VideoPlayer.styled";
import PlayerSlider from "./subComponents/PlayerSlider/PlayerSlider";
import PlayerControls from "./subComponents/PlayerControls/PlayerControls";
import PlayerTimeBox from "./subComponents/PlayerTimeBox/PlayerTimeBox";

interface Props {
  src: string;
  open: boolean;
  setOpen: (state: boolean) => void;
  isIdle: boolean;
}

const VideoPlayer: FC<Props> = ({ src, open, setOpen, isIdle }) => {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleMediaProgress,
    handleMediaProgressJump,
    handleMediaSpeed,
    toggleMute,
  } = useMediaPlayer(videoElement);

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const onCloseHandler = () => {
    if (playerState.isPlaying) togglePlay();
    setOpen(false);
  };

  return (
    <VideoPlayerContainer open={open}>
      <VideoWrapper>
        <Video
          src={src}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
          controlsList="nodownload"
        />
        <CloseControlWrapper isIdle={isIdle}>
          <IconButton onClick={onCloseHandler}>
            <Cancel sx={{ fontSize: "2rem" }} htmlColor={"#C4C4C4"} />
          </IconButton>
        </CloseControlWrapper>
        <CentralControlsWrapper isIdle={isIdle}>
          <PlayerControls
            isPlaying={playerState.isPlaying}
            onTogglePlay={() => togglePlay()}
            onProgressJump={handleMediaProgressJump}
            size={"large"}
            playPauseButtonColor={"black80"}
          />
        </CentralControlsWrapper>
        <VideoPlayerTimeline isIdle={isIdle}>
          <PlayerSlider
            aria-label="time-indicator"
            size="small"
            value={playerState.progress}
            min={0}
            step={1}
            max={100}
            onChange={(e) => handleMediaProgress(e)}
            railColor={"black80"}
          />
          <PlayerTimeBox
            progress={playerState.progress}
            duration={playerState.duration}
            sx={{ marginLeft: "16px" }}
          />
          <VelocityControl
            value={playerState.speed}
            onChange={(e) => handleMediaSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </VelocityControl>
          <IconButton onClick={toggleMute}>
            {!playerState.isMuted ? (
              <VolumeUp htmlColor={"#FFF"} />
            ) : (
              <VolumeOff htmlColor={"#FFF"} />
            )}
          </IconButton>
        </VideoPlayerTimeline>
      </VideoWrapper>
    </VideoPlayerContainer>
  );
};

export default VideoPlayer;
