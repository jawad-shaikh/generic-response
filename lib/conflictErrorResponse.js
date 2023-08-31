const conflictErrorResponse = (error = null, message = null) => {
    return {
        status: {
            code: 409,
            success: false,
        },
        data: null,
        error: error,
        message: message,
    };
};

module.exports = conflictErrorResponse;