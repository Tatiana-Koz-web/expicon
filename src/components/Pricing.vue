<template>
  <div class="root">
    <Head color="#1FE1E9"/>
    <div class="container">
      <h2 class="title">PRICING</h2>
      <span class="subtitle"
        >Test out our app today! Choose from three subscription Based payment models.
      </span>
      <div class="plans">
        <div class="basic plan">
          <h3>basic</h3>
          <h2>monthly</h2>
          <span class="price">$9</span>
          <ul>
            <li>Very good</li>
            <li>Amazing</li>
            <li>Perfect job</li>
            <li>Love this</li>
            <li>It’s so good</li>
            <li>Features</li>
          </ul>
          <button
            :style="{ backgroundColor: colors[0] }"
            class="select"
            @click="$router.push('/form').catch(() => {})"
          >
            select
          </button>
        </div>
        <div class="advanced plan">
          <h3>advanced</h3>
          <h2>yerly</h2>
          <span class="price">$99</span>
          <ul>
            <li>Very very good</li>
            <li>Even Amazing</li>
            <li>Perfect job</li>
            <li>Love this more</li>
            <li>It’s so so good</li>
            <li>More Features</li>
          </ul>
          <button
            :style="{ backgroundColor: colors[1] }"
            class="select"
            @click="$router.push('/form').catch(() => {})"
          >
            select
          </button>
        </div>
        <div class="pro plan">
          <h3>pro</h3>
          <h2>yerly</h2>
          <span class="price">$120</span>
          <ul>
            <li>Very very good</li>
            <li>Even more</li>
            <li>Perfect job</li>
            <li>Love this more</li>
            <li>It’s so so good</li>
            <li>More Features</li>
          </ul>
          <button
            :style="{ backgroundColor: colors[2] }"
            class="select"
            @click="$router.push('/form').catch(() => {})"
          >
            select
          </button>
        </div>
      </div>
    </div>
    <div class="perks">
      <Head />
      <div class="container">
        <h2 class="title">perks</h2>
        <div class="perks-body">
          <div class="perk">
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
          <div class="perk">
            <h3>No Fee Cancelation Policy</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
          <div class="perk">
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Head from "./Head.vue";

export default {
  name: "Pricing",
  data() {
    return {
      colors: ["#D34848", "#FFB33F", "#1FE1E9"],
    };
  },
  components: {
    Head,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.root {
  padding-top: 12rem;
  background-color: #191919;
  color:#fff
}
.title {
  font-size: 3.8rem;
  font-weight: 600;
  @media (max-width: 1400px) {
    padding: 3rem;
  }
}
.subtitle {
  display: block;
  line-height: 1.5;
  font-size: 2.8rem;
  letter-spacing: 5.5px;
  width: 100%;
  margin: 50px 0;
  @media (max-width: 1300px) {
    padding: 3rem;
  }
}
.plans {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1700px) {
    padding: 0 3rem;
  }
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center;
  }
}
.plan {
  @media (max-width: 1300px) {
    padding: 3rem;
  }
  & h3 {
    font-size: 2.3rem;
    position: relative;
    margin-bottom: 15px;
    text-transform: uppercase;
    &::before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 100px;
      height: 3px;
      background: #fff;
    }
  }
  & h2 {
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  & .price {
    font-size: 7.5rem;
    font-weight: 700;
    letter-spacing: 13.5px;
  }
  & li {
    position: relative;
    margin: 15px 20px;
    font-size: 2.6rem;
    letter-spacing: 4.7px;
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: -29px;
      width: 25px;
      height: 25px;
      background: url(../assets/s.svg) no-repeat;
    }
  }
  & .href {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    background: #fff;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 900px) {
    margin: 2rem;
  }
}
.basic {
  & h3,
  h2,
  .price {
    color: #d44a49;
    &::before {
      background: #d44a49;
    }
  }
  & .href {
    background: #d44a49;
  }
}
.advanced {
  & h3,
  h2,
  .price {
    color: #f0b043;
    &::before {
      background: #f0b043;
    }
  }
  & .href {
    background: #f0b043;
  }
}
.pro {
  & h3,
  h2,
  .price {
    color: #1ee2e9;
    &::before {
      background: #1ee2e9;
    }
  }
  & .href {
    background: #1ee2e9;
  }
}

.select {
  outline: 0;
  color: #fff;
  border: 0;
  border-radius: 79px;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1.4rem 6rem;
  max-width: 320px;
  letter-spacing: 2.4px;
  margin: 3rem 0;
  text-transform: uppercase;
}

.perks {
  position: relative;
  padding: 15rem 0;
  width: 100%;
  min-height: 500px;
  background: #d34949;
  color: #fff;
  display: flex;
  flex-direction: column;
  @media (max-width: 1800px) {
    padding: 15rem 3rem;
  }
  @media (max-width: 900px) {
    padding-top: 50px;
  }
  & .title {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 600;
    letter-spacing: 7.4px;
    @media (max-width: 900px) {
      margin-top: 50px;
    }
  }
  .perks-body {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    @media (max-width: 1400px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .perk {
      max-width: 400px;
      width: 100%;
      font-size: 2.8rem;
      line-height: 1.2;
      @media (max-width: 1400px) {
        margin: 5rem;
      }
      & h3 {
        font-size: 2.5rem;
        position: relative;
        max-width: 45%;
        letter-spacing: 5.1px;
        &::before {
          content: "";
          position: absolute;
          top: -20px;
          width: 100px;
          height: 3px;
          background: #ffffff;
        }
      }

      & p {
        color: #000;
        font-size: 1.9rem;
        letter-spacing: 3.6px;
        margin-top: 30px;
        max-width: 100%;
      }

      @media (max-width: 900px) {
        margin: 2rem;
      }
    }
  }
}
</style>
