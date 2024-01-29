const unauthorizedResponse = (error) => {
  return {
    status: {
      code: 401,
      success: false,
    },
    data: null,
    error: error || "Unauthorized request",
    message: null,
  };
};

module.exports = unauthorizedResponse;
