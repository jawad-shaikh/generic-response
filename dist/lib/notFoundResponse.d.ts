interface NotFoundResponse {
    status: {
        code: number;
        success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
declare const notFoundResponse: (error?: string) => NotFoundResponse;
export default notFoundResponse;
//# sourceMappingURL=notFoundResponse.d.ts.map