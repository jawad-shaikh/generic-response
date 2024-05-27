"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateSuccessResponse = (data = null, message = "Updated Successfully") => {
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
exports.default = updateSuccessResponse;
//# sourceMappingURL=updateSuccessResponse.js.map