const forbiddenResponse = () => {
    return {
        status: {
            code: 403,
            success: true,
        },
        data: [],
        error: "The server understands the request but refuses to authorize it.",
        message: null,
    };
};

module.exports = forbiddenResponse;