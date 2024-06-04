interface DeleteSuccessResponse {
  status: {
    code: number;
    success: boolean;
  };
  data: {} | null;
  error: null;
  message: string;
}

const deleteSuccessResponse = (
  data: {} | null = null,
  message: string = "Deleted Successfully"
): DeleteSuccessResponse => {
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

export default deleteSuccessResponse;
