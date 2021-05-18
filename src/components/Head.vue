<template>
  <header class="header">
    <div class="toggle-burger">
      <button>
        <svg
          @click="burgerAnimation()"
          class="burger-icon"
          :class="
            !isColor
              ? {
                  classA: scrollPosition > 1080,
                  classB: scrollPosition > 2020,
                  classC: scrollPosition > 3280,
                }
              : null
          "
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
      <div
        class="logo"
        :class="
          !isColor
            ? {
                classA: scrollPosition > 1080,
                classB: scrollPosition > 2020,
                classC: scrollPosition > 3280,
              }
            : null
        "
      >
        EXP<span>|</span>CON
      </div>
    </div>
    <nav class="nav">
      <div class="bg-circle">
        <svg
          id="burger"
          :class="{
            classD: scrollPosition > 3200,
          }"
          xmlns="http://www.w3.org/2000/svg"
          width="560"
          height="511"
          viewBox="0 0 560 511"
          fill="none"
        >
          <path
            fill="#0B0B0B"
            :class="{
              classD: scrollPosition > 3200,
            }"
            class="close"
            d="M0,0.7c0,0,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.4C0.9,0.1,0.8,0,0.8,0H0V0.7z"
          />
        </svg>
      </div>
      <div class="sun-nav">
        <p
          class="NavItem"
          :class="{
            classA: scrollPosition > 1080,
            classB: scrollPosition > 2020,
            classC: scrollPosition > 3280,
          }"
        >
          WHAT IS IT
        </p>
        <p
          class="NavItem"
          :class="{
            classE: scrollPosition > 3200,
          }"
        >
          PERKS
        </p>
        <p class="NavItem">PRICING</p>
      </div>
    </nav>
  </header>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "Slider",
  data() {
    return {
      isColor: true,
      isShow: false,
      openPath: null,
      closePath: null,
      scrollPosition: null,
      colors: ["#D34848", "#FFB33F", "#1FE1E9"],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    logoAnimation: function () {
      const curentColor = () => {
        if (this.scrollPosition > 1080) {
          return "#d34848 !important";
        } else if (this.scrollPosition > 2020) {
          return "#ffb33f !important";
        } else if (this.scrollPosition > 3280) {
          return "#fff !important";
        }
      };
      anime({
        targets: ".burger-icon .logo",
        duration: 100,
        easing: "linear",
        opacity: this.isShow ? curentColor : "",
      });
    },
    burgerAnimation: function () {
      this.animatesBg();
      this.logoAnimation();
      this.animatesNav();
      if (!this.isShow) {
        this.isShow = true;
        this.isColor = true;
      } else {
        this.isShow = false;
        this.isColor = false;
      }
    },
    animatesBg() {
      this.openPath =
        "M0,385c0,0,93.9,100.5,233.2,100.5c142.2,0,205.7-66.7,257.7-139c53.5-74.4,60.6-160.8,41.7-244.9C516.6,30.3,479.2,0,479.2,0H0V385z";
      this.closePath =
        "M0,0.7c0,0,0.2,0.2,0.4,0.2c0.2,0,0.4-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.4C0.9,0.1,0.8,0,0.8,0H0V0.7z";
      anime({
        targets: ".close",
        duration: 700,
        d: [{ value: this.isShow ? this.openPath : this.closePath }],
      });
    },
    animatesNav() {
      anime({
        targets: ".NavItem",
        duration: 300,
        easing: "linear",
        opacity: this.isShow ? "1" : "0",
        translateY: -10,
        delay: anime.stagger(100, { direction: "reverse" }),
      });
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  computed: {},
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
.classA {
  color: #d34848 !important;
  fill: #d34848 !important;
}
.classB {
  color: #ffb33f !important;
  fill: #ffb33f !important;
}
.classC {
  color: #fff !important;
  fill: #fff !important;
}
.classD {
  fill: #1fe1e9 !important;
}
.classE {
  color: #000 !important;
}

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
  position: sticky;
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
    opacity: 0;
    transform: translateY(20);
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
