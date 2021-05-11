<template>
  <div class="cursor">
    <span class="cursor-text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name:"CursorCircle",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    cursorFunc(e) {
      let mouseCursor = document.querySelector(".cursor");
      let mouseCursorText = document.querySelector(".cursor-text");
      let texts = document.querySelectorAll("a,span,h1,h2,h3,h4,h5,h6,img");
      mouseCursor.style.top = e.pageY + 10 + "px";
      mouseCursor.style.left = e.pageX + 10 + "px";
      texts.forEach((el) => {
        el.addEventListener("mouseover", () => {
          mouseCursor.classList.add("grow");
          mouseCursorText.innerText = el.localName;
        });
        el.addEventListener("mouseleave", () => {
          mouseCursor.classList.remove("grow");
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
  width: 4rem;  
  height: 4rem;
  border: 1px solid #fff;  
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