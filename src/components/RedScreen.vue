<template>
  <div class="red">
    <div class="root">
      <Head color="#d34848" />
      <div class="main">
        <div class="left">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <button>SEE DEMO</button>
        </div>
        <div class="right">
          <div class="up">
            <img src="../assets/medium17.png" alt="sound" />
          </div>
          <div class="down">
            <img src="../assets/medium27.png" alt="sound" />
            <button class="play">CLICK</button>
          </div>
        </div>
      </div>
      <button class="try-btn" @click="$router.push('/pricing').catch(() => {})">
        TRY IT NOW
      </button>
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
export default {
  name: "RedScreen",
  props: {},
  components: {
    Head,
  },
  data() {
    return {
      audioContext: null,
    };
  },
  mounted: {},

  methods: {
    audioInit: function () {
      try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new AudioContext();
      } catch (e) {
        alert("Web Audio API is not supported in this browser");
      }
    },
    playSound: function (buffer) {
      var source = context.createBufferSource(); 
      source.buffer = buffer;
      source.connect(context.destination); 
      source.start(0);      
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.red {
  background-color: #d34848;
}
.root {
  position: relative;
  background-color: inherit;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  min-height: 1080px;
  padding: 9rem;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.left {
  margin-left: 2rem;
  h1 {
    padding-top: 8rem;
    font-size: 4.7rem;
    letter-spacing: 7.4px;
    color: #fff;
    font-size: 600;
  }
  p {
    font-size: 32px;
    padding: 3rem 0;
    font-size: 3.1rem;
    letter-spacing: 5.1px;
    color: #0b0b0b;
  }
  button {
    outline: 0;
    color: #d1346e;
    border: 0;
    letter-spacing: 2.3px;
    border-radius: 79px;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 1.7rem 6.3rem;
    background-color: #fff;
    text-transform: uppercase;
    transition: all 5ms ease-in-out;
    animation: mix 25s linear infinite alternate;
    &:hover,
    &:focus {
      color: #fff;
      background: radial-gradient(#4b0afd 5%, #fa0404 90%);
    }
  }
}

.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  height: 100%;
  img {
    display: block;
    object-fit: contain;
  }
  .up {
    margin-top: -5rem;
  }
  .down {
    position: relative;
    padding-top: 20rem;
    margin-right: -2rem;
    .play {
      position: absolute;
      bottom: -20px;
      left: -52px;
      background-color: transparent;
      width: 145px;
      height: 145px;
      color: #fff;
      border-radius: 50%;
      border: solid 2px #fff;
      font-size: 1.7rem;
      font-weight: 600;
      letter-spacing: 2.7px;
      z-index: 20;
      &:hover,
      &:focus {
        background-color: #fff;
        color: #d1346e;
      }
    }
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

.try-btn {
  position: absolute;
  padding: 1.3rem 4rem;
  top: 93px;
  right: 74px;
  outline: 0;
  color: #d1346e;
  border: 0;
  letter-spacing: 1.8px;
  border-radius: 79px;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #fff;
  text-transform: uppercase;
  transition: all 5ms ease-in-out;
  animation: mix 25s linear infinite alternate;
  &:hover,
  &:focus {
    color: #fff;
    background: radial-gradient(#4b0afd 5%, #fa0404 90%);
  }
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}

.btn {
  position: absolute;
  top: 95px;
  outline: 0;
  color: #d1346e;
  border: 0;
  border-radius: 79px;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.8rem 3rem;
  max-width: 320px;
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
</style>
