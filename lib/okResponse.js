const okResponse = (data = null, message = null) => {
    return {
        status: {
            code: 200,
            success: true,
        },
        data: data,
        error: null,
        message: message,
    };
};

module.exports = okResponse;