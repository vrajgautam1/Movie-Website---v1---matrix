const redirectToHomePage = (req, res, next) => {
  if (req.url === "/") {
    return res.redirect("/homepage");
  }
  next();
};

module.exports = redirectToHomePage;
