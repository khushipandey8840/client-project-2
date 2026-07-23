const express = require("express");

const router = express.Router();

const {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointmentController");

const validateAppointment = require("../middleware/validation");

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

router.post(
  "/",
  validateAppointment,
  createAppointment
);

router.put(
  "/:id",
  validateAppointment,
  updateAppointment
);

router.delete("/:id", deleteAppointment);

module.exports = router;