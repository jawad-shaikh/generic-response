const conflictErrorResponse = (error, message) => {
  return {
    status: {
      code: 409,
      success: false,
    },
    data: null,
    error: error || null,
    message: message || null,
  };
};

module.exports = conflictErrorResponse;
