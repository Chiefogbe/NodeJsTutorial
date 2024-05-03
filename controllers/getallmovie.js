const mongoose=require('mongoose')

const getallmovie=async(req,res)=>{
  const movieModel=mongoose.model('movies')
    const movieData=await movieModel.find({})
    res.status(200).json({
      status:`hello from all movies.`,
      data:movieData
    })
}

module.exports=getallmovie