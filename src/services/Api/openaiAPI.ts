import { Configuration, OpenAIApi } from "openai";

export default class OpenAI {
  private configuration = new Configuration({
    apiKey: process.env.VUE_APP_OPENAI_API_KEY,
  });
  private openAI = new OpenAIApi(this.configuration);

  public async getTranslate(text: string, language: string) {
    try {
      const response = await this.openAI.createCompletion({
        model: "text-davinci-003",
        prompt: `give me a translation for word '${text}' in ${language}`,
        temperature: 0,
        max_tokens: 20,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  public async getExample(text: string) {
    try {
      const response = await this.openAI.createCompletion({
        model: "text-davinci-003",
        prompt: `give me a short example for word '${text}'`,
        temperature: 0,
        max_tokens: 20,
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
