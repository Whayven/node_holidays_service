import { generateHolidaysCsv } from "../util/csv";
import express from "express";

const router = express.Router();

const validateCountryCode = (code: string) => {
  return /^[A-Z]{2}$/.test(code);
};

router.get("/holidays", async (req, res) => {
  const countryCode = req.query.country_code as string;

  if (countryCode && !validateCountryCode(countryCode)) {
    res.status(400).json({ error: "Invalid country code." });
    return;
  }

  try {
    const csvString = await generateHolidaysCsv(countryCode);

    if (!csvString) {
      res.status(404).json({ error: "No data available." });
      return;
    }

    res.setHeader("Content-Type", "text/csv");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=holidays_${countryCode ?? "AT"}.csv`
    );
    console.log(res);

    res.send(csvString);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
});

export default router;
