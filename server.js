const express = require('express')
const app = express()

//find Mongoose connection string in config/database folder
const connectDB = require('./config/database')

//declare variables that store paths to routes folders
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

//Module to read .env file
require('dotenv').config({path: './config/.env'})

//call connectDB function and connect to Mongoose.
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//listens to requests and sends them to the proper routes. 
app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    