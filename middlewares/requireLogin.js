// next means you can move to next middleware.
// before request was assigned to different interfaces, it passed several middlewares.
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "You must log in!" });
  }
  next();
};
