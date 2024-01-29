const okResponse = (data, message) => {
  return {
    status: {
      code: 200,
      success: true,
    },
    data: data || null,
    error: null,
    message: message || null,
  };
};

module.exports = okResponse;
