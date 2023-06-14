import { IconButton } from "@mui/material";
import { FC } from "react";
import {
  CardContainer,
  CardImg,
  CardTitle,
  CustomIconButton,
} from "./VideoCard.styled";
import { ReactComponent as PlayButtonIcon } from "assets/playButton.svg";

interface Props {
  title: string;
  onClick: () => void;
}

const VideoCard: FC<Props> = ({ title, onClick }) => {
  return (
    <CardContainer>
      <CardImg src={"/assets/Image2.png"} />
      <CustomIconButton onClick={onClick}>
        <PlayButtonIcon />
      </CustomIconButton>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};

export default VideoCard;
