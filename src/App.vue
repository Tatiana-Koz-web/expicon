<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap');
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0 ;
  margin: 0;
}

html,
body {
  background-color: #191919;
  
}
#app {
  font-family: Helvetica,'Merriweather Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;  
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;  
  @media (max-width: 1920px) {
    max-width: 1600px;
  }
  @media (max-width: 1600px) {
    max-width: 1300px;
  }
  @media (max-width: 1300px) {
    max-width: 1200px;
  }
  @media (max-width: 960px) {
    max-width: 100%;
  }
  @keyframes mix {
  to {
    background-position: 50vw;
  }
}
}
</style>
