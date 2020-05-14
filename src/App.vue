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
@import "./style/_variables.scss";
@import "./style/_mixins.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --color-primary: #{$color-primary};
  --color-secondary: #{$color-secondary};
  --color-background: #{$color-background};
  --color-text: #{$color-text};
  --color-link: #{$color-link};
  --color-border: #{$color-border};

  font-size: 16px;
  font-family: 'Cabin', sans-serif;
}
:root, body {
  width: 100%;
  height: 100%;

  color: var(--color-text);
  background-color: var(--color-background);
}


%column-shared {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.column {
  @extend %column-shared;
  margin: 0 16px;
}
.column-body {
  @extend %column-shared;
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
  font-size: 1.1rem;
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
