export const getErrorAndStatusFromErr = (err: any) => {
    if (err?.response?.data) {
      if (err?.response?.data?.error) {
        const {
          response: {
            data: { status, error },
          },
        } = err;
        console.log(err);
        return { message: error, status: status };
      }
      const {
        response: {
          data: { statusText, status },
        },
      } = err;
      return { statusText, status };
    } else {
      return { message: "Unknown Error, Please Contact Developers!", status: "" };
    }
  };