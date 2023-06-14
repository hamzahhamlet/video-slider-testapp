import { styled } from "@mui/material";

export const Root = styled("div")(() => ({
  position: "relative",
}));

export const Wrapper = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  "& > *": { height: "100%", width: "100%" },
}));

export const ContainerWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

export const SliderWrapper = styled("div")(() => ({
  "& .slick-vertical": {
    "& .slick-slide, .slick-list": {
      //  height:'auto !important'
    },
  },
}));

//re-facroring;

export const PlayerContainer = styled("div")(() => ({
  height: "100vh",
  width: "100vw",
  position: "relative",
  overflow: "hidden",
}));

export const CloseImage = styled("img")(() => ({
  position: "absolute",
  right: "20px",
  top: "20px",
  zIndex: 1,
  height: "40px",
  width: "40px",
  cursor: "pointer",
}));
