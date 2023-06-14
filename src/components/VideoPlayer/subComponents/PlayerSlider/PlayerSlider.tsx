import { FC } from "react";
import { SliderProps } from "@mui/material";
import { PlayerSliderStyled } from "./PlayerSlider.styled";

export interface Props extends SliderProps {
  railColor: "black80" | "black100";
}

const PlayerSlider: FC<Props> = (props) => <PlayerSliderStyled {...props} />;

export default PlayerSlider;
