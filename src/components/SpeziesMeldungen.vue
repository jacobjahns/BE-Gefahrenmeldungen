<template>
  <div class="speziesMeldungen">
    <div class="column-head">
      <h5 class="speziesMeldungen-name" v-if="this.species != undefined">{{ this.species.name }}</h5>
      <h5 class="speziesMeldungen-name" v-else>{{ this.noSpeciesMsg }}</h5>
      <a @click="rmQuery()" v-if="this.species != undefined">Entfernen</a>
    </div>
    <div class="column-body speziesMeldungen-ergebnisse">
      <div class="speziesMeldungen-ergebnis" v-for="m in this.meldungen" :key="m.id">
        <img :src="m.image" alt="Kein Bild" class="ergebnis-pic">
        <p class="ergebnis-time">{{ getDate(m.findingDate) }}</p>
        <a class="ergebnis-id" :href="'https://www.beachexplorer.org/funde/' + m.id">{{ m.id }}</a>
        <div class="ergebnis-loc">{{ Math.round(m.coordinates.longitude*1000)/1000 }} / {{ Math.round(m.coordinates.latitude*1000)/1000 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeziesMeldungen',
  props: {
    species: Object,
    meldungen: Array
  },
  data() {
    return {
      noSpeciesMsg: 'Keine Spezies ausgewählt'
    }
  },
  methods: {
    rmQuery() {
      console.log('this');console.log(this.meldungen);
      let arr = this.getQueryParams();
      arr.splice(arr.indexOf(this.species.slug), 1);
      this.$router.replace({query: {species: null}});
      this.$router.replace({query: {species: arr}});
    }
  }
}
</script>

<style lang="scss">
.speziesMeldungen {
  background-color: var(--color-secondary);
  border-radius: 10px;
  padding: 15px 15px;
  margin: 20px 0;
}
.column-head {
  margin-bottom: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);

  a {
    text-transform: uppercase;
    font-size: 80%;
  }
}
.speziesMeldungen-ergebnis {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
  padding: .5vh 0;
  border-bottom: 1px dotted var(--color-border);

  .ergebnis-pic {
    grid-row: 1 / -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
