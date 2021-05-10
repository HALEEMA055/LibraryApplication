const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
//Array of Books
var books = [
    {
        title:'Macbeth',
        author:"William Shakespeare",
        genre:'Drama',
        img:'macbeth.jpg',
        description:"A Scottish soldier (Macbeth) and his friend (Banquo) are met by three strange witches bearing prophetic greetings. Macbeth is told that,among other titles, he will become king. The rest of the play follows a once loyal soldier (Macbeth) into the depths of darkness and despair as he seeks the crown regardless of the consequences."

    },
    {
        title:'Tom and Jerry',
        author:"Joseph Barbara",
        genre:'Comedy',
        img:'tom.jfif',
        description:"The series features comic fights between an iconic pair of adversaries, a house cat (Tom) and a mouse (Jerry)"
    },
    {
        title:'Gulliver\'s Travels',
        author:"Jonathan Swift",
        genre:'Fiction',
        img:'gulliver.jfif',
        description:"Gulliver's Travels recounts the story of Lemuel Gulliver, a practical-minded Englishman trained as a surgeon who takes to the seas when his business fails."

    }
]
function router(navbar,login){

booksRouter.get('/',function(req,res){
    res.render("books",{
        navbar,
        login,
        // navbar:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:"Books",////
        books,
    });
});

booksRouter.get('/:id',function(req,res){
    const id = req.params.id;  
    Bookdata.findOne({_id:id})
     .then(function(book)){
            res.render('book',{
                navbar,
                login,
                // navbar:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
                title:"Books",
                book:books[id]
            });    
        }) 
            
    
    
   
});
return booksRouter; 
}
function retbook(){

    return books;
}
// module.exports = returnbooks;
module.exports = router;
module.exports.book = books;

