interface UpdateSuccessResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: {} | null;
    error: null;
    message: string;
}
declare const updateSuccessResponse: (data?: {} | null, message?: string) => UpdateSuccessResponse;
export default updateSuccessResponse;
//# sourceMappingURL=updateSuccessResponse.d.ts.map