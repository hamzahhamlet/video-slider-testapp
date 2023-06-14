import { useState, useEffect, RefObject } from "react";

const useMediaPlayer = (
  mediaElement: RefObject<HTMLMediaElement | HTMLAudioElement>
) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    duration: 0,
    progress: 0,
    speed: 1,
    isMuted: false,
    isBuffering: false,
    canPlay: false,
    isError: false,
  });

  // Effect Init Media Events
  useEffect(() => {
    if (mediaElement.current) {
      mediaElement.current.onloadedmetadata = () => {
        setPlayerState((prevState) => ({
          ...prevState,
          duration: mediaElement.current?.duration ?? 0,
        }));
      };

      mediaElement.current.onwaiting = () => {
        setPlayerState((prevState) => ({
          ...prevState,
          isBuffering: true,
        }));
      };

      mediaElement.current.oncanplay = () => {
        setPlayerState((prevState) => ({
          ...prevState,
          canPlay: true,
        }));
      };

      mediaElement.current.onerror = (ev) => {
        setPlayerState((prevState) => ({
          ...prevState,
          isError: true,
        }));
      };

      mediaElement.current.onplaying = () => {
        setPlayerState((prevState) => ({
          ...prevState,
          isBuffering: false,
          isPlaying: true,
        }));
      };

      mediaElement.current.onended = () => {
        setPlayerState((prevState) => ({
          ...prevState,
          isPlaying: false,
        }));
      };
    }
  }, [mediaElement]);

  // Effect to hadnle the Playing state
  useEffect(() => {
    if (mediaElement.current) {
      playerState.isPlaying
        ? mediaElement.current.play()
        : mediaElement.current.pause();
    }
  }, [playerState.isPlaying, mediaElement]);

  // Effect to handle the Mute state
  useEffect(() => {
    if (mediaElement.current) {
      playerState.isMuted
        ? (mediaElement.current.muted = true)
        : (mediaElement.current.muted = false);
    }
  }, [playerState.isMuted, mediaElement]);

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  const handleOnTimeUpdate = () => {
    if (mediaElement.current) {
      const progress =
        (mediaElement.current.currentTime / mediaElement.current.duration) *
        100;
      setPlayerState({
        ...playerState,
        progress,
      });
    }
  };

  const handleMediaProgress = (event: any) => {
    if (mediaElement.current) {
      const manualChange = Number(event.target.value);
      mediaElement.current.currentTime =
        (mediaElement.current.duration / 100) * manualChange;
      setPlayerState({
        ...playerState,
        progress: manualChange,
      });
    }
  };

  const toggleFullscreen = (event: any) => {
    if (mediaElement.current) {
      mediaElement.current.requestFullscreen();
    }
  };

  const handleMediaProgressJump = (
    seconds: number,
    jumpType: "backward" | "forward"
  ) => {
    if (!mediaElement.current) return;

    let isPlaying = playerState.isPlaying;
    let progress = playerState.progress;
    let currentTimeAfterJump =
      jumpType === "backward"
        ? mediaElement.current.currentTime - seconds
        : mediaElement.current.currentTime + seconds;

    if (currentTimeAfterJump < 0) {
      mediaElement.current.currentTime = 0;
      progress = 0;
    } else if (currentTimeAfterJump > mediaElement.current.duration) {
      mediaElement.current.currentTime = mediaElement.current.duration;
      progress = 100;
      isPlaying = false;
    } else {
      mediaElement.current.currentTime = currentTimeAfterJump;
      progress = (currentTimeAfterJump / mediaElement.current.duration) * 100;
    }

    setPlayerState({
      ...playerState,
      progress,
      isPlaying,
    });
  };

  const handleMediaSpeed = (event: any) => {
    if (mediaElement.current) {
      const speed = Number(event.target.value);
      mediaElement.current.playbackRate = speed;
      setPlayerState({
        ...playerState,
        speed,
      });
    }
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleMediaProgress,
    handleMediaProgressJump,
    handleMediaSpeed,
    toggleMute,
    toggleFullscreen,
  };
};

export default useMediaPlayer;
