const serverErrorResponse = (error, message) => {
  return {
    status: {
      code: 500,
      success: false,
    },
    data: null,
    error: error || "Something went wrong.",
    message: message || null,
  };
};

module.exports = serverErrorResponse;
