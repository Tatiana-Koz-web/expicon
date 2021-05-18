<template>
  <div class="red">
    <div class="root">
      <div class="main">
        <div class="left">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <button>SEE DEMO</button>
        </div>
        <div class="right" @click="!isPlaying ? initPlayer() : pause()">
          <div class="up">
            <img src="../assets/medium17.png" alt="sound" class="sound" />
          </div>
          <div class="down">
            <img src="../assets/medium27.png" alt="sound" class="sound" />
            <button @click="!isPlaying ? initPlayer() : pause()" class="play">
              {{ isPlaying ? "PAUSE" : "CLICK" }}
            </button>
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

export default {
  name: "RedScreen",
  props: {},
  data() {
    return {
      isPlaying: false,
      audio: null,
    };
  },
  mounted() {},
  methods: {
    pause: function (event) {
      console.log(event);
      this.isPlaying = false;
      this.audio.pause();
    },
    initPlayer: function () {
      this.audio = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3"
      );
      this.audio.crossOrigin = "anonymous";
      this.startPlaying();
    },
    startPlaying: function () {
      this.initAudioContext();
    },
    initAudioContext: function () {
      let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      let audioSrc = audioCtx.createMediaElementSource(this.audio);
      audioSrc.connect(audioCtx.destination);
      this.audio.play();
      this.isPlaying = true;
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
  @media (max-width: 1210px) {
    padding: 9rem 1rem 4rem 1rem;
  }
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 5ms ease-in-out;
  @media (max-width: 1210px) {
    flex-direction: column;
    min-height: 1080px;
  }
}

.left {
  margin-left: 2rem;
  @media (max-width: 1210px) {
    padding-top: 4rem;
    font-size: 3.7rem;
    letter-spacing: 5.4px;
    text-align: center;
  }
  @media (max-width: 1210px) {
    padding-top: 4rem;
    font-size: 3.7rem;
    letter-spacing: 5.4px;
  }
  h1 {
    padding-top: 8rem;
    font-size: 4.7rem;
    letter-spacing: 7.4px;
    color: #fff;
    font-size: 600;
    @media (max-width: 1210px) {
      padding-top: 4rem;
      font-size: 3.7rem;
      letter-spacing: 5.4px;
    }
    @media (max-width: 900px) {
      padding-top: 4rem;
      font-size: 2.7rem;
      letter-spacing: 5.4px;
    }
  }
  p {
    font-size: 32px;
    padding: 3rem 0;
    font-size: 3.1rem;
    letter-spacing: 5.1px;
    color: #0b0b0b;
    @media (max-width: 1210px) {
      font-size: 2rem;
      letter-spacing: 3px;
    }
  }
  button {
    cursor: pointer;
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
    transition: all 5ms ease-in-out;
  }
  .up {
    margin-top: -5rem;
    cursor: pointer;
  }
  .down {
    position: relative;
    padding-top: 20rem;
    margin-right: -2rem;
    cursor: pointer;
    @media (max-width: 1210px) {
      padding-top: 0;
      margin-right: 0;
    }
    .play {
      cursor: pointer;
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

.try-btn {
  cursor: pointer;
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
  cursor: pointer;
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
