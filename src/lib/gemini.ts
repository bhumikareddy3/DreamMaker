import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { BrandData } from "@/store/brand-store";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not set in the environment variables.");
}

const model = new ChatGoogleGenerativeAI({
  apiKey: API_KEY,
  model: "gemini-pro",
  temperature: 0.7,
});

const parser = new JsonOutputParser<BrandData>();

const promptTemplate = new PromptTemplate({
  template: `You are an expert startup branding consultant.
Given this business idea: {idea}, generate:
- A catchy brand name
- 1-line tagline
- 2-line description
- 3-color palette (HEX)
- Logo concept text for an AI image generator
- Landing page headline, 3 feature blurbs, and a CTA.
Respond ONLY in valid JSON that conforms to the following type:

{json_schema}
`,
  inputVariables: ["idea"],
  partialVariables: { json_schema: JSON.stringify(parser.getFormatInstructions(), null, 2) },
});

const chain = promptTemplate.pipe(model).pipe(parser);

export const generateBrandKit = async (idea: string): Promise<BrandData> => {
  try {
    const result = await chain.invoke({ idea });
    return result;
  } catch (error) {
    console.error("Error generating brand kit:", error);
    throw new Error("Failed to generate brand kit. Please check your API key and try again.");
  }
};
