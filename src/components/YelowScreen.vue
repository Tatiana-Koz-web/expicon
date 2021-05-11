<template>
  <div class="yelowScreen-root">
    <Head />
    <div class="caption">
      <h1 class="title">FRONT ROW SEATS</h1>
      <p class="description">Experience live versions of your favourite songs.</p>
      <button class="btn">SEE DEMO</button>
    </div>
    <div class="mask"></div>
    <button class="btn try-btn" @click="$router.push('/pricing').catch(() => {})">
      TRY IT NOW
    </button>
  </div>
</template>

<script>
import Head from "./Head.vue";

export default {
  name: "YelowScreen",
  props: {
    msg: String,
  },
  components: {
    Head,
  },
  data() {
    return {};
  },

  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.yelowScreen-root {
  position: relative;
  display: flex;
  justify-content: flex-end;
  background-color: #ffb33f;
  overflow: hidden;
}

.mask {
  background-image: url(../assets/component.png);
  background-position: top 32% right 0%;
  background-repeat: no-repeat;
  background-size: 147%;
  min-height: 996px;
  width: 100%;
  mask-image: url(../assets/mask.svg);
  mask-repeat: no-repeat;
  mask-size: 100%;
  @media (max-width: 1400px) {
    mask-image: url(../assets/mask1200.svg);
  }
  @media (max-width: 800px) {
    mask-image: url(../assets/mask900.svg);
  }
  @media (max-width: 600px) {
    background-image: none;    
  }
}

.caption {
  font-size: 3.4rem;
  display: flex;
  z-index: 10;
  position: absolute;
  text-align: right;
  padding-left: 10vw;
  padding-right: 2vw;
  flex-direction: column;
  text-align: left;
  top: 60%;
  transform: translateY(-60%);
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
  }
}
.title {
  font-size: 4rem;
  letter-spacing: 7.4px;
  @media (max-width: 1100px) {
    font-size: 3rem;
  }
}
.description {
  font-size: 32px;
  padding-top: 2rem;
  font-size: 2.8rem;
  letter-spacing: 5.1px;
  color: #0b0b0b;
  max-width: 75%;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
}
.play {
  position: absolute;
  bottom: 167px;
  right: 388px;
  background-color: transparent;
  width: 150px;
  height: 150px;
  color: #fff;
  border-radius: 50%;
  border: solid 2px #fff;
  font-size: 1.5rem;
  letter-spacing: 2.7px;
  z-index: 20;
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}

.btn {
  outline: 0;
  color: #ffb33f;
  border: 0;
  border-radius: 79px;
  font-size: 1.2rem;
  font-weight: 700;
  max-width: 350px;
  padding: 1.8rem 3rem;
  max-width: 320px;
  margin: 3rem 0;
  background-color: #fff;
  text-transform: uppercase;
  transition: all 5ms ease-in-out;
  animation: mix 25s linear infinite alternate;
  letter-spacing: 2.3px;
  &:hover,
  &:focus {
    color: #fff;
    background: radial-gradient(#4b0afd 5%, #fa0404 90%);
  }
}

.try-btn {
  position: absolute;
  top: 42px;
  right: 87px;
  @media (max-width: 800px) {
    top: 60px;
    right: 87px;
  }
  @media (max-width: 600px) {
    top: 20%;
    margin: 0 auto;
  }
}

img {
  object-fit: contain;
  width: 100%;
}
</style>
