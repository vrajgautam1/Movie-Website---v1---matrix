const adminAuth = (req, res, next) => {
    const{admin} = req.cookies;
    if(admin){
        return next();
    }

    return res.status(401).redirect("/login");
}

module.exports = adminAuth;