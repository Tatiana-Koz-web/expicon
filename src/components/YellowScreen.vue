<template>
  <div class="yellow>">
    <div class="root">      
      <canvas id="canvas" width="1920" height="1080" ref="canvas"></canvas>      
      <div class="caption">
      <h1 class="title">FRONT ROW SEATS</h1>
      <p class="description">Experience live versions of your favourite songs.</p>
      <button class="btn">SEE DEMO</button>
    </div>
    <div class="mask"></div>
    <button class="btn try-btn" @click="$router.push('/pricing').catch(() => {})">
      TRY IT NOW
    </button>
    </div>
  </div>
</template>

<script>
import bg from "../assets/yellowBg.png";
export default {
  name: "YellowScreen",  
  components: {    
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      bgCanvas: bg,      
      brushReveal: null,
    };
  },

  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.initReveal();
    this.canvas.addEventListener("touchmove", this.ontouchmove, false);
    this.canvas.addEventListener("mousemove", this.onmouseover, false);
  },
  methods: {
    initBrush: function () {
      this.brushReveal = (this.canvas.width / 100) * 3;
      if (this.brushReveal < 50) {
        this.brushReveal = 50;
      }
      // if (window.devicePixelRatio >= 2) {
      // } else {

      // }
    },
    detectLeftButton: function (event) {
      if ("buttons" in event) {
        return event.buttons === 1;
      } else if ("which" in event) {
        return event.which === 1;
      } else {
        return event.button === 1;
      }
    },
    ontouchmove: function (e) {
      e.preventDefault();
      this.initBrush();
      let touch = e.targetTouches[0];
      if (touch) {
        let brushPos = this.getBrushPos(touch.pageX, touch.pageY);
        this.drawDot(brushPos.x, brushPos.y);
      }
    },
    onmouseover: function (e) {
      this.initBrush();
      let brushPos = this.getBrushPos(e.clientX, e.clientY);
      let leftBut = this.detectLeftButton(e);
      if (leftBut == 1) {
        this.drawDot(brushPos.x, brushPos.y);
      }
    },

    drawDot: function (mouseX, mouseY) {
      this.ctx.beginPath();
      this.ctx.arc(mouseX, mouseY, this.brushReveal, 0, 2 * Math.PI, true);
      this.ctx.fillStyle = "#000";
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.fill();
    },
    getBrushPos: function (xRef, yRef) {
      let revealRect = this.canvas.getBoundingClientRect();
      return {
        x: Math.floor(
          ((xRef - revealRect.left) / (revealRect.right - revealRect.left)) *
            this.canvas.width
        ),
        y: Math.floor(
          ((yRef - revealRect.top) / (revealRect.bottom - revealRect.top)) *
            this.canvas.height
        ),
      };
    },

    initReveal: function () {
      const pi2 = Math.PI * 2;
      this.ctx.fillStyle = "#FFB33F";
      this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fill();
      console.log(this.canvas.width, this.canvas.height);
      const data = [
        { x: 600, y: 340, r: 180 },
        { x: 370, y: 670, r: 270 },
        { x: 1810, y: 996, r: 285 },
      ];
      this.ctx.beginPath();
      for (var i = 0; i < data.length; i++) {
        const p = data[i],
          x = p.x,
          y = p.y,
          r = p.r;
        this.ctx.moveTo(x + r, y);
        this.ctx.arc(x, y, r, 0, pi2);
      }
      this.ctx.closePath();
      this.ctx.fillStyle = "#000";
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.fill();
    },
  },
};
</script>

<style lang="scss" scoped>
.yellow {
  background-color: #ffb33f;
}
.root {
  position: relative;
  background-color: inherit;
  display: flex;
  justify-content: center;
  padding: 0;
  width: 100%;
  overflow: hidden;
}

.mask {
  background-image: url(../assets/component.png);
  background-position: top 32% right 0%;
  background-repeat: no-repeat;
  background-size: 147%;
  min-height: 996px;
  width: 100%;
  mask-image: url(../assets/mask.svg);
  mask-repeat: no-repeat;
  mask-size: 100%;
  @media (max-width: 1400px) {
    mask-image: url(../assets/mask1200.svg);
  }
  @media (max-width: 800px) {
    mask-image: url(../assets/mask900.svg);
  }
  @media (max-width: 600px) {
    background-image: none;
  }
}

.caption {
  font-size: 3.4rem;
  display: flex;
  z-index: 10;
  position: absolute;
  text-align: right;
  padding-left: 10vw;
  padding-right: 2vw;
  flex-direction: column;
  text-align: left;
  top: 60%;
  transform: translateY(-60%);
  width: 60%;
  @media (max-width: 600px) {
    width: 100%;
  }
}
.title {
  font-size: 4rem;
  letter-spacing: 7.4px;
  @media (max-width: 1100px) {
    font-size: 3rem;
  }
}
.description {
  font-size: 32px;
  padding-top: 2rem;
  font-size: 2.8rem;
  letter-spacing: 5.1px;
  color: #0b0b0b;
  max-width: 75%;
  @media (max-width: 1100px) {
    font-size: 1.5rem;
  }
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
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}

.btn {
  outline: 0;
  color: #ffb33f;
  border: 0;
  border-radius: 79px;
  font-size: 1.2rem;
  font-weight: 700;
  max-width: 350px;
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
    top: 20%;
    margin: 0 auto;
  }
}
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  .slider-items {
    position: relative;
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
    img {
      display: block;
      width: 100%;
      height: 1080px;
      object-fit: cover;
    }
  }
}
#canvas {
  background-size: cover;
  background-image: url("../assets/yellowBg.png");
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  cursor: crosshair;
  cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/circular-cursor.png) 53 53,
    crosshair;
}
</style>
