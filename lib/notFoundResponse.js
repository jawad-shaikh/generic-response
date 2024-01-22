const notFoundResponse = (error) => {
  return {
    status: {
      code: 404,
      success: false,
    },
    data: null,
    error: error || "Not Found",
    message: null,
  };
};

module.exports = notFoundResponse;
