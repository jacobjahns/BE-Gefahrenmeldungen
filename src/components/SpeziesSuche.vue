<template>
  <div class="speziesSuche">
    <div class="column-head">
      <input type="input" class="speziesSuche-suche" placeholder="Neue Spezies" @focus="requestSpecies" v-model="searchInput" @input="searchSpecies">
    </div>
    <div class="column-body speziesSuche-ergebnisse">

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
      data: [],
      searchInput: ""
    }
  },
  methods: {
    requestSpecies() {
      let now = Date.now();
      if(now - this.lastRequest > 60000) {
        console.log('PLACEHOLDER: ' + now);
        // fetch("https://api.beachexplorer.org/v1/species")
        //   .then(res => res.json)
        //   .then(data => {
        //     this.data = this.getSpecies(data);
        //   });
        this.lastRequest = now;
      }
    },
    getSpecies(d) {
      console.log(d);
    },
    searchSpecies() {
      console.log(this.searchInput);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
