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
* {
  margin: 0;
  padding: 0;
}
:root {
  --color-primary: #085b7e;
  --color-secondary: #f9f8f5;
  --color-background: #eae3d9;
  --color-text: #085c7e;
  --color-link: darken(#085c7e, 10%);
  --color-border: #7b7b7b;

  font-size: 16px;
  font-family: 'Cabin', sans-serif;
}
:root, body {
  width: 100%;
  height: 100%;

  color: var(--color-text);
  background-color: var(--color-background);
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.column-body {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.row-head {
  text-align: center;
  margin-bottom: 10px;
}
.row-body {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
h5 {
  font-size: 1.4375rem;
  font-weight: normal;
}
p {
  font-size: 1rem;
  font-weight: bold;
}
a {
  font-size: .875rem;
  font-weight: normal;
  color: var(--color-link);
  cursor: default;

  &:active {
    opacity: .9;
  }
}
</style>
