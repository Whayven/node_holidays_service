import { Holiday } from "@/types/nager";

const apiBaseUrl = "https://date.nager.at/api/v3";
const defaultCountryCode = "AT";

export const fetchHolidays = async (countryCode = defaultCountryCode) => {
  const response = await fetch(
    `${apiBaseUrl}/publicholidays/2024/${countryCode}`
  );
  const holidays = (await response.json()) as Holiday[];
  return holidays;
};

export const fetchAvailableCountries = async () => {
  const response = await fetch(`${apiBaseUrl}/AvailableCountries`);
  const countries = (await response.json()) as [];
  return countries;
};
