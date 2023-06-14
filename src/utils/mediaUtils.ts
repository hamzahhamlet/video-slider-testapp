import moment from "moment";

export function formatDuration(value: number) {
  const minute = Math.floor(value / 60);
  const secondLeft = value - minute * 60;
  return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
}

export function secsToDateTime(secs: number) {
  var t = new Date(1970, 0, 1); // Epoch
  t.setSeconds(secs);
  return t;
}

export function secsToFormattedDuration(secs: number) {
  return moment(secsToDateTime(secs)).format("mm:ss");
}

export function covertProgressIntoCurrentTime(
  progress: number,
  duration: number
) {
  const currentTime = (duration / 100) * progress;
  return secsToFormattedDuration(currentTime);
}
