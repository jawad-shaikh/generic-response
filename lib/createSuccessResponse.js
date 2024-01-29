const createSuccessResponse = (data = null, message) => {
  return {
    status: {
      code: 201,
      success: true,
    },
    data: data,
    error: null,
    message: message || "Created Successfully.",
  };
};

module.exports = createSuccessResponse;
