"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverErrorResponse = (error = "Something went wrong") => {
    return {
        status: {
            code: 500,
            success: false,
        },
        data: null,
        error,
        message: null,
    };
};
exports.default = serverErrorResponse;
//# sourceMappingURL=serverErrorResponse.js.map