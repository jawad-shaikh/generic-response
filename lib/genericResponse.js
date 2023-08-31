const genericResponse = (
    status,
    success,
    data = null,
    error = null,
    message = null
) => {
    return {
        status: {
            code: status,
            success: success,
        },
        data: data,
        error: error,
        message: message,
    };
};

module.exports = genericResponse;