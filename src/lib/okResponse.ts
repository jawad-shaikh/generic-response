interface OkResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: {} | null;
    error: null;
    message: string | null;
}
  
const okResponse = (data: {} | null = null, message: string | null = null): OkResponse => {
    return {
      status: {
        code: 200,
        success: true,
      },
      data,
      error: null,
      message,
    };
};
  
export default okResponse;