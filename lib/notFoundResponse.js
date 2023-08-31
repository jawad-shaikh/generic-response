const notFoundResponse = () => {
    return {
        status: {
            code: 404,
            success: false,
        },
        data: null,
        error: "Not Found",
        message: null,
    };
};

module.exports = notFoundResponse;