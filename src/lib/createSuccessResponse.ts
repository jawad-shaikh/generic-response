interface CreateSuccessResponse {
  status: {
    code: number;
    success: boolean;
  };
  data: {} | null;
  error: null;
  message: string;
}

const createSuccessResponse = (
  data: {} | null = null,
  message: string = "Created Successfully"
): CreateSuccessResponse => {
  return {
    status: {
      code: 201,
      success: true,
    },
    data,
    error: null,
    message,
  };
};

export default createSuccessResponse;
