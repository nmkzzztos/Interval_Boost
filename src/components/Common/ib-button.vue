<template>
  <button
    :style="{
      height: `${size}px`,
      width: `${size}px`,
      backgroundColor: `${color}`,
    }"
    @click="$router.push(link)"
  >
    <q-icon
      class="icon"
      :size="`${size / 1.6}px`"
      :name="icon"
      :style="action"
    ></q-icon>
  </button>
</template>

<script lang="ts">
import { Options, Vue, prop } from "vue-class-component";

class Props {
  // link to router path
  link = prop<string>({
    required: false,
    default: "/",
  });
  // size of icon
  size = prop<number>({
    required: true,
  });
  // icon image
  icon = prop<string>({
    required: true,
  });
  // custom animation rotate or scale
  animation = prop<string>({
    required: false,
    default: "scale",
  });
  // custom color for background
  color = prop<string>({
    required: false,
    default: "#af3ceb",
  });
}

@Options({
  components: {},
})
export default class IbButton extends Vue.with(Props) {
  public get action() {
    return this.animation === "rotate"
      ? { "--button-animation-hover": `${this.animation}(0.17turn)` }
      : { "--button-animation-hover": `${this.animation}(1.2)` };
  }
}
</script>

<style scoped lang="sass">
button
  all: unset
  cursor: pointer

  display: flex
  justify-content: center
  align-items: center

  border-radius: 50%

.icon
  transition: transform 0.4s

  &:hover
    transform: var(--button-animation-hover)
</style>
