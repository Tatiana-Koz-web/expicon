<template>
  <div class="root">
    <Head />
    <div class="perks container">
      <h2 class="title">perks</h2>
      <div class="perks-body">
        <div class="perk">
          <h3 :style="{ color: colors[0] }">Subscription Payment Model</h3>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a payment again!
          </p>
        </div>
        <div class="perk">
          <h3 :style="{ color: colors[1] }">No Fee Cancelation Policy</h3>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a payment again!
          </p>
        </div>
        <div class="perk">
          <h3 :style="{ color: colors[2] }">Subscription Payment Model</h3>
          <p>
            No commitment, cancel anytime. Never worry about forgetting a payment again!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";

export default {
  name: "BlackScreen",
  props: {
    msg: String,
  },
  components: {
    Head,
  },
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
.root {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1000px;
  background: #191919;
  color: #fff;  
  flex-direction: column;
  
  @media (max-width: 1200px) {
    padding-top: 50px;
  }
  & .title {
    text-transform: uppercase;
    font-size: 4rem;
    margin-left: 2rem;
    @media (max-width: 1200px) {
      margin-top: 150px;
      text-align: center;
    } 
       
  }
  .perks-body {
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    @media (max-width: 1200px) {
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 60%;
    }
    .perk {
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
      & h3 {
        max-width: 70%;
        font-size: 2.8rem;
        letter-spacing: 4px;
        position: relative;
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
        font-size: 1.9rem;
        letter-spacing: 3.5px;
        margin-top: 30px;
      }
      @media (max-width: 1200px) {
        margin:  4rem 0;
      }
    }
  }
}
</style>
