interface ForbiddenResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
  
const forbiddenResponse = (error: string = "forbidden"): ForbiddenResponse => {
    return {
      status: {
        code: 403,
        success: false,
      },
      data: null,
      error,
      message: null,
    };
};
  
export default forbiddenResponse;