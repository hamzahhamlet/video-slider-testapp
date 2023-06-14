import { FC, useEffect } from "react";
import { Fade } from "@mui/material";
import { Overlay } from "./BackdropOverlay.styled";

interface Props {
  open?: boolean;
  children?: JSX.Element | JSX.Element[];
}

const BackdropOverlay: FC<Props> = ({ open = false, children }) => {
  useEffect(() => {
    let body = document.getElementsByTagName("body")[0];
    let html = document.getElementsByTagName("html")[0];

    if (open) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
      html.style.overflow = "auto";
    }
  }, [open]);

  return (
    <Fade in={open}>
      <Overlay>
        <div>{children || ""} </div>
      </Overlay>
    </Fade>
  );
};

export default BackdropOverlay;
