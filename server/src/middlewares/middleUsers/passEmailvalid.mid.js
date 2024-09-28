function validPassEmail(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email) {
      const error = new Error("email are required");
      error.statuscode = 400;
      throw error;
    } else if(!password){
        const error = new Error("password are required");
        error.statuscode = 400;
        throw error;
    }else{
        return next();
    }
  } catch (error) {
    throw error;
  }
}

export default validPassEmail;
