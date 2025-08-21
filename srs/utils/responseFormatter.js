const responseFormatter = (status, message, data) => {
    return { status, message, data };
  };
  
  module.exports = responseFormatter;