<template>
  <main class="content">
    <Aktuell :meldungen="meldungen.recent"  v-if="species.length>0"/>
    <section class="spezies">
      <div class="column" v-for="s in species" :key="s.id">
        <SpeziesMeldungen :meldungen="meldungen.bySpecies[species.indexOf(s)]" :species="s" />
      </div>
      <div class="column" v-if="species.length<=0">
        <SpeziesMeldungen />
      </div>
    </section>
    <SpeziesSuche />
  </main>
</template>

<script>
// @ is an alias to /src
import Aktuell from '@/components/Aktuell.vue'
import SpeziesSuche from '@/components/SpeziesSuche.vue'
import SpeziesMeldungen from '@/components/SpeziesMeldungen.vue'
import axios from 'axios'

export default {
  name: 'Meldungen',
  components: {
    Aktuell,
    SpeziesSuche,
    SpeziesMeldungen
  },
  data() {
    return {
      meldungen: {
        bySpecies: [],
        recent: [],
        jsonData : []
      },
      species: [],
      recentLength: 8
    }
  },
  watch: {
    $route() {
      this.getSpecies();
    }
  },
  mounted() {
    this.getSpecies();
  },
  methods: {
    getSpecies() {
      let q = this.getQueryParams();

      this.species = [];

      // q.forEach(p => {
      //   fetch("https://api.stage.beachexplorer.org/v2/species?q=" + p, {method:'GET', headers: this.header})
      //     .then(res => res.json)
      //     .then(data => {
      //       this.species.push(data[0]);

      //       fetch("http://api.beachexplorer.org/v1/determination/forSpecies/" + data[0] + "?_format=json&order=DESC", {method:'GET', headers: this.header})
      //         .then(res => res.json)
      //         .then(data => this.meldungen.bySpecies.push([data]))
      //         .catch(e => console.error(e));
      //     })
      //     .catch(e => console.error(e));
      // });
      q.forEach(p => {
        axios.get("https://api.stage.beachexplorer.org/v2/species?q=" + p, this.axiosOptions)
          .then(data => {
            this.species.push(data[0]);

            axios.get("http://api.beachexplorer.org/v1/determination/forSpecies/" + data[0] + "?_format=json&order=DESC", this.axiosOptions)
              .then(data => this.meldungen.bySpecies.push([data]))
              .catch(e => console.error(e));
          })
          .catch(e => console.error(e));
      });
      
      this.meldungen.recent = this.species.length > 0 ? this.stackRecent() : [];
    },

    stackRecent() {
      let stack = Array(this.recentLength).fill({findingDate: 0});

      for(const s of this.meldungen.bySpecies) {
        for(const m of s) {
          for(let i = 0; i < this.recentLength; i++) {
            if(Date.parse(m.findingDate) > Date.parse(stack[i].findingDate)) {
              let o = m;
              o.species = this.species[this.meldungen.bySpecies.indexOf(s)];
              stack.splice(i, 0, o);
              stack.pop();
              break;
            }
          }
        }
      }

      return stack;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/_mixins.scss";

.content {
  width: 100%;
  height: 100%;
  // width: 100vw;
  // height: 100vh;
  display: flex;
  flex-direction: column;
}

.spezies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px dotted var(--color-border);
  border-bottom: 1px dotted var(--color-border);
  flex-wrap: wrap;
  margin: 20px 0;

  @include media(tablet) {
    flex-direction: row;
    align-items: flex-start;

    .column {
      width: 300px;
    }
  }
}
</style>