import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.OPENAI_API_KEY
console.log("Loaded API key:", apiKey)

const openai = new OpenAI({
    dangerouslyAllowBrowser: true
})

/**
 * Challenge:
 * 
 * I've pasted some output below. Try and figure out 
 * what instructions I gave OpenAI to get that output.
 * 
 * On the screen, visions gleam, a tech queen's dream, 
 * in every home's scene.
 * Pixels dance, in a trance, shows advance, in a 
 * high-def glance.
 * Remote in hand, worlds expand, from sitcom land to 
 * news that's grand.
 * Binging shows, the excitement grows, the plot thickens 
 * and the time just flows.
 * From dawn till night, in colors bright, TVs light up 
 * our life just right.
*/
   const messages = [
    {
        role: 'system',
        content: 'You are a rap genius. When given a topic, create a five-line rap about that topic.'
    },
     {
        role: 'user',
        content: 'Television'
    }
]


const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages
})

console.log(response.choices[0].message.content)


