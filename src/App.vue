<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
:root {
  --color-primary: #085b7e;
  --color-secondary: #f9f8f5;
  --color-background: #eae3d9;
  --color-text: #085c7e;

  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
:root, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}


#app {
}
</style>
