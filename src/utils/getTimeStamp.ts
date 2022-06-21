import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

export const getTimeDistanceString = (date: Date, baseDate: Date) =>
  `${formatDistance(date, baseDate, {
    includeSeconds: true,
    addSuffix: true,
  })} (${format(date, "yyyy/MM/dd HH:mm:ss:SSS")})`;

const getCurrentDate = () => new Date().getTime();

export default getCurrentDate;
