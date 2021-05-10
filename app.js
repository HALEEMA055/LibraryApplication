const { render } = require("ejs");
const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
const navbar = [
    {link:'/books',title:'Books'
    },
    {link:'/authors',title:'Authors'
    }
    
]
const login = [
    {link:'/login',title:'Log In'
    },
    {link:'/signup',title:'Sign Up'
    }
]
const booksRouter = require("./src/routes/addbookRouter")(navbar,login);
const authorRouter = require("./src/routes/authorRoutes")(navbar,login);
const loginRouter = require("./src/routes/loginroute")(navbar,login);
const signupRouter = require("./src/routes/signupRoute")(navbar,login);
const addbookRouter = require("./src/routes/addbookRouter")(navbar,login);
const addauthorRouter = require("./src/routes/addauthorRouter")(navbar,login);
// const bookdet = require("./src/routes/bookRoutes");
// console.log(bookdet);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books/x',addbookRouter);
app.use('/authors/x',addauthorRouter);

app.get('/',function(req,res){
    res.render("index",
    {   
        navbar,
        login,
        // navbar:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        title:"Library"
    });
});
app.listen(port,()=>{console.log("Server ready at:"+port)});

