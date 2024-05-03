const mongoose=require('mongoose')

const deletemovie=async(req, res)=>{
  const movieModel=mongoose.model('movies')
  const id=req.params.id
  const getMovie=await movieModel.findOne({
    _id:id
  })

  try {
    if(!getMovie) throw `Movie does not exist`
  } catch (error) {
    res.status(400).json({
      status:"movie does not exist",
      message:error.message
    })
    return
  }

  try {
    await  movieModel.deleteOne({
      _id:id
    })
  } catch (error) {
    res.status(400).json({
      status:"failed",
      message:error.message
    })
    return
  }

  res.status(200).json({
    status:"success",
    message:`movie deleted.`
  })
}

module.exports=deletemovie