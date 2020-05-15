<template>
  <main class="content">
    <Aktuell :meldungen="meldungen.recent"  v-if="species.length>0" />
    <section class="spezies">
      <div class="column" v-for="s in species" :key="s.id">
        <SpeziesMeldungen :meldungen="meldungen.bySpecies[species.indexOf(s)]" :species="s" />
      </div>
      <div class="column" v-if="species.length<=0">
        <SpeziesMeldungen />
      </div>
        <!-- <a @click="log()">log</a> -->
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
        recent   : [],
        dummy    : []
      },
      species: [],
      recentLength: 8
    }
  },
  watch: {
    $route() {
      this.loadData();
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      let q = this.getQueryParams();

      let dummyRecent = [];

      if(q.length != 0) {
        if(this.species.length <= 0) {
          this.species = new Array(q.length).fill({});
        }
        
        q.forEach((p, i) => {
          axios.get("https://api.stage.beachexplorer.org/v2/species?q=" + p, this.axiosOptions)
            .then(s => {
              this.species[i] = s.data[0];

              axios.get("https://api.stage.beachexplorer.org/v2/determination/forSpecies/" + s.data[0].slug + "?_format=json&order=DESC", this.axiosOptions)
                .then(r => {
                  this.meldungen.bySpecies[i] = r.data.slice(0, 20);

                  let dummyBySpecies = this.meldungen.bySpecies;
                  this.meldungen.bySpecies = dummyBySpecies;

                  dummyRecent = dummyRecent.concat(r.data.map(x => x = {...x, species: s.data[0]}).slice(0, this.recentLength));

                  if(dummyRecent.length > this.recentLength) {
                    dummyRecent.sort((a, b) => Date.parse(b.findingDate) - Date.parse(a.findingDate));
                    dummyRecent = dummyRecent.slice(0, this.recentLength);
                  }

                  this.meldungen.recent = dummyRecent;
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
        });
      }
    }
    
    ,
    log() {console.log(this.meldungen.bySpecies[0])}
  }
}
</script>

<style lang="scss" scoped>
@import "../style/_mixins.scss";
@import "../style/_variables.scss";

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