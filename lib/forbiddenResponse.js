const forbiddenResponse = (error) => {
  return {
    status: {
      code: 403,
      success: true,
    },
    data: [],
    error: error || "Refuses to authorize it.",
    message: null,
  };
};

module.exports = forbiddenResponse;
