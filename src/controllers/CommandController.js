export const commandController = (res) => {
  if (res.data.response === "Bad Format") {
    return {
      type: "error",
      message: "You have entered a wrong format .Please try again",
    };
  } else if (res.data.response === "failure") {
    return {
      type: "error",
      message: "Operation failed please try again",
    };
  } else if (res.data.response === "invalid session") {
    return {
      type: "error",
      message: "Invalid session. Please try again",
    };
  } else if (res.data.response === "Unauthorized") {
    return {
      type: "error",
      message: res.data.response,
    };
  } else if (res.data.response === "failed") {
    return {
      type: "error",
      message: res.data.response,
    };
  } else if (res.data.response === "Host Unreachable") {
    return {
      type: "error",
      message: "Host is unreachable",
    };
  } else if (res.data.response === "true") {
    return {
      type: "success",
      message: res.data.response,
    };
  } else if (res.data.response === "false") {
    return {
      type: "error",
      message: "Request failed please try again",
    };
  } else if (res.data.response === "success") {
    return {
      type: "success",
      message: "Issued sucessfully",
    };
  } else {
    return {
      type: "success",
      message: res.data,
    };
  }
};
