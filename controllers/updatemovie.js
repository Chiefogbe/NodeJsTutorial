const mongoose=require('mongoose')

const updatemovie= async(req,res)=>{
  const movieModel=mongoose.model('movies')
  const {id, title, info, rating}=req.body

  try {
    if(!id)throw `id is required`
    
  } catch (error) {
    res.status(400).json({
      status:`failed.`,
      message:error
    })
    return
  }

  try {
    await movieModel.updateOne(
      {
        _id:id
      },
      {
        title:title,
        info:info,
        rating:rating
      },
      {
        runValidators:true
      }
    )
  } catch (error) {
    res.status(400).json({
      status:`failed.`,
      message:error.message
    })
    return
  }
  res.status(200).json({
    status:`success.`,
    message:`movie updated`
  })
}

module.exports=updatemovie