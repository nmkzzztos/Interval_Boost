// Services
import { Actions } from "vuex-smart-module";
import CardsState from "./CardsState";
import CardsGetters from "./CardsGetters";
import CardsMutations from "./CardsMutations";

export default class CardsActions extends Actions<
  CardsState,
  CardsGetters,
  CardsMutations
> {}
