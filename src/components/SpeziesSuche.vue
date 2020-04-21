<template>
  <div class="speziesSuche">
    <div class="row-head">
      <input type="input" class="speziesSuche-suche" placeholder="Neue Spezies" v-model="searchInput" @input="requestSpecies">
    </div>
    <div class="row-body speziesSuche-ergebnisse">
      <div class="speziesSuche-ergebnis" v-for="s in this.species" :key="s.id">
        <a @click="addQuery(s.slug)">{{s.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeziesSuche',
  props: {
  },
  data() {
    return {
      lastRequest: 0,
      searchInput: "",
      species: []
    }
  },
  methods: {
    requestSpecies() {
      fetch("https://www.stage.beachexplorer.org/arten/typeahead?q=" + this.searchInput)
        .then(res => res.json)
        .then(data => {
          this.species = data;
        })
      ;
    },
    addQuery(q) {
      let arr = this.getQueryParams();
      if(!arr.includes(q)) {
        arr.push(q);
        this.$router.replace({query: {species: null}});
        this.$router.replace({query: {species: arr}});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  cursor: pointer;
  background-color: var(--color-secondary);
  padding: 2px;
  border-radius: 4px;
  margin: 0 4px;

  &:hover {
    filter: brightness(92%);
  }
  &:active {
    filter: brightness(85%);
  }
}
</style>
