interface ServerErrorResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
declare const serverErrorResponse: (error?: string) => ServerErrorResponse;
export default serverErrorResponse;
//# sourceMappingURL=serverErrorResponse.d.ts.map