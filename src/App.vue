<template>
  <header>
    <img
      class="logo"
      alt="Interval Boost logo"
      src="./assets/images/white.png"
    />
  </header>
  <main class="main">
    <router-view />
  </main>
  <footer class="footer">
    <id-button size="75" icon="settings" animation="rotate" link="settings" />
  </footer>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import IdButton from "./components/Common/ib-button.vue";

@Options({
  components: { IdButton },
})
export default class App extends Vue {}
</script>

<style lang="css">
@import url("./assets/styles/main.css");
</style>
