interface BadRequestResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
declare const badRequestResponse: (error?: string) => BadRequestResponse;
export default badRequestResponse;
//# sourceMappingURL=badRequestResponse.d.ts.map