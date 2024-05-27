"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const badRequestResponse = (error = "Bad request") => {
    return {
        status: {
            code: 400,
            success: false,
        },
        data: null,
        error: error,
        message: null,
    };
};
exports.default = badRequestResponse;
//# sourceMappingURL=badRequestResponse.js.map