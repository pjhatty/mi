<template>
  <div id="app">

    <div class="logo pa3 pa4-ns">
      <img class="dib mr2-m mr2-l" id="logo-img" src="./assets/logo.png">
      <span class="dib serif tl-l tl-m tc-ns">
        <span class="f3 tc">Knights of</span>
        <br>
        <span class="f3">The Immaculata</span>
      </span>
    </div>

    <nav class="pa2 pa3-ns">
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/">Home</router-link>
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/about">About</router-link>
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/calendar">Calendar</router-link>
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/gallery">Gallery</router-link>
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/store">Store</router-link>
      <router-link class="link dim gray b pa2 f3 f6-ns dib center-ns mr5-l" to="/contact">Contact</router-link>
    </nav>
    <div class="view-bg vh-100 dt w-100 tc bg-navy white cover">
      <router-view/>
    </div>


  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 10px;
}
#logo-img {
  width: 90px;
  height: auto;
}

</style>
