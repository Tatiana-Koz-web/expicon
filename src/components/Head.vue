<template>
  <header class="header">
    <div class="toggle-burger">
      <button v-on:click="isShow = !isShow">       
        <svg
          class="burger-icon"
          role="img"
          aria-label="burger"
          viewBox="0 0 32 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
        </svg>
      </button>
      <div class="logo">EXP|CON</div>
    </div>
    <nav class="nav"  v-if="isShow">
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
  methods: {

  },
  computed: {

    
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  overflow: visible;
  background-color: transparent;
  color: inherit;
  font: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: 0;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
}
.nav {
  position: absolute;
  font-size: 3rem;  
}
.toggle-burger {
  position: absolute;
  top: 60px;
  left: 83px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-weight: 200;
  font-size: 3rem;
  z-index: 25;
}
.burger-icon {
  fill: #fff;
  cursor: pointer;
  width: 50px;
  margin-right: 1rem;
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
  0%   {transform:rotateX(0deg);}
   25%  {transform:rotateX(90deg);}
   50%  {transform:rotateX(120deg);}
   75%  {transform:rotateX(180deg);}
   100% {transform:rotateX(360deg);}
}





</style>
