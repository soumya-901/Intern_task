const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    message:{
      type: String ,
      required:true 
    }
}
  );


const todo =  mongoose.model('Todo', todoSchema);
module.exports=todo;