// Services
import WordDTO from "@/models/cards/WordDTO";
import { Mutations } from "vuex-smart-module";
import CardsState from "./CardsState";

export default class ChartMutations extends Mutations<CardsState> {
  addWord(word: WordDTO) {
    this.state.words.push(word);
  }
}
