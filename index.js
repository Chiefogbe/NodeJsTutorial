require('express-async-errors')
const express=require('express')
const addMovie = require('./controllers/addmovie')
const mongoose=require('mongoose')
const getallmovie = require('./controllers/getallmovie')
const singlemovie = require('./controllers/singlemovie')
const updatemovie = require('./controllers/updatemovie')
const deletemovie = require('./controllers/deletemovie')
const movieRec = require('./controllers/movieRec')
const errorhandler = require('./models/errorhandler/errorhandler')
require('dotenv').config()


// 


const app=express()
app.use(express.json())


mongoose.connect(process.env.MONGO, {}).then(()=>{
  app.listen(5000, (req,res)=>{
    console.log(`Server started && connected to DB`)
  })
}).catch((error)=>{
  console.log(error)
})

require('./models/movie')

app.post('/api/movies', addMovie)
app.get('/api/movies', getallmovie)
app.get('/api/movies/:id', singlemovie)
app.patch('/api/movies/', updatemovie)
app.delete('/api/movies/:id', deletemovie)
app.get('/api/movies/openai/rec', movieRec)


app.use(errorhandler)



// mongodb+srv://watchmanjesse5002:UdemyNodeTutorial@cluster0.ccfz3yo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0