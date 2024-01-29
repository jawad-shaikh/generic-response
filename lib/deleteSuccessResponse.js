const deleteSuccessResponse = (data, message) => {
  return {
    status: {
      code: 200,
      success: true,
    },
    data: data || null,
    error: null,
    message: message || "Deleted Successfully.",
  };
};

module.exports = deleteSuccessResponse;
