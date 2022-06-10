export const getDay = (day: 0 | 1 | 2 | 3 | 4 | 5 | 6): string => {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][day];
};
