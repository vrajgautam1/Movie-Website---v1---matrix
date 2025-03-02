const redirectToHomePage = (req, res, next) => {
  if (req.url === "/") {
    return res.redirect("/home");
  }
  next();
};

module.exports = redirectToHomePage;
