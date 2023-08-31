const deleteSuccessResponse = (data = null) => {
    return {
        status: {
            code: 200,
            success: true,
        },
        data: data,
        error: null,
        message: "Deleted Successfully.",
    };
};

module.exports = deleteSuccessResponse;