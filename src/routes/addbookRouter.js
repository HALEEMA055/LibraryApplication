const express = require("express");
const addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function addbookroute(navbar,login){
    addbookRouter.get('/addbook',function(req,res){
        res.render("addbook",{
            navbar,
            login,
            title:"Add Books"
        });
    })

    addbookRouter.post('/addbook/x',function(req,res){
      var item = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        image: req.body.image
      } 
       
       var book = Bookdata (item);
       book.save(); //saving to database
       res.redirect('/books/x');

    });

    return addbookRouter;
}

module.exports = addbookroute;