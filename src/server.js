const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const appointmentRoutes = require("./routes/appointmentRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Express API is running",
  });
});

app.use(
  "/api/appointments",
  appointmentRoutes
);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Express API server running on http://localhost:${PORT}`
  );
});