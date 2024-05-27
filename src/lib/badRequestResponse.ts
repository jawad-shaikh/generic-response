interface BadRequestResponse {
  status: {
    code: number;
    success: boolean;
  };
  data: null;
  error: string;
  message: null;
}

const badRequestResponse = (error: string = "Bad request"): BadRequestResponse => {
  return {
    status: {
      code: 400,
      success: false,
    },
    data: null,
    error: error,
    message: null,
  };
};

export default badRequestResponse;
