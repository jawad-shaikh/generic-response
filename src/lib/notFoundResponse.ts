interface NotFoundResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: null;
    error: string;
    message: null;
}
  
const notFoundResponse = (error: string = "Not Found"): NotFoundResponse => {
    return {
      status: {
        code: 404,
        success: false,
      },
      data: null,
      error,
      message: null,
    };
};
  
export default notFoundResponse;