import { NextResponse } from "@/node_modules/next/server";
import OpenAI from "@/node_modules/openai/index";

export async function POST(request:any){
    const openai = new OpenAI({
        apiKey:process.env.OPENAI_API_KEY
    })
    
    //user's input
    const params = await request.json();
    

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[
            {
                role: "system",
                content: "Answer in maximum 100 words, and answer like you are very "+params.emotion
            },
            {
                role:'user',
                content:  params.prompt 
            }
        ],
        temperature:0,
        max_tokens:1024,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0,
    })

    return NextResponse.json(response);
}