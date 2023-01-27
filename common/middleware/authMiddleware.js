const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization ?? null;

  if (!token) return res.send("Authorization token is required");

  try {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
    (err, decoded) => {
        if (err) return res.sendStatus(403); //invalid token
        req.user = decoded.username;
        req.roles = decoded.roles;
        next();
      }
    );
  } catch (error) {
    throw res.send({error});
  }
};
