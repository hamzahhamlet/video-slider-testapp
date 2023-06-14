import { styled, Box } from "@mui/material";

interface ActivityProps {
  isIdle: boolean;
}

export const VideoPlayerContainer = styled(Box)<{ open: boolean }>(
  ({ theme, open }) => ({
    display: open ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    zIndex: 1000,
    overflow: "hidden !important",
    background: "#000",
  })
);

export const VideoWrapper = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",

  ":hover .controls": {
    transform: "translateY(0%)",
  },
});

export const Video = styled("video")({
  width: "100%",
  height: "100%",
});

export const CloseControlWrapper = styled(Box)<ActivityProps>(({ isIdle }) => ({
  display: isIdle ? "none" : "block",
  position: "absolute",
  top: "5%",
  right: "3%",
  zIndex: 999,
  transform: "translate(-3%, -5%)",
}));

export const CentralControlsWrapper = styled(Box)<ActivityProps>(
  ({ isIdle }) => ({
    display: isIdle ? "none" : "block",
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 999,
    transform: "translate(-50%, -50%)",
  })
);

export const VideoPlayerTimeline = styled("div")<ActivityProps>(
  ({ isIdle }) => ({
    display: isIdle ? "none" : "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "1rem 2rem",
    width: "100%",
  })
);

export const VelocityControl = styled("select")({
  appearance: "none",
  background: "none",
  color: "white",
  outline: "none",
  border: "none",
  textAlign: "center",
  fontSize: "12px",
  marginLeft: "8px",
});
