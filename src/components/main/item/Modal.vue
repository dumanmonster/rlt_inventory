<script>
import Button from "@/components/UI/Button";
import { useStore } from "vuex";
export default {
  props: ["item", "closeModal"],
  components: { Button },
  setup(props) {
    const store = useStore();

    function deleteItem() {
      store.commit("removeItem", {
        id: props.item.id,
      });
    }

    return { deleteItem };
  },
};
</script>
<template>
  <div class="item-modal">
    <div class="item-modal__squares">
      <img
        :src="require('../../../assets/close.svg')"
        alt="Close Icon"
        @click="closeModal"
      />
      <div
        class="item-modal__square item-modal__square_blur"
        :style="{ backgroundColor: item.color + 0.35 }"
      ></div>
      <div
        class="item-modal__square item-modal__square_main"
        :style="{ backgroundColor: item.color }"
      ></div>
    </div>
    <div class="item-modal__body">
      <div class="item-modal__divider item-modal__divider_first"></div>
      <div class="item-modal__span">
        <span>Название</span>
        <h4>{{ item.name }}</h4>
      </div>
      <div class="item-modal__span item-modal__span_amount">
        <span>Количество</span>
        <h4>{{ item.amount }}</h4>
      </div>
      <div class="item-modal__footer">
        <div class="item-modal__divider item-modal__divider_second"></div>
        <Button :secondary="true" :onClick="deleteItem">Удалить предмет</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.item-modal {
  position: absolute;
  width: 250px;
  height: 100%;
  left: 273px;
  z-index: 3;
  top: 0px;
  background: rgba(38, 38, 38, 0.5);
  border-left: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  &__squares {
    width: 100%;
    position: relative;
    img {
      position: absolute;
      left: 218px;
      top: 8px;
      cursor: pointer;
    }
  }
  &__square {
    position: absolute;
    width: 115.56px;
    height: 115.56px;

    &_blur {
      left: 74.44px;
      top: 55px;
      backdrop-filter: blur(6px);
      z-index: 6;
    }
    &_main {
      left: 60px;
      top: 69.44px;
      z-index: 5;
    }
  }
  &__span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_amount {
      margin-bottom: 137px;
    }
  }
  &__body {
    padding: 18px 15px;
  }
  &__divider {
    height: 1px;
    width: 100%;
    background: #4d4d4d;
    &_first {
      margin-top: 216px;
      margin-bottom: 16px;
    }
    &_second {
      margin-bottom: 18px;
    }
  }
  &__footer {
    width: 100%;
    button {
      width: 100%;
    }
  }
}
</style>
