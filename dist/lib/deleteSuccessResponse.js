"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deleteSuccessResponse = (data = null, message = "Deleted Successfully") => {
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
exports.default = deleteSuccessResponse;
//# sourceMappingURL=deleteSuccessResponse.js.map