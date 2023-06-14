import { FC } from "react";
import {
  ControlButtonsBox,
  ControlIconButton,
  PlayPauseButton,
  PauseRoundedIcon,
  PlayArrowRoundedIcon,
} from "./PlayerControls.styled";
import { reverse10Icon, forward10Icon } from "assets/icons";

export type ControlsSizeType = "medium" | "large";

interface Props {
  size: ControlsSizeType;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onProgressJump: (seconds: number, jumpType: "backward" | "forward") => void;
  playPauseButtonColor?: "neonYellow" | "black80";
}

const PlayerControls: FC<Props> = ({
  size,
  isPlaying,
  onTogglePlay,
  onProgressJump,
  playPauseButtonColor = "neonYellow",
}) => (
  <ControlButtonsBox>
    <ControlIconButton
      size={size}
      onClick={() => onProgressJump(10, "backward")}
    >
      <img src={reverse10Icon} alt="reverse10Icon" />
    </ControlIconButton>
    <PlayPauseButton
      aria-label={!isPlaying ? "play" : "pause"}
      onClick={onTogglePlay}
      size={size}
      playPauseButtonColor={playPauseButtonColor}
    >
      {!isPlaying ? (
        <PlayArrowRoundedIcon
          size={size}
          playPauseButtonColor={playPauseButtonColor}
        />
      ) : (
        <PauseRoundedIcon
          size={size}
          playPauseButtonColor={playPauseButtonColor}
        />
      )}
    </PlayPauseButton>
    <ControlIconButton
      size={size}
      onClick={() => onProgressJump(10, "forward")}
    >
      <img src={forward10Icon} alt="forward10Icon" />
    </ControlIconButton>
  </ControlButtonsBox>
);

export default PlayerControls;
