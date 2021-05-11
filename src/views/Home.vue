<template>
  <div>
    <CursorCircle />
    <Cursor />
    <Slider />
    <RedScreen />
    <YelowScreen />
    <BlackScreen />
    <Footer />
  </div>
</template>

<script>
import CursorCircle from "@/components/CursorCircle.vue";
import Slider from "@/components/Slider.vue";
import RedScreen from "@/components/RedScreen.vue";
import YelowScreen from "@/components/YelowScreen.vue";
import BlackScreen from "@/components/BlackScreen.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FormRoute",
  components: {
    CursorCircle,
    Slider,
    RedScreen,
    YelowScreen,
    BlackScreen,
    Footer,
  },
};
</script>
