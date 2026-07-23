const { errorResponse } = require("../utils/response");

function validateAppointment(req, res, next) {
  const { customerName, carNumber, service, appointmentTime } = req.body;

  const errors = [];

  if (!customerName || customerName.trim() === "") {
    errors.push("Customer name is required");
  }

  if (!carNumber || carNumber.trim() === "") {
    errors.push("Car number is required");
  }

  if (!service || service.trim() === "") {
    errors.push("Service is required");
  }

  if (!appointmentTime || appointmentTime.trim() === "") {
    errors.push("Appointment time is required");
  }

  if (errors.length > 0) {
    return errorResponse(
      res,
      400,
      "Invalid appointment data",
      errors
    );
  }

  next();
}

module.exports = validateAppointment;