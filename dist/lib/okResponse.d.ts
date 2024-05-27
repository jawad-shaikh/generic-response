interface OkResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: {} | null;
    error: null;
    message: string | null;
}
declare const okResponse: (data?: {} | null, message?: string | null) => OkResponse;
export default okResponse;
//# sourceMappingURL=okResponse.d.ts.map