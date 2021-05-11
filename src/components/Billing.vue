<template>
  <div class="billing">
    <h3 class="title">2. Billing Information</h3>
    <ul class="billingInfo">
      <li>
        <label for="name" class="label-form">
          <span>FULL NAME</span>
          <input
            placeholder="Mathew Mozaff|"
            type="text"
            id="name"
            v-model="name"
            @input="inputName"
            :class="{ error: error.name }"
          />
        </label>
      </li>
      <li>
        <label for="address" class="label-form">
          <span>billing address</span>
          <input
            type="text"
            id="address"
            v-model="address"
            @input="inputAddress"
            :class="{ error: error.address }"
          />
        </label>
      </li>
      <li>
        <label for="city" class="margin label-form">
          <span>city</span>
          <input
            type="text"
            id="city"
            v-model="city"
            :class="{ error: error.city }"
            list="citys"
            @input="inputCity"
          />
          <datalist id="citys">
            <option value="LA">LA</option>
            <option value="NY">NY</option>
            <option value="NJ">NJ</option>
          </datalist>
        </label>
        <label for="postcode" class="label-form">
          <span>postal code</span>
          <input
            type="text"
            id="postcode"
            v-model="postcode"
            :class="{ error: error.postcode }"
            @input="inputPostcode"
          />
        </label>
      </li>
      <li>
        <label for="country" class="label-form">
          <span>country</span>
          <select
            name="country"
            id="country"
            :class="{ error: this.error.country }"
            @change="inputCountry"
            v-model="country"
          >
            <option value="null" disabled></option>
            <option value="USA">USA</option>
          </select>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Billing",
  data() {
    return {
      name: "",
      address: "",
      city: "",
      postcode: "",
      country: "",
    };
  },
  props: {
    error: {
      type: Object,
      default: () => Object,
    },
  },
  methods: {
    inputName() {
      this.createJSONBilling();
    },
    inputAddress() {
      this.createJSONBilling();
    },
    inputCity() {
      this.createJSONBilling();
    },
    inputPostcode() {
      this.createJSONBilling();
    },
    inputCountry() {
      this.createJSONBilling();
    },
    createJSONBilling() {
      this.$emit(
        "checkedBilling",
        this.name,
        this.address,
        this.city,
        this.postcode,
        this.country
      );
    },
  },
};
</script>

<style lang="scss">
.billing {
  & li {
    margin: 2rem 0;
    display: flex;
    width: 681px;
     @media (max-width: 1750px) {
      min-width: 100%;
      max-width: 700px;      
      width: 100%;
      flex-direction: column;
    }
    @media (max-width: 1400px) {
      max-width: 600px;
      padding-right: 0;
    }
    @media (max-width: 1070px) {
      max-width: 430px;
    }
   
  }
}
.billingInfo {
  padding-left: 3rem;
  @media (max-width: 1750px) {
    padding-left: 0;
  }
}
.label-form {
  display: flex;
  flex-direction: column;
  width: inherit;
  & span {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0.5rem 0;
    text-transform: uppercase;
  }
  & input,
  select {
    width: 100%;
    min-height: 74px;
    padding: 1rem;
    font-size: 2rem;
    transition: all 0.3s;
    border: 3px solid #000;
    &:focus {
      border-bottom: 10px solid #2f1fe9;
    }
    &::placeholder {
      color: #000000;
      letter-spacing: 2.8px;
    }
    @media (max-width: 1440px) {
      font-size: 1rem;
      height: auto;
      padding: 0.5rem;
    }
  }
}
.margin {
  margin-right: 1rem;
  @media (max-width: 960px) {
    margin: 0;
  }
}
.error {
  border: 3px solid red !important;
}
</style>
