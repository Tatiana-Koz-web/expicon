<template>
  <div class="cursor" ref="customCursorCircle">
    <span class="cursor-text" ref="cursorText">{{ text }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    cursorFunc(e) {
      let mouseCursor = this.$refs.customCursorCircle;
      let mouseCursorText = this.$refs.cursorText;
      let texts = document.querySelectorAll("a,span,h1,h2,button");
      mouseCursor.style.top = e.pageY + 10 + "px";
      mouseCursor.style.left = e.pageX + 10 + "px";
      texts.forEach((el) => {
        el.addEventListener("mouseover", () => {
          if (el.localName === "h1") {
            mouseCursorText.innerText = "See more...";
          }
          if (el.localName === "button") {
            mouseCursorText.innerText = "CLICK ME";
          }
        });
        el.addEventListener("mouseleave", () => {
          mouseCursorText.innerText = "";
        });
      });
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.cursorFunc);
  },
};
</script>

<style lang="scss">
.cursor {
  width: 8rem;
  height: 8rem;  
  border: 2px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: -100px;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  transition-property: background, transform;
  transform-origin: 200% -100%;
  z-index: 35;
  backdrop-filter: brightness(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    display: none;
  }
}
.grow {
  transform: scale(2);
}
</style>
