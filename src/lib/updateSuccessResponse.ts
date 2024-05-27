interface UpdateSuccessResponse {
    status: {
      code: number;
      success: boolean;
    };
    data: {} | null;
    error: null;
    message: string;
}
  
const updateSuccessResponse = (data: {} | null = null, message: string = "Updated Successfully"): UpdateSuccessResponse => {
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
  
export default updateSuccessResponse;