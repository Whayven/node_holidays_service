import { fetchHolidays } from "../api/holidays";
import fs from "fs";
import { daysUntil, isWeekend } from "./helpers";

const createCsvFile = ({ keys, data }: { keys: string[]; data: any[] }) => {
  const writeStream = fs.createWriteStream("data.csv");
  writeStream.write(keys.join(","));
  writeStream.write("\n");
  data.forEach((item) => {
    writeStream.write(item.join(","));
    writeStream.write("\n");
  });
  return writeStream.end();
};

export const generateHolidaysCsv = async (countryCode?: string) => {
  try {
    const data = await fetchHolidays(countryCode);

    const keys = ["Name", "Date", "Days Until", "Weekend"];
    const values = data.map((item) => {
      console.log(item);

      const date = new Date(item.date);
      return [
        item.name.replace(/,/g, ""),
        item.date,
        daysUntil(date) ?? "",
        isWeekend(date) ? "Yes" : "No",
      ];
    });

    return createCsvFile({ keys, data: values });
  } catch (error) {
    console.error(error);
  }
};
