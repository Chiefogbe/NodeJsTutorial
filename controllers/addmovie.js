const mongoose=require('mongoose')

const addMovie=async(req,res)=>{
  const movieModel=mongoose.model('movies')
  const {title, info, rating}=req.body
  
    if(!title)throw `title is required`
    if(!info)throw `info is required`
    if(!rating)throw `rating is required`

    await movieModel.create({
      title:title,
      info:info,
      rating:rating
    }) 
  
  res.status(200).json({
    status:`success`,
    message:`movie added successfully.`
  })
}

module.exports=addMovie