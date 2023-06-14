import { styled, Slider } from "@mui/material";
import { Props } from "./PlayerSlider";

enum RailColorEnum {
  black80 = "#404040",
  black100 = "#000",
}

export const PlayerSliderStyled = styled(Slider)<Props>(
  ({ theme, railColor }) => ({
    color: "rgba(0,0,0,0.87)",
    height: 8,
    scrollBehavior: "smooth",
    "& .MuiSlider-thumb": {
      width: 22,
      height: 22,
      border: `3px solid ${theme.palette.secondary.main}`,
      transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
      "&:before": {
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
      },
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 6px ${
          theme.palette.mode === "dark"
            ? "rgb(255 255 255 / 16%)"
            : "rgb(0 0 0 / 16%)"
        }`,
      },
      "&.Mui-active": {
        width: 18,
        height: 18,
      },
    },
    "& .MuiSlider-track": {
      backgroundColor: `${theme.palette.secondary.main} !important`,
    },
    "& .MuiSlider-rail": {
      backgroundColor: `${RailColorEnum[railColor]} !important`,
      opacity: 1,
    },
  })
);
