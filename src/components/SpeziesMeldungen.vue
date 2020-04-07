<template>
  <div class="speziesMeldungen">
    <div class="column-head">
      <h1 class="speziesMeldungen-name">{{ this.name }}</h1>
    </div>
    <div class="column-body speziesMeldungen-ergebnisse">
      <div class="speziesMeldungen-ergebnis" v-for="m in this.meldungen" :key="m.id">
        <img :src="m.image" alt="Kein Bild" class="ergebnis-pic">
        <h2 class="ergebnis-time">{{ m.findingDate }}</h2>
        <a class="ergebnis-id">{{ m.id }}</a>
        <div class="ergebnis-loc">{{ m.coordinates.longitude }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeziesMeldungen',
  props: {
    name: String,
    meldungen: Array
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.speziesMeldungen-ergebnis {
  display: grid;
  grid-template-rows: 2fr 1.5fr 1.5fr;
  grid-template-columns: 1fr 5fr;

  .ergebnis-pic {
    grid-row: 1 / -1;
  }
}
</style>
