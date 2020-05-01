<template>
  <main class="content">
    <Aktuell :meldungen="meldungen.recent" />
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

export default {
  name: 'Meldungen',
  components: {
    Aktuell,
    SpeziesSuche,
    SpeziesMeldungen
  },
  data() {
    return {
      // meldungen: [], später benutzen
      meldungen: {
        bySpecies: [],
        recent: [],
        jsonData : [
          [{"id":29318,"image":"uploads/a7243e909a7c0f09da0897792038eba9.jpeg","findingDate":"2019-10-17","coordinates":{"longitude":8.5841775298119,"latitude":54.319153797031}},{"id":28954,"image":"uploads/c6249907f870fec767e6b8708986e958.jpeg","findingDate":"2019-09-16","coordinates":{"longitude":8.2953697282114,"latitude":54.903519567583}},{"id":28719,"image":"uploads/07d378e98302c09f89a5506d36d271ba.jpeg","findingDate":"2019-09-02","coordinates":{"longitude":8.5805193215318,"latitude":54.3176178802}},{"id":25187,"image":"uploads/b8b3e21de60beb7e15befad5ab8229c3.jpeg","findingDate":"2018-09-15","coordinates":{"longitude":8.6058630744461,"latitude":54.382205526674}},{"id":22943,"image":"uploads/6e0c041365d6d943161b3186391dc1df.jpeg","findingDate":"2018-05-07","coordinates":{"longitude":8.6131310462952,"latitude":54.386487563407}},{"id":14857,"image":"uploads/08d1e264a64863842ea390256f9de95e.jpeg","findingDate":"2016-11-01","coordinates":{"longitude":8.3125337865281,"latitude":54.934653919241}},{"id":13869,"image":"uploads/47896b5697219e222c212320e21d87a6.jpeg","findingDate":"2016-09-08","coordinates":{"longitude":8.5954368487081,"latitude":54.326317431456}},{"id":11987,"image":"uploads/488182ac5dd3fa4cddfe98b4c5132a1b.jpeg","findingDate":"2016-07-15","coordinates":{"longitude":8.655418753624,"latitude":54.394114291481}},{"id":10802,"image":"uploads/71c9b27f511ab70a86362547b46b286b.jpeg","findingDate":"2016-05-06","coordinates":{"longitude":8.3166734408665,"latitude":54.941945630177}},{"id":9414,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2016-02-16","coordinates":{"longitude":8.4355580806732,"latitude":53.961208768416}},{"id":7691,"image":"uploads/17e66f1dc285b01ef9957c9f977c5a95.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.3102645874024,"latitude":54.680262492451}},{"id":7687,"image":"uploads/f3e1d6979c5d6c9a8119102c91d7cf63.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.301887512207,"latitude":54.660130801206}},{"id":7491,"image":"uploads/48f8df5511404c5f0d0f26bb7e99ab28.jpeg","findingDate":"2015-11-04","coordinates":{"longitude":8.3469400405884,"latitude":54.707337171871}},{"id":1233,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2014-12-03","coordinates":{"longitude":8.8412761513609,"latitude":54.272070184399}},{"id":3744,"image":"uploads/950ff3ae6e8b027447960080438be289.jpeg","findingDate":"2006-08-24","coordinates":{"longitude":8.599044084549,"latitude":54.326497610007}}],
          [{"id":2931835453,"image":"uploads/a7243e909a7c0f09da0897792038eba9.jpeg","findingDate":"2019-10-18","coordinates":{"longitude":8.5841775298119,"latitude":54.319153797031}},{"id":28954235,"image":"uploads/c6249907f870fec767e6b8708986e958.jpeg","findingDate":"2019-09-16","coordinates":{"longitude":8.2953697282114,"latitude":54.903519567583}},{"id":28715649,"image":"uploads/07d378e98302c09f89a5506d36d271ba.jpeg","findingDate":"2019-09-02","coordinates":{"longitude":8.5805193215318,"latitude":54.3176178802}},{"id":251845647,"image":"uploads/b8b3e21de60beb7e15befad5ab8229c3.jpeg","findingDate":"2018-09-15","coordinates":{"longitude":8.6058630744461,"latitude":54.382205526674}},{"id":22943,"image":"uploads/6e0c041365d6d943161b3186391dc1df.jpeg","findingDate":"2018-05-07","coordinates":{"longitude":8.6131310462952,"latitude":54.386487563407}},{"id":14857,"image":"uploads/08d1e264a64863842ea390256f9de95e.jpeg","findingDate":"2016-11-01","coordinates":{"longitude":8.3125337865281,"latitude":54.934653919241}},{"id":13869,"image":"uploads/47896b5697219e222c212320e21d87a6.jpeg","findingDate":"2016-09-08","coordinates":{"longitude":8.5954368487081,"latitude":54.326317431456}},{"id":11987,"image":"uploads/488182ac5dd3fa4cddfe98b4c5132a1b.jpeg","findingDate":"2016-07-15","coordinates":{"longitude":8.655418753624,"latitude":54.394114291481}},{"id":10802,"image":"uploads/71c9b27f511ab70a86362547b46b286b.jpeg","findingDate":"2016-05-06","coordinates":{"longitude":8.3166734408665,"latitude":54.941945630177}},{"id":9414,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2016-02-16","coordinates":{"longitude":8.4355580806732,"latitude":53.961208768416}},{"id":7691,"image":"uploads/17e66f1dc285b01ef9957c9f977c5a95.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.3102645874024,"latitude":54.680262492451}},{"id":7687,"image":"uploads/f3e1d6979c5d6c9a8119102c91d7cf63.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.301887512207,"latitude":54.660130801206}},{"id":7491,"image":"uploads/48f8df5511404c5f0d0f26bb7e99ab28.jpeg","findingDate":"2015-11-04","coordinates":{"longitude":8.3469400405884,"latitude":54.707337171871}},{"id":1233,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2014-12-03","coordinates":{"longitude":8.8412761513609,"latitude":54.272070184399}},{"id":3744,"image":"uploads/950ff3ae6e8b027447960080438be289.jpeg","findingDate":"2006-08-24","coordinates":{"longitude":8.599044084549,"latitude":54.326497610007}}]
        ]
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
      let arr = [{"id":4228,"name":"Aalmutter","scienceName":"Zoarces viviparus","slug":"zoarces-viviparus"},{"id":6335,"name":"Ei Trottellumme","scienceName":"Uria aalge (ovum)","slug":"uria-aalge-ovum"},{"id":6294,"name":"Fl\u00fcgel Trottellumme","scienceName":"Uria aalge (ala)","slug":"uria-aalge-ala"},{"id":6295,"name":"Fl\u00fcgel Trottellumme Jungvogel","scienceName":"Uria aalge (ala iuvenilis)","slug":"uria-aalge-ala-iuvenilis"},{"id":4202,"name":"Flussaal","scienceName":"Anguilla anguilla","slug":"anguilla-anguilla"},{"id":5504,"name":"Glasaal","scienceName":"Anguilla anguilla (juvenile)","slug":"anguilla-anguilla-juvenile"},{"id":4206,"name":"Gro\u00dfer Sandaal","scienceName":"Hyperoplus lanceolatus","slug":"hyperoplus-lanceolatus"},{"id":4208,"name":"Kleiner Sandaal","scienceName":"Ammodytes tobianus","slug":"ammodytes-tobianus"},{"id":4203,"name":"Meeraal","scienceName":"Conger conger","slug":"conger-conger"},{"id":4210,"name":"Nacktsandaal","scienceName":"Gymnammodytes semisquamatus","slug":"gymnammodytes-semisquamatus"},{"id":6500,"name":"Sch\u00e4del Trottellumme","scienceName":"Uria aalge (cranium)","slug":"uria-aalge-cranium"},{"id":5450,"name":"Trottellumme","scienceName":"Uria aalge","slug":"uria-aalge"},{"id":4207,"name":"Ungefleckter Sandaal","scienceName":"Hyperoplus immaculatus","slug":"hyperoplus-immaculatus"}];
      this.species = arr.filter(elem => q.indexOf(elem.slug) >= 0);
      console.log(q);

      // this.species = [];

      // q.forEach(p => {
      //   fetch("https://www.stage.beachexplorer.org/arten/typeahead?q=" + p)
      //     .then(res => res.json)
      //     .then(data => {
      //       this.species.push(data[0]);

      //       fetch("http://api.beachexplorer.org/v1/determination/forSpecies/" + data[0] + "?_format=json&order=DESC")
      //         .then(res => res.json)
      //         .then(data => this.meldungen.bySpecies.push([data]))
      //         .catch(e => console.error(e));
      //     })
      //     .catch(e => console.error(e));
      // });
      
      // this.meldungen.recent = this.species.length > 0 ? this.stackRecent() : [];

      this.processJSONData(); // zum testen
    },
    requestData() {
      this.species.forEach(s => {
        fetch("http://api.beachexplorer.org/v1/determination/forSpecies/" + s + "?_format=json&order=DESC")
          .then(res => res.json)
          .then(data => this.meldungen.jsonData.push([data]))
          .catch(e => console.error(e));
      });
      this.processJSONData();
    },

    processJSONData() { // nicht mehr benötigt
      this.meldungen.bySpecies = this.meldungen.jsonData;
      this.meldungen.bySpecies.forEach(s => {
        s.sort((a, b) => Date.parse(b.findingDate) - Date.parse(a.findingDate));
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