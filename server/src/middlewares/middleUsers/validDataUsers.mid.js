function validDataUser(req, res, next) {
  let { photo,role } = req.body;

  if (!photo) {
    photo =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_pF8GnmChSFfzXblcYqo8-rCIiaZ21m7BUg&s";
  }

  if (!role) {
    role = 0;
  }

  req.body.photo = photo;
  req.body.role = role;

  return next();
}

export default validDataUser;
