import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai'; // Import OpenAI from openai package

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, // Add your OpenAI API Key in the .env file
    });
  }

  // Function to handle the chatbot query
  async handleChatbotQuery(query: string): Promise<string> {
    // Perform the chat completion with OpenAI API
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // The model to use
      messages: [
        { role: 'system', content: `A user asks: "${query}".` }, // Include the user's query
      ],
    });

    // Extract and return the function call from the response
    const functionCall = completion.choices[0]?.message?.content;
    return functionCall || 'Sorry, I could not understand your request.';
  }
}
