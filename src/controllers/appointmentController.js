const sanitizeText = require("../utils/sanitize");
const {
  successResponse,
  errorResponse,
} = require("../utils/response");

let appointments = [
  {
    id: 1,
    customerName: "Rahul Sharma",
    carNumber: "UP32AB1234",
    service: "Express Wash",
    appointmentTime: "10:30 AM",
  },
];

let nextId = 2;

// GET all appointments
function getAppointments(req, res) {
  console.log("[Analytics] User interacted with Express API");

  if (appointments.length === 0) {
    return successResponse(
      res,
      200,
      [],
      "No data found"
    );
  }

  return successResponse(
    res,
    200,
    appointments,
    "Appointments fetched successfully"
  );
}

// GET single appointment
function getAppointmentById(req, res) {
  const id = Number(req.params.id);

  const appointment = appointments.find(
    (item) => item.id === id
  );

  if (!appointment) {
    return errorResponse(
      res,
      404,
      "Appointment not found"
    );
  }

  return successResponse(
    res,
    200,
    appointment,
    "Appointment fetched successfully"
  );
}

// POST appointment
function createAppointment(req, res) {
  const {
    customerName,
    carNumber,
    service,
    appointmentTime,
  } = req.body;

  const newAppointment = {
    id: nextId++,
    customerName: sanitizeText(customerName),
    carNumber: sanitizeText(carNumber),
    service: sanitizeText(service),
    appointmentTime: sanitizeText(appointmentTime),
  };

  appointments.push(newAppointment);

  console.log(
    "[Analytics] User interacted with Express API"
  );

  return successResponse(
    res,
    201,
    newAppointment,
    "Appointment created successfully"
  );
}

// PUT appointment
function updateAppointment(req, res) {
  const id = Number(req.params.id);

  const appointmentIndex = appointments.findIndex(
    (item) => item.id === id
  );

  if (appointmentIndex === -1) {
    return errorResponse(
      res,
      404,
      "Appointment not found"
    );
  }

  const {
    customerName,
    carNumber,
    service,
    appointmentTime,
  } = req.body;

  appointments[appointmentIndex] = {
    id,
    customerName: sanitizeText(customerName),
    carNumber: sanitizeText(carNumber),
    service: sanitizeText(service),
    appointmentTime: sanitizeText(appointmentTime),
  };

  console.log(
    "[Analytics] User interacted with Express API"
  );

  return successResponse(
    res,
    200,
    appointments[appointmentIndex],
    "Appointment updated successfully"
  );
}

// DELETE appointment
function deleteAppointment(req, res) {
  const id = Number(req.params.id);

  const appointmentIndex = appointments.findIndex(
    (item) => item.id === id
  );

  if (appointmentIndex === -1) {
    return errorResponse(
      res,
      404,
      "Appointment not found"
    );
  }

  const deletedAppointment =
    appointments.splice(appointmentIndex, 1);

  console.log(
    "[Analytics] User interacted with Express API"
  );

  return successResponse(
    res,
    200,
    deletedAppointment[0],
    "Appointment deleted successfully"
  );
}

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};