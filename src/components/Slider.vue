<template>
  <div class="slider-root">
    <Head />
    <VueSlickCarousel class="slider" :autoplaySpeed="10000" :dots="true" :autoplay="true">
      <img :src="images[0]" />
      <img :src="images[1]" />
      <img :src="images[2]" />
    </VueSlickCarousel>
    <div class="caption">
      <h1 class="title">INTERACTIVE CONCERT EXPERIENCE</h1>
      <div class="description">
        <p>
          Experience your favourite artists like never before and from the comfort of your
          own home.
        </p>
      </div>
      <button class="try-btn" @click="$router.push('/pricing').catch(() => {})">
        TRY IT NOW
      </button>
    </div>
  </div>
</template>

<script>
import Head from "./Head.vue";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Slider",
  components: { VueSlickCarousel, Head },
  data() {
    return {
      images: [image1, image2, image3],
      timer: null,
      currentIndex: 0,
    };
  },
  mounted: function () {
    this.startSlide();
  },
  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 2000000);
    },
    next: function () {
      this.currentIndex += 1;
    },
  },
  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style lang="scss">
.slick-dots {
  bottom: 50px;
  button {
    &::before {
      content: "" !important;
      border: 1px solid #fff;
      border-radius: 50%;
      opacity: 1 !important;
    }
  }
}
.slick-active {
  button {
    &::before {
      background: #ffffff;
    }
  }
}
</style>

<style lang="scss" scoped>
.slider-root {
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    min-height: 1000px;
  }
}
.caption {
  text-align: center;
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 65%;
  transform: translateY(-65%);
  max-width: 1300px;
  margin: 0 auto;
  right: 0;
  left: 0;
  @media (max-width: 900px) {
    max-width: 800px;
    top: 85%;    
    padding: .5rem;
  }
}
.title {
  font-size: 3.6rem;
  letter-spacing: 5.5px;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 2.4rem;
  }
}
.description {
  font-size: 32px;
  padding-top: 2rem;
  letter-spacing: 3.2px;
  max-width: 70%;
  @media (max-width: 1200px) {
    font-size: 1.4rem;
    max-width: 60%;
  }
}
.try-btn {
  outline: 0;
  color: #fff;
  border: 0;
  border-radius: 79px;
  font-size: 1.5rem;
  font-weight: 400;
  max-width: 284px;
  padding: 1.8rem 3rem;
  background: linear-gradient(
    90deg,
    #1fe1e9 0%,
    #5e33d1 20%,
    #d34848 55%,
    #ffb33f 75%,
    #1fe1e9 100%
  );
  margin: 3rem;
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


img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
</style>
