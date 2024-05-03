const mongoose=require('mongoose')

const singlemovie=async(req,res)=>{
  const movieModel=mongoose.model('movies')

  try {
    const movieData=await movieModel.find({
      _id:req.params.id
    })
    res.status(200).json({
      status:`hello from single movie.`,
      data:movieData
    })
  } catch (error) {
    res.status(400).json({
      status:`hello from single movie.`,
      message:error.message
    })
  }

}

module.exports=singlemovie