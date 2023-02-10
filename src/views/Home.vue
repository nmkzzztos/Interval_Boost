<template>
  <div class="upperContent">
    <div class="upperContent__info">
      <p>Cards will be available in</p>
      <p>
        {{ Math.round(Math.random() * 2) }} :
        {{ Math.round(Math.random() * 24) }} :
        {{ Math.round(Math.random() * 60) }} :
        {{ Math.round(Math.random() * 60) }}
      </p>
    </div>
  </div>
  <div class="middleContent">
    <div class="middleContent__progressItem" v-for="index in 6">
      <q-circular-progress
        show-value
        class="text-white q-ma-md"
        :value="Math.round(Math.random() * 40)"
        size="50px"
        color="purple-11"
        :max="number"
        rounded
      />
      <span>{{ index }}</span>
    </div>
  </div>
  <div class="lowerContent">
    <id-button link="add" size="50" icon="add" color="#05030D"></id-button>
    <id-button link="edit" size="50" icon="edit" color="#05030D"></id-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IdButton from "@/components/Common/ib-button.vue";
import { CardsStore } from "@/store/cards/CardsStoreModule";

@Options({
  components: { IdButton },
})
export default class HomeView extends Vue {
  public number = Math.round(Math.random() * 160);

  public async mounted() {
    console.log("Hi");
    CardsStore.mutations.addWord({
      front: "ha",
      back: "bla",
      repeat: 0,
      nextRepeat: 0,
    });
    console.log(CardsStore.getters.words[0].front);
  }
}
</script>

<style lang="sass">
$primary-color: #05030D

@mixin display-flex-column
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.upperContent
  margin-top: 40px
  margin-bottom: 20px
  @include display-flex-column()
  &__info
    height: 60px
    width: 230px
    @include display-flex-column()
    background: $primary-color
    border-radius: 9px
  p
    margin: 0

.middleContent
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr
  column-gap: 10px
  row-gap: 15px
  margin-bottom: 20px
  &__progressItem
    @include display-flex-column()
    span
      width: 20px
      height: 20px
      font-size: 13px
      background: #ea80fc
      border-radius: 50%

.lowerContent
  display: flex
  align-items: center
  justify-content: space-evenly
</style>
