const unauthorizedResponse = (error = null) => {
    return {
        status: {
            code: 401,
            success: false,
        },
        data: null,
        error: error || "The request has not been applied because it lacks valid authentication credentials for the target resource",
        message: null,
    };
};

module.exports = unauthorizedResponse;