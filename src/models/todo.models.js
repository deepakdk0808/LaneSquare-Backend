const mongoose=require('mongoose')

const todoSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
})
const Todo = mongoose.model('todo', todoSchema)

module.exports=Todo

