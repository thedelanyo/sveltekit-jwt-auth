import { readable } from "svelte/store";
import duration from "dayjs/plugin/duration.js";
import dayjs from "dayjs";
import { getTomorrow } from "$lib/helpers/words";

dayjs.extend(duration);

const addLeadingZero = (time = 0) => {
  if (time < 10) {
    return `0${time}`;
  }
  return time;
};

const formatTimeFrame = () => {
  const { tomorrow } = getTomorrow();

  const diff = dayjs.duration(tomorrow.diff(new Date()));

  return `${addLeadingZero(diff.hours())}:${addLeadingZero(
    diff.minutes()
  )}:${addLeadingZero(diff.seconds())}`;
};

export const countdown = readable(formatTimeFrame(), (set) => {
  const interval = setInterval(() => {
    set(formatTimeFrame());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});
