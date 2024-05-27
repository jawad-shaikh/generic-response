interface ServerErrorResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
  
const serverErrorResponse = (error: string = "Something went wrong"): ServerErrorResponse => {
    return {
      status: {
        code: 500,
        success: false,
      },
      data: null,
      error,
      message: null,
    };
};
  
export default serverErrorResponse;