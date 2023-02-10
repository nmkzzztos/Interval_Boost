import store from "@/store/index";
import { Module, Context, registerModule } from "vuex-smart-module";
import CardsActions from "./CardsActions";
import CardsGetters from "./CardsGetters";
import CardsMutations from "./CardsMutations";
import CardsState from "./CardsState";

export type CardsStoreModuleProxy = Context<
  Module<CardsState, CardsGetters, CardsMutations, CardsActions, any>
>;

export type CardsStoreModule = Module<
  CardsState,
  CardsGetters,
  CardsMutations,
  CardsActions
>;

export const cardsStoreModule = new Module({
  state: CardsState,
  getters: CardsGetters,
  mutations: CardsMutations,
  actions: CardsActions,
});
registerModule(store, "cardsStore", "cardsStore", cardsStoreModule);

export const CardsStore = cardsStoreModule.context(store);
