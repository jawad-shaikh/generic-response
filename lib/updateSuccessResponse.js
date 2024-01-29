const updateSuccessResponse = (data, message) => {
  return {
    status: {
      code: 200,
      success: true,
    },
    data: data || null,
    error: null,
    message: message || "Updated Successfully.",
  };
};

module.exports = updateSuccessResponse;
