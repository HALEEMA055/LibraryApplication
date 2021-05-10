const express = require("express");
const loginRouter = express.Router();

function loginroute(navbar,login){
    loginRouter.get('/',function(req,res){
        res.render("login.ejs",{
            navbar,
            login,
            title:"Log In"
        });
    });
    return loginRouter;
}

module.exports = loginroute;