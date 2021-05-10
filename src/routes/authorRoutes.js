const express = require('express');
const authorRouter = express.Router();
// const booksRouter = require("/")

function authroute(navbar,login){
    //Authot Array
    var authors = [
        {   
            id:1,
            name:'William Shakespeare',
            img:'shakespeare.jfif',
            description:"William Shakespeare was an English poet, playwright, and actor, widely regarded as the greatest writer in the English language"
        },
        {   
            id:2,
            name:'Joseph Barbera',
            img:'joseph.jpg',
            description:"Joseph Roland Barbera was an American animator, director, producer, storyboard artist, and cartoon artist, whose film and television cartoon characters entertained millions of fans worldwide"
        },
        {   
            id:3,
            name:"Jonathan Swift",
            img:'jonathan.jpg',
            description:"Jonathan Swift was an Anglo-Irish satirist, essayist, political pamphleteer  poet and Anglican cleric who became Dean of St Patrick's Cathedral, Dublin, hence his common sobriquet, 'Dean Swift'"
        }
    ]
    authorRouter.get('/',function(req,res){
        res.render("authors",{
            navbar,
            login,
            title:"Authors",
            authors
        });
    });
    authorRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render('author',{
            navbar,
            login,
            title:"Author",
            authors:authors[id]
        });
    })
    return authorRouter;
}

module.exports = authroute;