<template>
  <header class="header">
    <div class="toggle-burger">
      <button v-on:click="isShow = !isShow">
        <svg
          version="1.1"
          id="Layer_1"
          class="burger-icon"
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
      <div class="logo">EXP<span>|</span>CON</div>
    </div>
    <nav class="nav" v-if="isShow">
      <div class="bg-circle">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="580px"
          viewBox="0 0 598 540"
          style="enable-background: new 0 0 598 540"
          xml:space="preserve"
        >
          <path
            d="M0,0h502c0,0,103,63,96,235.7C592.6,368.9,450,540,261,540C80.4,540,0,412.2,0,371C0,247.2,0,0,0,0z"
          />
        </svg>
      </div>
      <div class="burger"></div>
      <div class="sun-nav">
        <p class="color">WHAT IS IT</p>
        <p>PERKS</p>
        <p>PRICING</p>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Slider",
  props: {
    msg: String,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted: function () {},
  methods: {},
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
  top: 135px;
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
