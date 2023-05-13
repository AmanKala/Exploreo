class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Add a new "message" property;
    this.code = errorCode; // Add a new "code" property, whic is nothinng but the status code eg.404;
  }
}

module.exports = HttpError;
