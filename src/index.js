const express = require('express')

const connect=require("./configs/db")
const todoController=require("./controllers/todo.controllers") 
 

const app = express()
app.use(express.json())

const cors=require("cors")
app.use(cors())
const port=process.env.PORT ||7542

app.use("/todo",todoController)


app.listen(port, async function () {
    try {
        await connect()
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log('error:', error)
    }
})