<template>
  <div class="red">
    <div class="root">
      <div class="main">
        <div class="left">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <button>SEE DEMO</button>
        </div>
        <audio :src="audio" ref="audio" />
        <div class="right" @click="isPlaying ? initPlayer : pause">
          <div class="up">
            <img src="../assets/medium17.png" alt="sound" class="sound" />
          </div>
          <div class="down">
            <img src="../assets/medium27.png" alt="sound" class="sound" />
            <button @click="isPlaying ? initPlayer() : pause()" class="play">
              {{ isPlaying ? "CLICK" : "PAUSE" }}
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
      isPlaying: true,
      audio: null,
      audioCtx: null,
    };
  },
  mounted() {},
  methods: {
    pause: function () {
      this.isPlaying = true;
      this.audio.pause();
    },
    initPlayer: function () {
      this.audio = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3"
      );
      this.audio.crossOrigin = "anonymous";
      this.startPlaying();
      let playPromise = this.audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = false;
          })
          .catch(() => {
            this.isPlaying = true;
          });
      }
    },
    startPlaying: function () {
      this.initAudioContext();
    },
    initAudioContext: function () {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.audioSrc = this.audioCtx.createMediaElementSource(this.audio);
      this.audioSrc.connect(this.audioCtx.destination);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.red {
  max-width: 1920px;
  margin: 0 auto;
  background-color: #d34848;
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
    @media (max-width: 1610px) {
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
    padding: 1rem 0 2rem;
    font-size: 3.1rem;
    letter-spacing: 5.1px;
    color: #0b0b0b;
    @media (max-width: 1300px) {
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
    @media (max-width: 540px) {
      padding: 1rem 4rem;
    }
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
  transition: all 5ms ease-in-out;
  @media (max-width: 1210px) {
    margin-top: 3rem;
  }
  img {
    display: block;
    object-fit: contain;

    @media (max-width: 700px) {
      transition: all 5ms ease-in-out;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      transition: all 5ms ease-in-out;
      max-width: 200px;
    }
    @media (max-width: 500px) {
      transition: all 5ms ease-in-out;
      max-width: 150px;
    }
  }
  .up {
    margin-top: -5rem;
    cursor: pointer;
    @media (max-width: 1210px) {
      margin-top: 0;
    }
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
      @media (max-width: 1210px) {
        margin-top: 0;
        left: -83px;
      }
      @media (max-width: 450px) {
        width: 100px;
        height: 100px;
        font-size: 1.3rem;
        left: -55px;
      }
    }
  }
}

.try-btn {
  cursor: pointer;
  position: absolute;
  padding: 1.3rem 4rem;
  top: 95px;
  right: 79px;
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
