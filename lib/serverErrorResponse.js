const serverErrorResponse = (error = null, message = null) => {
    return {
        status: {
            code: 500,
            success: false,
        },
        data: null,
        error: error,
        message: message,
    };
};

module.exports = serverErrorResponse;