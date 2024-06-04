"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createSuccessResponse = (data = null, message = "Created Successfully") => {
    return {
        status: {
            code: 201,
            success: true,
        },
        data,
        error: null,
        message,
    };
};
exports.default = createSuccessResponse;
//# sourceMappingURL=createSuccessResponse.js.map