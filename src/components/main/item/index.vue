<script>
import Modal from "./Modal.vue";
import { ref } from "vue";
export default {
  props: ["item"],
  components: {
    Modal,
  },
  setup(props, context) {
    let isModalOpen = ref(false);
    function dragStart(e) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("item_id", props.item.id);
    }
    function openModal() {
      isModalOpen.value = true;
    }
    function closeModal() {
      isModalOpen.value = false;
    }

    return { isModalOpen, openModal, closeModal, dragStart };
  },
};
</script>
<template>
  <div
    class="item"
    @dragstart="dragStart($event)"
    @dragend="dragEnd"
    @drag="dragHandler($event)"
    @click="openModal"
  >
    <div
      class="item__square item__square_blur"
      :style="{ backgroundColor: item.color + 0.35 }"
    ></div>
    <div
      class="item__square item__square_main"
      :style="{ backgroundColor: item.color }"
    ></div>
    <div class="item__amount">
      <span>{{ item.amount }}</span>
    </div>
  </div>
  <Modal v-if="isModalOpen" :item="item" :closeModal="closeModal" />
</template>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: grab;
  transition: all 0.1s;
  &__square {
    position: absolute;
    width: 48px;
    height: 48px;
    &_main {
      left: 26px;
      top: 29px;
      z-index: 1;
    }
    &_blur {
      backdrop-filter: blur(6px);
      left: 32px;
      top: 23px;
      z-index: 2;
    }
  }
  &__amount {
    position: absolute;
    bottom: -1px;
    right: 0px;
    width: 16px;
    height: 16px;
    border: 1px solid #4d4d4d;
    background: #262626;
    border-top-left-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      opacity: 0.4;
    }
  }
  &:hover {
    background: #2f2f2f;
  }
}
</style>
