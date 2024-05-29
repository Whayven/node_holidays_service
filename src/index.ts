import { takeInput } from "./util/input";
import { generateHolidaysCsv } from "./util/csv";
import { fetchAvailableCountries } from "./api/holidays";

// Path: src/index.ts

const main = async () => {
  const command = await takeInput();
  if (command === "list") {
    const countries = await fetchAvailableCountries();
    console.log(JSON.stringify(countries, null, 2));
    return;
  } else {
    await generateHolidaysCsv(command);
  }
  console.log("CSV file generated");
};

main();
