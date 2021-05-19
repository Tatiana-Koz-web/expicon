<template>
  <div class="container-fluid">
    <CustomCursor />
    <Head />
    <Slider />
    <RedScreen />
    <YellowScreen />
    <BlackScreen />
    <Footer />
  </div>
</template>

<script>
import CustomCursor from "@/components/CustomCursor.vue";
import Slider from "@/components/Slider.vue";
import Head from "@/components/Head.vue";
import RedScreen from "@/components/RedScreen.vue";
import YellowScreen from "@/components/YellowScreen.vue";
import BlackScreen from "@/components/BlackScreen.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "FormRoute",
  components: {
    Head,
    CustomCursor,
    Slider,
    RedScreen,
    YellowScreen,
    BlackScreen,
    Footer,
  },
};
</script>
<style lang="scss">
.root {
  position: relative;
  background-color: inherit; 
  margin:0 auto;  
  padding-top: 0;
  padding: 9rem;    
  max-width: 1920px;  
  min-height: 1080px;
  transition: all 5ms ease-in-out;   
  @media (max-width: 1200px) {
    max-width: 1170px;
  }  
  @media (max-width: 768px) {
    max-width: 750px;
    padding: 0;   
  }
}
.container-fluid {
  overflow:hidden;
  max-width: 100%;  
}
</style>
