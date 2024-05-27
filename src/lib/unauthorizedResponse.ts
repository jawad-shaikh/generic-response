interface UnauthorizedResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
  
const unauthorizedResponse = (error: string = "Unauthorized request"): UnauthorizedResponse => {
    return {
      status: {
        code: 401,
        success: false,
      },
      data: null,
      error,
      message: null,
    };
};
  
export default unauthorizedResponse;