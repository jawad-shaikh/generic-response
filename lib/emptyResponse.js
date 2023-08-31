const emptyResponse = () => {
    return {
        status: {
            code: 200,
            success: true,
        },
        data: [],
        error: null,
        message: "No data found",
    };
};

module.exports = emptyResponse;