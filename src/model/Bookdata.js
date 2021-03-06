 //Accessing mongoose package 
  const mongoose = require ('mongoose');

  //Database connection
  //mongoose.connect('mongodb://localhost:27017/library');

  mongoose.connect('mongodb+srv://userone:<userone>@fsd.bqcqo.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');


//Schema definition
  const Schema = mongoose.Schema;

  const BookSchema = new Schema({
      title: String,
      author: String,
      genre: String,
      image: String
  });

  //Model creation
  var Bookdata = mongoose.model('bookdata',BookSchema);

  module.exports = Bookdata;

