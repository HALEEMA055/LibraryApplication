const express = require("express");
const signupRouter = express.Router();

function signuproute(navbar,login){
    signupRouter.get('/',function(req,res){
        res.render("signup.ejs",{
        navbar,
        login,
        title : "Sign UP"
        });
    });
    return signupRouter;
}

module.exports = signuproute;