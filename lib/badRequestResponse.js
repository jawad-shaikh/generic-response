const badRequestResponse = (error = null) => {
    return {
        status: {
            code: 400,
            success: false,
        },
        data: null,
        error: error,
        message: null,
    };
};

module.exports = badRequestResponse;