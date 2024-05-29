import { fetchHolidays } from "../services/holidays";
import { daysUntil, isWeekend } from "./helpers";

const generateHolidaysCsv = async (countryCode?: string) => {
  const keys = ["Name", "Date", "Days Until", "Weekend"];

  try {
    const data = await fetchHolidays(countryCode);

    if (!data.length) {
      return null;
    }

    let csvString = keys.join(",") + "\n";

    for (const item of data) {
      const date = new Date(item.date);
      csvString += `${item.name.replace(/,/g, "")},${item.date},${
        daysUntil(date) ?? ""
      },${isWeekend(date) ? "Yes" : "No"}\n`;
    }
    return csvString;
  } catch (error) {
    console.error(error);
  }
};

export { generateHolidaysCsv };
