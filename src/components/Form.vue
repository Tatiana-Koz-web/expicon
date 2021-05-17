<template>
  <div class="root">
    <Head color="#D24848"/>
    <form class="form container">
      <div class="plan">
        <h1 class="form-title">PAYMENT</h1>
        <Plan @checkedPlan="checkedPlan" :error="error" />
      </div>
      <div class="df">
        <Billing @checkedBilling="checkedBilling" :error="error" />
        <Credit @checkedCredit="checkedCredit" :error="error" />
      </div>
      <span class="aggre">
        By continuing, I acknowledge that I’ve read and agree to the
        <a href="##">Terms of Service</a> & <a href="##">Privacy Policy</a>.
      </span>
      <div class="wraper">
        <button class="try-btn" @click.prevent="createJSON">DOWNLOAD</button>
      </div>
    </form>
    <Footer />
  </div>
</template>

<script>
import Plan from "../components/Plan";
import Billing from "../components/Billing";
import Credit from "../components/CreditCard";
import Footer from "./Footer.vue";
import Head from "./Head.vue";
export default {
  name: "Form",
  components: {
    Plan,
    Billing,
    Credit,
    Head,
    Footer,
  },
  data() {
    return {
      dataForm: {},
      plan: "",
      name: "",
      address: "",
      city: "",
      postcode: "",
      country: "",
      cardHolderName: "",
      cardNamber: "",
      dateV: "",
      dateE: "",
      cvv: "",
      error: {
        plan: false,
        name: false,
        address: false,
        city: false,
        postcode: false,
        country: false,
        cardHolderName: false,
        cardNamber: false,
        dateV: false,
        dateE: false,
        cvv: false,
      },
    };
  },
  methods: {
    checkedPlan(plan) {
      this.plan = plan;
    },
    checkedBilling(name, address, city, postcode, country) {
      this.name = name;
      this.address = address;
      this.city = city;
      this.postcode = postcode;
      this.country = country;
    },
    checkedCradit(cardHolderName, cardNamber, dateV, dateE, cvv) {
      this.cardHolderName = cardHolderName;
      this.cardNamber = cardNamber;
      this.dateV = dateV;
      this.dateE = dateE;
      this.cvv = cvv;
    },
    createJSON() {
      if (!this.plan) {
        this.error.plan = true;
      }
      if (this.name.length < 3) {
        this.error.name = true;
      }
      if (this.address.length < 5) {
        this.error.address = true;
      }
      if (this.city.length < 4) {
        this.error.city = true;
      }
      if (!this.postcode.length) {
        this.error.postcode = true;
      }
      if (this.country.length < 3) {
        this.error.country = true;
      }
      if (this.cardHolderName.length < 3) {
        this.error.cardHolderName = true;
      }
      if (this.cardNamber.length < 12) {
        this.error.cardNamber = true;
      }
      if (!this.dateV) {
        this.error.dateV = true;
      }
      if (!this.dateE) {
        this.error.dateE = true;
      }
      if (this.cvv.length !== 3) {
        this.error.cvv = true;
      }

      this.dataForm.plan = this.plan;
      this.dataForm.name = this.name;
      this.dataForm.address = this.address;
      this.dataForm.city = this.city;
      this.dataForm.postcode = this.postcode;
      this.dataForm.country = this.country;
      this.dataForm.cardHolderName = this.cardHolderName;
      this.dataForm.cardNamber = this.cardNamber;
      this.dataForm.dateV = this.dateV;
      this.dataForm.dateE = this.dateE;
      this.dataForm.cvv = this.cvv;
      let d = this.dataForm;
      console.log(d);
    },
  },
};
</script>

<style lang="scss">
.wraper {
  padding-left: 4rem;
}

.root {
  background-color: #fff;
  color: #000000;
  padding-top: 15rem;
}

.plan {
  padding-left: 2rem;   
}
.form {
  margin-bottom: 15rem;
  &-title {
    font-size: 4rem;
  }
  .df {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    
    @media (max-width: 1500px) {
      flex-direction: column;
      
      
    }
  }
  .aggre {
    display: block;
    max-width: 700px;
    margin: 50px 0;
    font-size: 1.2rem;
    letter-spacing: 2.2px;
    color: #191919;
    padding-left: 7rem;
    & input {
      margin-right: 1rem;
    }
    & a {
      color: #2f1fe9;
      text-decoration: none;
      font-weight: 800;
    }
  }
  .try-btn {
  outline: 0;
  color: #fff;
  border: 0;
  border-radius: 79px;
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 300px;
  padding: 1.8rem 5rem;
  background: linear-gradient(
    90deg,
    #1fe1e9 0%,
    #5e33d1 20%,
    #d34848 55%,
    #ffb33f 75%,
    #1fe1e9 100%
  );
  margin: 3rem;
  text-transform: uppercase;
  transition: all 5ms ease-in-out;
  animation: mix 30s linear infinite alternate;
  letter-spacing: 2.3px;
  &:hover,
  &:focus {
    background: linear-gradient(
      90deg,
      #26f1f8 0%,
      #4b0afd 20%,
      #fa0404 55%,
      #fc9b0b 75%,
      #13eff7 100%
    );
  }
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}
}
</style>
