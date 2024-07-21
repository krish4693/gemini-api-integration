import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"eAI(process.env.API_KEY)

async function run(){
    const model=genAI.getGenerativeModel({model:"gemini-pro"})

    const prompt="Hi, how are you doing"

    const results=await model.generateContent(prompt)
    const response =await results.response
    const text=response.text()
    console.log(text)
}
run()