
export const channelController = (res) => {
  if (res.data.response == "invalid session") {
    return {
      message: "Invalid sessionid",
      type: "error",
    };
  } else if (res.data.response == "failure") {
    return {
      message: "Operation failed. Please try again",
      type: "error",
    };
  } else if (res.data.response === true) {
    return {
      type: "success",
      message: res.data.response,
    };
  } else if (res.data.response == false) {
    return {
      type: "error",
      message: "Operation failed please try again",
    };
  } else {
    return {
      message: res.data,
      type: "success",
    };
  }
};
