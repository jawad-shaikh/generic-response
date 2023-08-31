const createSuccessResponse = (data = null) => {
    return {
        status: {
            code: 201,
            success: true,
        },
        data: data,
        error: null,
        message: "Created Successfully.",
    };
};

module.exports = createSuccessResponse;