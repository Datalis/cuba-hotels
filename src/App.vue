<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="less">
  @font-face {
    font-family: "Montserrat-Black";
    src: url("assets/fonts/Montserrat-Black.ttf") format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Bold";
    src: url("assets/fonts/Montserrat-Bold.ttf") format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Light";
    src: url("assets/fonts/Montserrat-Light.ttf") format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Regular";
    src: url("assets/fonts/Montserrat-Regular.ttf") format("opentype");
  }

  @font-face {
    font-family: "Montserrat-Thin";
    src: url("assets/fonts/Montserrat-Thin.ttf") format("opentype");
  }

  @font-face {
    font-family: "Montserrat-ExtraBold";
    src: url("assets/fonts/Montserrat-ExtraBold.otf") format("opentype");
  }

  :root {
    --primary-color: #dd9526;
    --secundary-color: rgba(0, 0, 0, 0.76);
  }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
