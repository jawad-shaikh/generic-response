interface ForbiddenResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
declare const forbiddenResponse: (error?: string) => ForbiddenResponse;
export default forbiddenResponse;
//# sourceMappingURL=forbiddenResponse.d.ts.map