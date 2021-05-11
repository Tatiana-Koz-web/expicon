<template>
  <div class="credit">
    <h3 class="title">3. Credit Card Information</h3>
    <ul>
      <li>
        <label for="cardholdername" class="label-form">
          <span>Cardholder`s NAME</span>
          <input
            type="text"
            name="cardholdername"
            id="cardholdername"
            v-model="cardHolderName"
            :class="{error: error.cardHolderName}"
            @change="inputNameCardHolder"
          />
        </label>
      </li>
      <li>
        <label for="cardnamber" class="label-form">
          <span>card namber</span>
          <input
            type="number"
            name="cardnamber"
            v-model="cardNamber"
            :class="{error: error.cardNamber}"
            id="cardnamber"
            @change="inputCardNumber"
          />
        </label>
      </li>
      <li>
        <label for="expires" class="label-form margin">
          <span>card namber</span>
          <input
            type="date"
            name="expires"
            :class="{error: error.dateV}"
            v-model="dateV"
            id="expires"
            @change="inputDateV"
          />
        </label>
        <label for="expires" class="label-form">
          <span>card namber</span>
          <input
            type="date"
            name="expires"
            :class="{error: error.dateE}"
            v-model="dateE"
            id="expires"
            @change="inputDateE"
          />
        </label>
      </li>
      <li>
        <label for="cvv" class="label-form">
          <span>cvv</span>
          <input
            type="number"
            name="cvv"
            id="cvv"
            :class="{error: error.cvv}"
            v-model="cvv"
            @change="inputCvv"
          />
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardHolderName: "",
      cardNamber: "",
      dateV: "",
      dateE: "",
      cvv: "",
    };
  },
  props: {
    error: {
      type: Object,
      default: () => Object,
    },
  },
  methods: {
    inputNameCardHolder() {
      this.createJSONBilling();
    },
    inputCardNumber() {
      this.createJSONBilling();
    },
    inputDateV() {
      this.createJSONBilling();
    },
    inputDateE() {
      this.createJSONBilling();
    },
    inputCvv() {
      this.createJSONBilling();
    },
    createJSONBilling() {
      this.$emit(
        "checkedCradit",
        this.cardHolderName,
        this.cardNamber,
        this.dateV,
        this.dateE,
        this.cvv
      );
    },
  },
};
</script>

<style lang="scss">
.credit {
  & li {
    margin: 2rem 0;
    display: flex;
    width: 681px;
    @media (max-width: 1400px) {
      max-width: 600px;
    }
    @media (max-width: 1070px) {
      max-width: 430px;
    }
    @media (max-width: 1750px) {
      flex-direction: column;
      min-width: 100%;
      max-width: 800px;
      width: 100%;
    }
  }
}
.city-label {
  margin-right: 1rem;
}
.error {
  border: 3px solid red !important;
}
</style>