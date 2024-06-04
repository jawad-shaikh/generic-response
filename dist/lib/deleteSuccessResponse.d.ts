interface DeleteSuccessResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: {} | null;
    error: null;
    message: string;
}
declare const deleteSuccessResponse: (data?: {} | null, message?: string) => DeleteSuccessResponse;
export default deleteSuccessResponse;
//# sourceMappingURL=deleteSuccessResponse.d.ts.map