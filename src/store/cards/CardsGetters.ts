// Services
import { Getters } from "vuex-smart-module";
import CardsState from "./CardsState";

export default class CardsGetters extends Getters<CardsState> {
  get words() {
    return this.state.words;
  }
}
