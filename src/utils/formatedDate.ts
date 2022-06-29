export const formatedDate = (date: Date): string => {
  const newDate = new Date(date);

  return (
    ("0" + String(newDate.getDate())).slice(-2) +
    "." +
    ("0" + String(newDate.getMonth() + 1)).slice(-2) +
    "." +
    String(newDate.getFullYear()) +
    ", " +
    ("0" + String(newDate.getHours())).slice(-2) +
    ":" +
    ("0" + String(newDate.getMinutes())).slice(-2) +
    ":" +
    ("0" + String(newDate.getSeconds())).slice(-2)
  );
};
