export const getFormatDatetime = (datetime: Date, format: string) => {
  const origin = datetime.toISOString();

  const year = format.includes("YYYY")
    ? origin.substring(0, 4)
    : origin.substring(2, 4);
  const month = origin.substring(5, 7);
  const date = origin.substring(8, 10);
  const hour = origin.substring(11, 13);
  const minute = origin.substring(14, 16);

  const result = format
    .replace(/YYYY/g, year)
    .replace(/YY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, date)
    .replace(/HH/g, hour)
    .replace(/mm/g, minute);

  return result;
};
