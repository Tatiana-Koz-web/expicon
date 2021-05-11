<template>
  <div class="redScreen-root">
    <Head />
    <div class="caption">
      <h1 class="title">SUPERIOR SOUND</h1>
      <p class="description">Experience live versions of your favourite songs.</p>
      <button class="btn">SEE DEMO</button>
    </div>
    <img class="medium17" src="../assets/medium17.png" alt="sound" />
    <img class="medium27" src="../assets/medium27.png" alt="sound" />
    <button class="btn try-btn" @click="$router.push('/pricing').catch(() => {})">
      TRY IT NOW
    </button>
    <button class="play">CLICK</button>
  </div>
</template>

<script>
import Head from "./Head.vue";
export default {
  name: "RedScreen",
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
.redScreen-root {
  position: relative;
  background-color: #d34848;
  padding: 2rem 0;
  min-height: 1000px;
  @media (max-width: 1100px) {
    min-height: 1400px;
  }
}
.caption {
  font-size: 3.4rem;
  display: flex;
  z-index: 10;
  position: absolute;
  text-align: left;
  padding-left: 9vw;
  padding-right: 9vw;
  flex-direction: column;
  top: 60%;
  transform: translateY(-60%);
  @media (max-width: 1700px) {
    top: 80%;
  }
}
.title {
  font-size: 4rem;
  letter-spacing: 7.4px;
}
.description {
  font-size: 32px;
  padding-top: 2rem;
  font-size: 2.8rem;
  letter-spacing: 5.1px;
  color: #0b0b0b;
  max-width: 75%;
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
  @media (max-width: 1700px) {
    top: 40%;
  }
  @media (max-width: 850px) {
    top: 40%;
    right: 10%;
  }
}

img {
  max-width: 300px;
}

.medium27 {
  position: absolute;
  top: 400px;
  right: 150px;
  @media (max-width: 1700px) {
    top: 20%;
  }
  @media (max-width: 850px) {
    top: 20%;
    right: 100px;
  }
  @media (max-width: 800px) {
    display: none;
  }
}

.medium17 {
  position: absolute;
  top: 197px;
  right: 456px;
  @media (max-width: 1700px) {
    top: 20%;
  }
  @media (max-width: 850px) {
    top: 20%;
    left: 100px;
  }
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}

.btn {
  outline: 0;
  color: #d1346e;
  border: 0;
  border-radius: 79px;
  font-size: 1.2rem;
  font-weight: 700;  
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
    top: 12%;
    margin: 0 auto;
  }
}
</style>
