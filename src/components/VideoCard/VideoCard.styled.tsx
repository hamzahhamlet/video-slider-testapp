import { Box, IconButton, styled, Typography } from "@mui/material";

export const CardContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "450px",
  background: "#red",
});

export const CardImg = styled("img")({
  width: "100%",
  height: "450px",
  objectFit: "cover",
});

export const CustomIconButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  width: "80px",
  height: "80px",

  ["> svg"]: {
    width: "100%",
    height: "100%",
  },
});

export const CardTitle = styled(Typography)({
  position: "absolute",
  bottom: "10%",
  left: "50%",
  fontWeight: 400,
  fontSize: "48px",
  lineHeight: "58px",
  color: "#FFFFFF",
  transform: "translate(-50%, -50%)",
});
