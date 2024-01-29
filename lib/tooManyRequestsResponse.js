const tooManyRequestsResponse = (error) => {
  return {
    status: {
      code: 429,
      success: false,
    },
    data: null,
    error: error || "Too many requests.",
    message: message,
  };
};

module.exports = tooManyRequestsResponse;
