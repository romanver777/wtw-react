export const convertRatingLevel = (rt: string | null): string => {
  const rating = Number(rt);
  if (rating > 0 && rating < 4) return "Плохо";
  if (rating >= 4 && rating < 5) return "Удовлетворительно";
  if (rating >= 5 && rating < 6) return "Хорошо";
  if (rating >= 6 && rating < 7) return "Очень хорошо";
  if (rating >= 7 && rating < 8) return "Отлично";
  if (rating >= 8) return "Превосходно";
  return "-";
};

export const convertDateTime = (date: string): string => {
  return new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
