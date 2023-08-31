const updateSuccessResponse = (data = null) => {
    return {
        status: {
            code: 200,
            success: true,
        },
        data: data,
        error: null,
        message: "Updated Successfully.",
    };
}

module.exports = updateSuccessResponse;