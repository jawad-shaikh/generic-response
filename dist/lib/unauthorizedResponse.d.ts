interface UnauthorizedResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
declare const unauthorizedResponse: (error?: string) => UnauthorizedResponse;
export default unauthorizedResponse;
//# sourceMappingURL=unauthorizedResponse.d.ts.map