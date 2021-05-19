<template>
  <div class="yellow>">
    <div class="root bg" ref="root">
      <canvas id="canvas" width="1920" height="1080" ref="canvas"></canvas>
      <div class="main">
        <div class="caption">
          <h1>FRONT ROW SEATS</h1>
          <p>Experience live versions of your favourite songs.</p>
          <button class="btn">SEE DEMO</button>
        </div>
      </div>
      <button class="try-btn" @click="$router.push('/pricing').catch(() => {})">
        TRY IT NOW
      </button>
    </div>
  </div>
</template>

<script>
import bg from "../assets/yellowBg.png";
export default {
  name: "YellowScreen",
  components: {},
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
    window.addEventListener("resize", this.resizeCanvas, false);
    this.canvas.addEventListener("touchmove", this.ontouchmove, false);
    this.canvas.addEventListener("mousemove", this.onmouseover, false);
  },
  methods: {
    resizeCanvas: function () {
      this.canvas.width = window.innerWidth;
      this.initReveal();
    },
    initBrush: function () {
      this.brushReveal = 30;
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
      console.log(this.$refs.root);
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
      if (window.innerWidth > 775) {
        for (let i = 0; i < data.length; i++) {
          const p = data[i],
            x = p.x,
            y = p.y,
            r = p.r;
          this.ctx.moveTo(x + r, y);
          this.ctx.arc(x, y, r, 0, pi2);
        }
      } else {
        this.ctx.arc(300, 400, 215, 0, pi2);
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
  max-width: 1920px;
  margin: 0 auto;
  background-color: #ffb33f;
}
.bg {
  background-color: #ffb33f;
  margin-top: -1px;
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

.caption {
  position: absolute;
  top: 40%;
  right: 200px;
  max-width: 45%;
  transform: translate(0, -40%);
  @media (max-width: 1870px) {
    right: 100px;
  }
  @media (max-width: 1610px) {
    max-width: 35%;
    right: 20px;
  }
  @media (max-width: 1250px) {
    right: 40px;
    top: 80%;
    max-width: 100%;
    padding: 0 5rem;
  }
  @media (max-width: 770px) {
    right: 40px;
    top: 70%;
    max-width: 100%;
    padding: 0 5rem;
  }
  @media (max-width: 480px) {
    right: 0;
    top: 70%;
    max-width: 100%;
    padding: 0 1rem;
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
    color: #ffb33f;
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
.try-btn {
  cursor: pointer;
  position: absolute;
  padding: 1.3rem 4rem;
  top: 66px;
  right: 79px;
  outline: 0;
  color: #ffb33f;
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
  transition: all 5ms ease-in-out;
}

@keyframes mix {
  to {
    background-position: 50vw;
  }
}

#canvas {
  background-size: cover;
  overflow: hidden;
  background-image: url("../assets/yellowBg.png");
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  cursor: crosshair;
  transition: all 5ms ease-in-out;
  cursor: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/circular-cursor.png) 53 53,
    crosshair;
  @media (max-width: 770px) {
    background-size: 80%;
    background-position: bottom 73px right 448px;
  }
}
</style>
