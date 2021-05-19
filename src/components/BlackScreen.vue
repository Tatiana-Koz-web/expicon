<template>
  <div class="black">
    <div class="root">
      <div class="main">
        <button class="try-btn" @click="$router.push('/pricing').catch(() => {})">
          TRY IT NOW
        </button>
        <h2 class="title">perks</h2>
        <div class="items">
          <div class="item1">
            <div class="line" :style="{ backgroundColor: colors[0] }"></div>
            <h3 :style="{ color: colors[0] }">
              Subscription Payment <br />
              Model
            </h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
          <div class="item2">
            <div class="line" :style="{ backgroundColor: colors[1] }"></div>
            <h3 :style="{ color: colors[1] }">No Fee Cancelation Policy</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
          <div class="item3">
            <div class="line" :style="{ backgroundColor: colors[2] }"></div>
            <h3 :style="{ color: colors[2] }">
              Subscription Payment<br />
              Model
            </h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a payment again!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackScreen",
  components: {},
  data() {
    return {
      colors: ["#D34848", "#1FE1E9", "#FFB33F"],
    };
  },

  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.red {
  background-color: #0b0b0b;
}
.root {
  position: relative;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1229px;
  background: inherit;
  color: #fff;
  padding: 9rem;
  flex-direction: column;
  @media (max-width: 1200px) {
    max-width: 1170px;
  }
  @media (max-width: 768px) {
    max-width: 750px;
    padding: 3rem;
  }
}
.items {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  gap: 70px;
  margin-top: 3.5rem;
  @media (max-width: 1900px) {
    gap: 30px;
  }
  @media (max-width: 1150px) {
    grid-template-columns: 1fr;
  }
  .line {
    width: 20%;
    height: 2px;
    margin-bottom: 2rem;
  }
  h3 {
    max-width: 70%;
    font-size: 3.2rem;
    letter-spacing: 5.1px;
    position: relative;
    @media (max-width: 1450px) {
      font-size: 2.2rem;
    }
  }

  p {
    max-width: 26rem;
    font-size: 2.1rem;
    letter-spacing: 3.5px;
    padding-top: 2rem;
    @media (max-width: 1450px) {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 1200px) {
    margin: 4rem 0;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 5ms ease-in-out;
  width: 100%;
  @media (max-width: 1210px) {
    flex-direction: column;
    min-height: 1080px;
  }
  & .title {
    text-transform: uppercase;
    font-size: 4.6rem;
    font-weight: 600;
    @media (max-width: 1200px) {
      margin-top: 150px;
      text-align: center;
    }
  }
}
.try-btn {
  cursor: pointer;
  position: absolute;
  top: 66px;
  right: 79px;
  outline: 0;
  color: #fff;
  border: 0;
  border-radius: 79px;
  font-size: 1.1rem;
  letter-spacing: 1.8px;
  font-weight: 600;
  padding: 1.3rem 4rem;
  background: linear-gradient(
    90deg,
    #1fe1e9 0%,
    #5e33d1 20%,
    #d34848 55%,
    #ffb33f 75%,
    #1fe1e9 100%
  );
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
</style>
