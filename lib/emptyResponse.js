const emptyResponse = (message) => {
  return {
    status: {
      code: 200,
      success: true,
    },
    data: [],
    error: null,
    message: message || "No data found",
  };
};

module.exports = emptyResponse;
