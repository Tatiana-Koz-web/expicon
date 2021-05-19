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

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  background-color: #191919;
  font-size: 16px;
  color: #fff;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}


</style>
