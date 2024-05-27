"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const okResponse = (data = null, message = null) => {
    return {
        status: {
            code: 200,
            success: true,
        },
        data,
        error: null,
        message,
    };
};
exports.default = okResponse;
//# sourceMappingURL=okResponse.js.map