const express = require("express");
const addauthorRouter = express.Router();

function addauthorRoute(navbar,login){
    addauthorRouter.get('/addauthor',function(req,res){
        res.render("addauthor",{
            navbar,
            login,
            title:"Add Author"
        });
    });

    return addauthorRouter;
}

module.exports = addauthorRoute;