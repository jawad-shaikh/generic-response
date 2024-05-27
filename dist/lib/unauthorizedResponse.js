"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unauthorizedResponse = (error = "Unauthorized request") => {
    return {
        status: {
            code: 401,
            success: false,
        },
        data: null,
        error,
        message: null,
    };
};
exports.default = unauthorizedResponse;
//# sourceMappingURL=unauthorizedResponse.js.map