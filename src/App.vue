<script>
import BottomBar from "./components/main/BottomBar.vue";
import Inventory from "./components/main/inventory/index.vue";
import LeftBar from "./components/main/LeftBar.vue";

export default {
  name: "App",
  components: { LeftBar, BottomBar, Inventory },
};
</script>
<template>
  <div class="app">
    <div class="container">
      <LeftBar />
      <Inventory />
      <BottomBar />
    </div>
  </div>
</template>

<style lang="scss">
.app {
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}

.container {
  display: grid;
  grid-template-areas:
    "left-bar inventory"
    "bottom-bar bottom-bar";
  gap: 24px;
}
</style>
