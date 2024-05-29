// Path: src/index.ts
import express from "express";

import holidays from "./routes/holidays";
import countries from "./routes/countries";

const app = express();
const port = 5000;

app.get("/", async (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", holidays);

app.use("/api", countries);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
