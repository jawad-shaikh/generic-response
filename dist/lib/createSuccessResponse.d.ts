interface CreateSuccessResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: {} | null;
    error: null;
    message: string;
}
declare const createSuccessResponse: (data?: {} | null, message?: string) => CreateSuccessResponse;
export default createSuccessResponse;
//# sourceMappingURL=createSuccessResponse.d.ts.map