import { styled } from "@mui/material";

export const ArrowContainer = styled("div")<{ direction: "left" | "right" }>(
  ({ direction }) => ({
    position: "absolute",
    left: direction === "left" ? "-70px" : "unset",
    right: direction === "right" ? "-70px" : "unset",
    top: "50%",
    cursor: "pointer",
  })
);
