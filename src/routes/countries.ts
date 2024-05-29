import { fetchAvailableCountries } from "../services/holidays";
import express from "express";

const router = express.Router();

router.get("/countries", async (_req, res) => {
  try {
    const countries = await fetchAvailableCountries();
    if (!countries.length) {
      res.status(404).json({ error: "No data available." });
      return;
    }
    res.json(countries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
});

export default router;
