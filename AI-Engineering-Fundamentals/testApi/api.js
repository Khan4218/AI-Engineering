import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.OPENAI_API_KEY
console.log("Loaded API key:", apiKey)

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Who invented the television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages
})

console.log(response.choices[0].message.content)


