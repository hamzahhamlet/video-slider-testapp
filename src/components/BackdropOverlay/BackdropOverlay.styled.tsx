import { styled } from "@mui/material";

export const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  maxHeight: "-webkit-fill-available",
  background: "rgba(0, 0, 0, 0.64)",
  backdropFilter: "blur(8px)",
  zIndex: 1000,
});
