<template>
  <div class="plan" :class="{ error: error.plan }">
    <h3 class="title">1. Select your plan</h3>
    <ul class="plan-ul">
      <li>
        <label for="basic" class="label basic">
          <input
            @click="checked"
            class="plan-radio"
            type="radio"
            name="basic"
            id="basic"
          />
          <span>basic</span>
        </label>
      </li>
      <li>
        <label for="advanced" class="label advanced">
          <input
            @click="checked"
            class="plan-radio"
            type="radio"
            name="advanced"
            id="advanced"
          />
          <span>advanced</span>
        </label>
      </li>
      <li>
        <label for="pro" class="label pro">
          <input @click="checked" class="plan-radio" type="radio" name="pro" id="pro" />
          <span>pro</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Plan",
  props: {
    error: {
      type: Object,
      default: () => Object,
    },
  },
  methods: {
    checked(event) {
      // позволяем выбрать только 1 вариант
      document.querySelectorAll('input[type="radio"]').forEach((el) => {
        if (event.target == el) {
          el.checked = true;
        } else {
          el.checked = false;
        }
      });
      //   поднятие значения выбора
      this.$emit("checkedPlan", event.target.name);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.title {
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 4.5px;
}
.plan {
  margin: 80px 0;
  &-ul {
    display: flex;
    justify-content: space-between;
    max-width:  48%;
    margin-top: 30px;
    font-size: 2rem;
    font-weight: 600;    

    & li {
      &:not(:first-child) {
        margin-left: 20px;
      }
      &:nth-child(1) {
        color: #D24848;
      }
      &:nth-child(2) {
        color: #FFB33F;
      }
      &:nth-child(3) {
        color: #1FE1E9;
      }
    }
  }
  .error {
    color: red;
  }
}

.label {
  display: inline-block;
  cursor: pointer;
  user-select: nlabel;
  position: relative;
}
.label input[type="radio"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}
.label span {
  display: inline-block;
  position: relative;
  padding: 0 0 0 20px;
  line-height: 21px;
  text-transform: uppercase;
  padding: 0 2rem;
}
.label span:before {
  content: "";
  transition: all 0.3s;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  border: 1px solid #000;
}
.label span::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
}

/* Checked на каждой из кнопок */
.basic input[type="radio"]:checked + span:after {
  background: rgb(219, 37, 37);
}
.basic input[type="radio"]:checked + span:before {
  border-color: rgb(219, 37, 37);
}
.advanced input[type="radio"]:checked + span:after {
  background: rgb(247, 168, 0);
}
.advanced input[type="radio"]:checked + span:before {
  border-color: rgb(247, 168, 0);
}
.pro input[type="radio"]:checked + span:after {
  background: rgb(0, 225, 255);
}
.pro input[type="radio"]:checked + span:before {
  border-color: rgb(0, 225, 255);
}

/* Hover */
.label span:hover:before {
  transform: scale(1.5);
}

/* Active */
.label span:active:before {
  filter: brightness(80%);
}

/* Disabled */
.label input[type="radio"]:disabled + span {
  color: #666;
  cursor: default;
}
.label input[type="radio"]:disabled + span:before {
  filter: grayscale(100%);
  opacity: 0.6;
}
</style>
