<template>
  <div class="container">
    <CursorCircle />
    <Slider/>
    <RedScreen/>
    <YellowScreen/>
    <BlackScreen/>
    <Footer/>
  </div>
</template>

<script>
import CursorCircle from "@/components/CursorCircle.vue";
import Slider from "@/components/Slider.vue";
import RedScreen from "@/components/RedScreen.vue";
import YellowScreen from "@/components/YellowScreen.vue";
import BlackScreen from "@/components/BlackScreen.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FormRoute",
  components: {
    CursorCircle,
    Slider,
    RedScreen,
    YellowScreen,
    BlackScreen,
    Footer,
  },
};
</script>
<style lang="scss">
.container {  
  width: 1920px;
  max-width: 100%; 
  margin: 0 auto;
  display: flex; 
  flex-direction: column; 
  justify-content: center;   
}
</style>
