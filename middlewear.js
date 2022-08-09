const schema = require('./schema');



const createToDo = async (req,res,next)=>{
    try {
        console.log("comes to this phase")
        const {todo} = req.body;
        console.log(todo)
        const Message = new schema({
            message:todo
        })
        const responce = await Message.save();
        res.redirect('/');
        console.log(responce);
    } catch (error) {
        console.log(error)
    }
}

const deleteToDo = async(req,res,next)=>{
    try {
        const element = await schema.deleteOne({_id:req.params.id});
        res.redirect('/');
        
    } catch (error) {
        console.log(error);
    }
}
const allToDo = async(req,res,next)=>{
    try {
        const allTodo = await schema.find();
        console.log(allTodo.length);
        res.render("index", {todo : allTodo});
    } catch (error) {
        
    }
}

module.exports={
    createToDo,
    deleteToDo,
    allToDo

}