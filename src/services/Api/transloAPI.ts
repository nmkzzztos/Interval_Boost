import axios from "axios";

export default class Translo {
  private encodedParams = new URLSearchParams();

  public async getTranslate(text: string, lang: string) {
    this.encodedParams.append("to", lang);
    this.encodedParams.append("text", text);

    const options = {
      method: "POST",
      url: "https://translo.p.rapidapi.com/api/v3/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": process.env.VUE_APP_TRANSLO_API_KEY,
        "X-RapidAPI-Host": "translo.p.rapidapi.com",
      },
      data: this.encodedParams,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
