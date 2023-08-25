const responses = {
    // 200 OK responses
    okResponse: (data = null, message = null) => {
        return {
            status: {
                code: 200,
                success: true,
            },
            data: data,
            error: null,
            message: message,
        };
    },
    createSuccessResponse: (data = null) => {
        return {
            status: {
                code: 201,
                success: true,
            },
            data: data,
            error: null,
            message: "Created Successfully.",
        };
    },
    updateSuccessResponse: (data = null) => {
        return {
            status: {
                code: 200,
                success: true,
            },
            data: data,
            error: null,
            message: "Updated Successfully.",
        };
    },
    deleteSuccessResponse: (data = null) => {
        return {
            status: {
                code: 200,
                success: true,
            },
            data: data,
            error: null,
            message: "Deleted Successfully.",
        };
    },
    emptyResponse: () => {
        return {
            status: {
                code: 200,
                success: true,
            },
            data: [],
            error: null,
            message: "No data found",
        };
    },

    // 400 Bad Request responses
    badRequestResponse: (error = null) => {
        return {
            status: {
                code: 400,
                success: false,
            },
            data: null,
            error: error,
            message: null,
        };
    },

    // 401 Unauthorized responses
    forbiddenResponse: (error = null) => {
        return {
            status: {
                code: 401,
                success: false,
            },
            data: null,
            error: error,
            message: null,
        };
    },

    // 404 Not Found responses
    notFoundResponse: () => {
        return {
            status: {
                code: 404,
                success: false,
            },
            data: null,
            error: "Not Found",
            message: null,
        };
    },

    // 409 Conflict responses
    conflictErrorResponse: (error = null, message = null) => {
        return {
            status: {
                code: 409,
                success: false,
            },
            data: null,
            error: error,
            message: message,
        };
    },

    // 500 Internal Server Error responses
    serverErrorResponse: (error = null, message = null) => {
        return {
            status: {
                code: 500,
                success: false,
            },
            data: null,
            error: error,
            message: message,
        };
    },

    // Generic response
    genericResponse: (
        status,
        success,
        data = null,
        error = null,
        message = null
    ) => {
        return {
            status: {
                code: status,
                success: success,
            },
            data: data,
            error: error,
            message: message,
        };
    },
};

module.exports = responses;
