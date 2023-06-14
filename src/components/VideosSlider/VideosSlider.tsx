import { FC, Fragment, memo, useMemo, useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
import Slider, { Settings } from "react-slick";
import { useMediaQuery, useTheme } from "@mui/material";
import BackdropOverlay from "components/BackdropOverlay/BackdropOverlay";
import AspectRatio from "components/AspectRatio/AspectRatio";
import Arrow from "components/Arrow/Arrow";
import { PlayerContainer } from "./VideosSlider.styled";
import VideoCard from "components/VideoCard/VideoCard";
import VideoPlayer from "components/VideoPlayer/VideoPlayer";

// @ts-ignore
import SampleVideo from "assets/SampleVideo.mp4";

const VideosSlider: FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const sliderRef = useRef<Slider | null>(null);

  const [open, setOpen] = useState(false);
  const [isIdle, setIdle] = useState(false);

  const onIdle = () => setIdle(true);

  const onActive = () => setIdle(false);

  useIdleTimer({
    crossTab: true,
    timeout: 3000,
    onIdle,
    onActive,
  });

  const settings: Settings = useMemo(
    () => ({
      nextArrow: <Arrow direction="right" />,
      prevArrow: <Arrow direction="left" />,
      dots: false,
      speed: 500,
      lazyLoad: "progressive",
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: isDesktop ? false : true,
      verticalSwiping: isDesktop ? false : true,
      adaptiveHeight: true,
    }),
    [isDesktop]
  );

  return (
    <Fragment>
      <BackdropOverlay open={true}>
        <PlayerContainer className="PlayerContainer">
          <AspectRatio
            ratio={9 / 16}
            style={{
              height: "100vh",
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Slider {...settings} ref={sliderRef}>
              {new Array(3).fill(null).map((_, index) => (
                <VideoCard
                  title={`Card #${index + 1}`}
                  onClick={() => setOpen(true)}
                />
              ))}
            </Slider>
          </AspectRatio>
        </PlayerContainer>
      </BackdropOverlay>
      <VideoPlayer
        src={SampleVideo}
        open={open}
        setOpen={setOpen}
        isIdle={isIdle}
      />
    </Fragment>
  );
};

export default memo(VideosSlider);
