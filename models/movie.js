const mongoose=require('mongoose')

const movieSchema=new mongoose.Schema({
  title:{
    type:String
  },
  info:{
    type:String
  },
  rating:{
    type:Number
  }
})

const movieModel=mongoose.model('movies', movieSchema)

module.exports=movieModel