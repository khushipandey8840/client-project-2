function successResponse(res, statusCode, data, message) {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  });
}

function errorResponse(res, statusCode, message, errors = []) {
  return res.status(statusCode).json({
    success: false,
    data: null,
    message,
    errors,
  });
}

module.exports = {
  successResponse,
  errorResponse,
};