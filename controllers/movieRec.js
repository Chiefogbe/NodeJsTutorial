require('dotenv').config()
const OpenAI=require('openai')
const movieRec=(req,res)=>{


  const openai = new OpenAI({
    apiKey: process.env['OAIK'], // This is the default and can be omitted
  });
  
  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion)
  }
  
  main();

  res.status(200).json({
    status:'hello from openai'
  })
}

module.exports=movieRec