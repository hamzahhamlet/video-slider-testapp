import { styled, Box, IconButton } from "@mui/material";
import { PauseRounded, PlayArrowRounded } from "@mui/icons-material";
import { ControlsSizeType } from "./PlayerControls";

enum ControlIconButtonEnum {
  medium = "40px",
  large = "64px",
}

enum PlayPauseButtonEnum {
  medium = "40px",
  large = "80px",
}

enum PlayPauseIconEnum {
  medium = "24px",
  large = "56px",
}

enum PlayPauseButtonColor {
  neonYellow = "#FFFF00",
  black80 = "#404040",
}

interface ISizeProp {
  size: ControlsSizeType;
  playPauseButtonColor?: "neonYellow" | "black80";
}

export const ControlButtonsBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ControlIconButton = styled(IconButton)<ISizeProp>(({ size }) => ({
  width: ControlIconButtonEnum[size],
  height: ControlIconButtonEnum[size],
}));

export const PlayPauseButton = styled(IconButton)<ISizeProp>(
  ({ size, playPauseButtonColor }) => ({
    width: PlayPauseButtonEnum[size],
    height: PlayPauseButtonEnum[size],
    margin: "0px 24px",
    backgroundColor: PlayPauseButtonColor[playPauseButtonColor || "neonYellow"],

    [":hover"]: {
      backgroundColor: `${
        PlayPauseButtonColor[playPauseButtonColor || "neonYellow"]
      } !important`,
    },
  })
);

export const PauseRoundedIcon = styled(PauseRounded)<ISizeProp>(
  ({ size, playPauseButtonColor }) => ({
    fontSize: PlayPauseIconEnum[size],
    color: playPauseButtonColor === "neonYellow" ? "#000" : "#fff",
  })
);

export const PlayArrowRoundedIcon = styled(PlayArrowRounded)<ISizeProp>(
  ({ size, playPauseButtonColor }) => ({
    fontSize: PlayPauseIconEnum[size],
    color: playPauseButtonColor === "neonYellow" ? "#000" : "#fff",
  })
);
