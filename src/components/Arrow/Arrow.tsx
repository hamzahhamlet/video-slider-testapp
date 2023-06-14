import { FC } from "react";
import { CustomArrowProps } from "react-slick";
import { ArrowContainer } from "./Arrow.styled";
import { arrowLeftIcon, arrowRightIcon } from "assets/icons";

interface ArrowProps extends CustomArrowProps {
  direction: "left" | "right";
}

const Arrow: FC<ArrowProps> = ({ direction, onClick }) => (
  <ArrowContainer direction={direction} onClick={onClick}>
    <img
      src={direction === "left" ? arrowLeftIcon : arrowRightIcon}
      alt="right arros"
      height="24px"
      width="24px"
    />
  </ArrowContainer>
);

export default Arrow;
