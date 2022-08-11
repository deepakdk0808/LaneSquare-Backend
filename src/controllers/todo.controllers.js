const express=require('express')
const router =express.Router()

const Todo=require("../models/todo.models")

router.post('', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        return res.send(todo)
    } catch (error) {
        return res.send(error)
    }
})

router.get('', async (req, res) => {
    try {
        const todo = await Todo.find().lean().exec()
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate({title:req.params.id},req.body,{new:true}).lean().exec()
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})
 
router.delete('/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec()
        res.send(todo)
    } catch (error) {
        res.send(error)
    }
})

module.exports=router