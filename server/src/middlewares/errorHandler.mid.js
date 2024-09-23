function errorHandler(error, req, res, next) {
    const { message, statuscode } = error;
    return res
      .status(statuscode || 500)
      .json({ message: message || " Fatal Error" });
}

export default errorHandler