<template>
  <div class="root">
    <Head />
    <div class="slider" id="slider">
      <div class="slider-items">
        <img :src="currentImg" id="sliderImg" />
        <div class="pagination">
          <button @click="next(0)"></button>
          <button @click="next(1)"></button>
          <button @click="next(2)"></button>
        </div>
      </div>
      <div class="caption">
        <div class="wrap">
          <h1 class="title">INTERACTIVE CONCERT EXPERIENCE</h1>
          <p>
            Experience your favourite artists like never before and from the comfort of
            your own home.
          </p>
          <button class="try-btn" @click="$router.push('/pricing').catch(() => {})">
            TRY IT NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import dissImg from "../assets/diss.png";
import blackImg from "../assets/black.png";
import anime from "animejs/lib/anime.es.js";
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
import HoverEffect from "hover-effect";
export default {
  name: "Slider",
  components: { Head },
  data() {
    return {
      images: [image1, image2, image3],
      hoverDistort: null,
      blackImg: blackImg,
      diss: dissImg,
      toggle: false,
      timeline: null,
      currentIndex: 0,
      timer: null,
    };
  },
  mounted: function () {
    this.startSlide();
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(() => {
        this.next();
      }, 4000);
    },
    hover: function (i) {
      this.hoverDistort = new HoverEffect({
        parent: document.getElementById("slider"),
        intensity: 0.2,
        image1: this.images[i],
        image2: this.blackImg,
        displacementImage: this.diss,
      });
    },
    next: function () {
      this.currentIndex += 1;
    },
    sliderAnimation: function (i) {
      this.timeline = anime.timeline({
        easing: "easeOutExpo",
        duration: 750,
      });
      this.timeline.add({
        targets: ".mask",
        src: [
          {
            value: this.images[i],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  position: relative;
  padding: 0;
  width: 100%;
  height: 1080px;
}
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  .slider-items {
    position: relative;
    .pagination {
      position: absolute;
      bottom: 2rem;
      z-index: 35;
      width: 100%;
      display: flex;
      justify-content: center;
      button {
        border: 1px solid #fff;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        margin: 0.3rem;
        background-color: transparent;
        &:hover {
          background-color: #fff;
        }
      }
    }
    img {
      display: block;
      width: 100%;
      filter: brightness(60%);
      height: 1080px;
      object-fit: cover;
    }
  }
}
.caption {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  padding-top: 4rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;  
  .wrap {
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {      
      font-size: 4rem;
      letter-spacing: 6.5px;
      font-weight: 600;
      transition: all 5ms ease-in-out;
      @media (max-width: 1200px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 2rem;     
      letter-spacing: 3.2px;
      font-weight: 400; 
      width: 50%;   
      padding:  2rem 0;
      transition: all 5ms ease-in-out;  
      @media (max-width: 1200px) {
        font-size: 1.4rem;
      }
    }
  }
}

.try-btn {
  outline: 0;
  color: #fff;
  border: 0;
  border-radius: 79px;
  font-size: 1.4rem;
  letter-spacing: 2.3px;
  font-weight: 600;  
  padding: 1.6rem 4.1rem;
  background: linear-gradient(
    90deg,
    #1fe1e9 0%,
    #5e33d1 20%,
    #d34848 55%,
    #ffb33f 75%,
    #1fe1e9 100%
  );  
  text-transform: uppercase;
  transition: all 5ms ease-in-out;
  animation: mix 30s linear infinite alternate;
  letter-spacing: 2.3px;
  &:hover,
  &:focus {
    background: linear-gradient(
      90deg,
      #26f1f8 0%,
      #4b0afd 20%,
      #fa0404 55%,
      #fc9b0b 75%,
      #13eff7 100%
    );
  }
}
@keyframes mix {
  to {
    background-position: 50vw;
  }
}
</style>
