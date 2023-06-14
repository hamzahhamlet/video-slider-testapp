import { FC } from "react";
import { SxProps } from "@mui/material";
import { TimeBoxWrapper, TinyText } from "./PlayerTimeBox.styled";
import { covertProgressIntoCurrentTime, secsToFormattedDuration } from "utils";

interface Props {
  progress: number;
  duration: number;
  sx?: SxProps;
}

const PlayerTimeBox: FC<Props> = ({ progress, duration, sx }) => (
  <TimeBoxWrapper sx={sx}>
    <TinyText>{covertProgressIntoCurrentTime(progress, duration)}</TinyText>
    <TinyText sx={{ marginX: "2px" }}>/</TinyText>
    <TinyText>{secsToFormattedDuration(duration)}</TinyText>
  </TimeBoxWrapper>
);

export default PlayerTimeBox;
