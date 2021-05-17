<template>
  <header class="header">
    <div class="toggle-burger">
      <button>
        <svg
          @click="burgerAnimation()"
          class="burger-icon"
          :style="[isColor ? '' : { fill: color }]"
          role="img"
          aria-label="burger"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 56 33"
          style="enable-background: new 0 0 56 33"
          xml:space="preserve"
        >
          <path d="M0,6.2V0h56v6.2H0z" />
          <path d="M0,19.6v-6.2h56v6.2H0z" />
          <path d="M0,33v-6.2h56V33H0z" />
        </svg>
      </button>
      <div class="logo" :style="[isColor ? '' : { color: color }]">
        EXP<span>|</span>CON
      </div>
    </div>
    <nav class="nav">
      <div class="bg-circle">
        <svg
          id="burger"
          xmlns="http://www.w3.org/2000/svg"
          width="560"
          height="511"
          viewBox="0 0 560 511"
          fill="none"
        >
          <path
            fill="#0B0B0B"
            class="close"
            d="M0,0.7c0,0,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.4C0.9,0.1,0.8,0,0.8,0H0V0.7z"
          />
        </svg>
      </div>
      <div class="burger"></div>
      <div class="sun-nav" :style="[isColor ? { display: 'none' } : { display: 'block' }]">
        <p :style="[isColor ? '' : { color: color }]">WHAT IS IT</p>
        <p :style="[isColor ? '' : { color: '#fff' }]">PERKS</p>
        <p :style="[isColor ? '' : { color: '#fff' }]">PRICING</p>
      </div>
    </nav>
  </header>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "Slider",
  props: ["color"],
  data() {
    return {
      isColor: true,
      isShow: false,
      timeline: null,
      openPath: null,
      closePath: null,
    };
  },
  mounted: function () {},
  methods: {
    burgerAnimation: function () {
      this.openPath =
        "M0,385c0,0,93.9,100.5,233.2,100.5c142.2,0,205.7-66.7,257.7-139c53.5-74.4,60.6-160.8,41.7-244.9C516.6,30.3,479.2,0,479.2,0H0V385z";
      this.closePath =
        "M0,0.7c0,0,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.4C0.9,0.1,0.8,0,0.8,0H0V0.7z";
      this.timeline = anime.timeline({
        easing: "easeOutExpo",
        duration: 400,
      });
      this.timeline.add({
        targets: ".close",
        d: [{ value: this.isShow ? this.openPath : this.closePath }],
      });
      if (!this.isShow) {
        this.isShow = true;
        this.isColor = true;
      } else {
        this.isShow = false;
        this.isColor = false;
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  overflow: visible;
  background-color: transparent;
  color: inherit;
  font: inherit;
  appearance: none;
  cursor: pointer;
  outline: 0;
  height: 2.1rem;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  .logo {
    font-size: 2.8rem;
    font-weight: 300;
    letter-spacing: 4.8px;
    color: #fff;
  }
}
.nav {
  position: absolute;
  font-size: 3rem;
}
.toggle-burger {
  position: absolute;
  top: 100px;
  left: 84px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 25;
}
.burger-icon {
  fill: #fff;
  cursor: pointer;
  width: 3.5rem;
  height: 2.1rem;
  margin-right: 2rem;
}
.sun-nav {
  position: absolute;  
  top: 175px;
  left: 83px;
  text-align: left;
  letter-spacing: 4.7px;
  font-weight: 600;
  p {
    margin: 1rem 0;
  }
}
.color {
  color: #5e33d1;
}

@keyframes scale {
  0% {
    transform: rotateX(0deg);
  }
  25% {
    transform: rotateX(90deg);
  }
  50% {
    transform: rotateX(120deg);
  }
  75% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
</style>
