import dayjs from "dayjs";
import { dictionary } from "$lib/games/dictionary";
import { targetWords } from "$lib/games/targetWords";

export const isInWordList = (word: string) => {
  return (
    dictionary.includes(word.toLowerCase()) ||
    targetWords.includes(word.toLowerCase())
  );
};

export const getDaysSince = (date: string | number) => {
  const dayOne = dayjs(date);
  const today = dayjs();

  const daysSince = today.diff(dayOne, "days");

  return { daysSince };
};

export const getWordOfDay = () => {
  const { daysSince } = getDaysSince("2022-01-01");

  return {
    solution: targetWords[daysSince % targetWords.length].toLowerCase(),
  };
};

export const getTomorrow = () => {
  const today = dayjs();

  const tomorrow = today.add(1, "day").startOf("day");

  return { tomorrow };
};

export const getDayWord = () => {
  const { daysSince } = getDaysSince("2022-01-01");

  return { dayWord: dictionary[daysSince % dictionary.length].toLowerCase() };
};
