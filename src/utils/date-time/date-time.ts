import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateTime = ({ dateTime }: { dateTime: string }) => {
  return dayjs(dateTime).tz("Asia/Kolkata").format("YYYY-MM-DD hh:mm A");
};
