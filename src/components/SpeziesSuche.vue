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
      species: [{"id":4228,"name":"Aalmutter","scienceName":"Zoarces viviparus","slug":"zoarces-viviparus"},{"id":6335,"name":"Ei Trottellumme","scienceName":"Uria aalge (ovum)","slug":"uria-aalge-ovum"},{"id":6294,"name":"Fl\u00fcgel Trottellumme","scienceName":"Uria aalge (ala)","slug":"uria-aalge-ala"},{"id":6295,"name":"Fl\u00fcgel Trottellumme Jungvogel","scienceName":"Uria aalge (ala iuvenilis)","slug":"uria-aalge-ala-iuvenilis"},{"id":4202,"name":"Flussaal","scienceName":"Anguilla anguilla","slug":"anguilla-anguilla"},{"id":5504,"name":"Glasaal","scienceName":"Anguilla anguilla (juvenile)","slug":"anguilla-anguilla-juvenile"},{"id":4206,"name":"Gro\u00dfer Sandaal","scienceName":"Hyperoplus lanceolatus","slug":"hyperoplus-lanceolatus"},{"id":4208,"name":"Kleiner Sandaal","scienceName":"Ammodytes tobianus","slug":"ammodytes-tobianus"},{"id":4203,"name":"Meeraal","scienceName":"Conger conger","slug":"conger-conger"},{"id":4210,"name":"Nacktsandaal","scienceName":"Gymnammodytes semisquamatus","slug":"gymnammodytes-semisquamatus"},{"id":6500,"name":"Sch\u00e4del Trottellumme","scienceName":"Uria aalge (cranium)","slug":"uria-aalge-cranium"},{"id":5450,"name":"Trottellumme","scienceName":"Uria aalge","slug":"uria-aalge"},{"id":4207,"name":"Ungefleckter Sandaal","scienceName":"Hyperoplus immaculatus","slug":"hyperoplus-immaculatus"}]
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
