<script>
import Input from "../UI/Input.vue";
import Button from "../UI/Button.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Input,
    Button,
  },
  setup(props) {
    const store = useStore();
    const newItem = ref({
      name: "",
      amount: 1,
      color: "#656CAA",
    });
    const allItems = () =>
      computed(() => {
        return store.getters["getAllItems"];
      });
    function createItem() {
      if (!newItem.value.name) return alert("Введите название предмета");
      yCord: for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          if (!store.getters.getItemByXY({ x, y }).length) {
            store.commit("addItem", {
              id: store.getters.getAllItems.length
                ? store.getters.getLastItem.id + 1
                : 1,
              ...newItem.value,
              x,
              y,
            });
            break yCord;
          }
        }
      }
    }
    return {
      newItem,
      allItems,
      createItem,
    };
  },
};
</script>
<template>
  <div class="left-bar inventory-block">
    <div class="left-bar__img">
      <div class="left-bar__blur"></div>
      <img src="../../assets/left-bar-img.jpg" />
    </div>
    <div class="left-bar__footer">
      <div class="left-bar__name">
        <Input
          type="text"
          placeholder="Название нового предмета..."
          v-model="newItem.name"
        />
      </div>
      <div class="left-bar__input left-bar__amount">
        <span>Количество:</span>
        <Input type="number" v-model="newItem.amount" />
      </div>
      <div class="left-bar__input left-bar__color">
        <span>Цвет:</span>
        <Input type="color" v-model="newItem.color" />
      </div>
      <Button :onClick="createItem">Добавить предмет</Button>
    </div>
  </div>
</template>

<style lang="scss">
.left-bar {
  width: 236px;
  height: 500px;
  padding: 18px 14px;
  grid-area: left-bar;
  &__img {
    width: 208px;
    height: 240px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    position: relative;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
  &__blur {
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(6px);
    border-radius: 8px;
  }
  .ui-input {
    max-width: 100%;
  }
  &__footer {
    display: flex;
    flex-direction: column;
  }
  &__name {
    margin-bottom: 16px;
  }
  &__input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    span {
      font-size: 14px;
    }
    .ui-input {
      width: 40%;
    }
  }
  &__amount {
    margin-bottom: 16px;
  }
  &__color {
    margin-bottom: 28px;
    input {
      width: 30px !important;
    }
  }
}
</style>
