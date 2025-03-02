const adminModel = require("../models/adminModel");
const bcrypt = require("bcrypt");


module.exports.openLoginPage = (req,res)=>{
    return res.render("./pages/login");
}

module.exports.submitFormOnLoginPage = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await adminModel.findOne({ username });

        if (admin) {
            const isValid = await bcrypt.compare(password, admin.password);
            if (isValid) {
                res.cookie("admin", admin.id); // Set cookie
                return res.redirect("/admin"); // Redirect to admin panel
            }
        }

        res.redirect("/login"); // Redirect back if login fails
    } catch (err) {
        console.log(err.message);
        res.redirect("/login");
    }
};

