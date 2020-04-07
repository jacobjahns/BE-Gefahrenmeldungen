<template>
  <main class="content">
    <Aktuell />
    <section class="spezies">
      <div class="column" v-for="s in species" :key="s.id">
        <SpeziesMeldungen :meldungen="meldungen[species.indexOf(s)]" :name="s" />
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
      meldungen: [
        [{"id":3744,"image":"uploads/950ff3ae6e8b027447960080438be289.jpeg","findingDate":"2006-08-24","coordinates":{"longitude":8.599044084549,"latitude":54.326497610007}},{"id":1233,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2014-12-03","coordinates":{"longitude":8.8412761513609,"latitude":54.272070184399}},{"id":7491,"image":"uploads/48f8df5511404c5f0d0f26bb7e99ab28.jpeg","findingDate":"2015-11-04","coordinates":{"longitude":8.3469400405884,"latitude":54.707337171871}},{"id":7687,"image":"uploads/f3e1d6979c5d6c9a8119102c91d7cf63.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.301887512207,"latitude":54.660130801206}},{"id":7691,"image":"uploads/17e66f1dc285b01ef9957c9f977c5a95.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.3102645874024,"latitude":54.680262492451}},{"id":9414,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2016-02-16","coordinates":{"longitude":8.4355580806732,"latitude":53.961208768416}},{"id":10802,"image":"uploads/71c9b27f511ab70a86362547b46b286b.jpeg","findingDate":"2016-05-06","coordinates":{"longitude":8.3166734408665,"latitude":54.941945630177}},{"id":11987,"image":"uploads/488182ac5dd3fa4cddfe98b4c5132a1b.jpeg","findingDate":"2016-07-15","coordinates":{"longitude":8.655418753624,"latitude":54.394114291481}},{"id":13869,"image":"uploads/47896b5697219e222c212320e21d87a6.jpeg","findingDate":"2016-09-08","coordinates":{"longitude":8.5954368487081,"latitude":54.326317431456}},{"id":14857,"image":"uploads/08d1e264a64863842ea390256f9de95e.jpeg","findingDate":"2016-11-01","coordinates":{"longitude":8.3125337865281,"latitude":54.934653919241}},{"id":22943,"image":"uploads/6e0c041365d6d943161b3186391dc1df.jpeg","findingDate":"2018-05-07","coordinates":{"longitude":8.6131310462952,"latitude":54.386487563407}},{"id":25187,"image":"uploads/b8b3e21de60beb7e15befad5ab8229c3.jpeg","findingDate":"2018-09-15","coordinates":{"longitude":8.6058630744461,"latitude":54.382205526674}},{"id":28719,"image":"uploads/07d378e98302c09f89a5506d36d271ba.jpeg","findingDate":"2019-09-02","coordinates":{"longitude":8.5805193215318,"latitude":54.3176178802}},{"id":28954,"image":"uploads/c6249907f870fec767e6b8708986e958.jpeg","findingDate":"2019-09-16","coordinates":{"longitude":8.2953697282114,"latitude":54.903519567583}},{"id":29318,"image":"uploads/a7243e909a7c0f09da0897792038eba9.jpeg","findingDate":"2019-10-17","coordinates":{"longitude":8.5841775298119,"latitude":54.319153797031}}],
        [{"id":37326547344,"image":"uploads/950ff3ae6e8b027447960080438be289.jpeg","findingDate":"2006-08-24","coordinates":{"longitude":8.599044084549,"latitude":54.326497610007}},{"id":1233,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2014-12-03","coordinates":{"longitude":8.8412761513609,"latitude":54.272070184399}},{"id":7491,"image":"uploads/48f8df5511404c5f0d0f26bb7e99ab28.jpeg","findingDate":"2015-11-04","coordinates":{"longitude":8.3469400405884,"latitude":54.707337171871}},{"id":7687,"image":"uploads/f3e1d6979c5d6c9a8119102c91d7cf63.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.301887512207,"latitude":54.660130801206}},{"id":7691,"image":"uploads/17e66f1dc285b01ef9957c9f977c5a95.jpeg","findingDate":"2015-11-08","coordinates":{"longitude":8.3102645874024,"latitude":54.680262492451}},{"id":9414,"image":"uploads/Species/7c1318568e97e98a6000b1b0bb790381.jpeg","findingDate":"2016-02-16","coordinates":{"longitude":8.4355580806732,"latitude":53.961208768416}},{"id":10802,"image":"uploads/71c9b27f511ab70a86362547b46b286b.jpeg","findingDate":"2016-05-06","coordinates":{"longitude":8.3166734408665,"latitude":54.941945630177}},{"id":11987,"image":"uploads/488182ac5dd3fa4cddfe98b4c5132a1b.jpeg","findingDate":"2016-07-15","coordinates":{"longitude":8.655418753624,"latitude":54.394114291481}},{"id":13869,"image":"uploads/47896b5697219e222c212320e21d87a6.jpeg","findingDate":"2016-09-08","coordinates":{"longitude":8.5954368487081,"latitude":54.326317431456}},{"id":14857,"image":"uploads/08d1e264a64863842ea390256f9de95e.jpeg","findingDate":"2016-11-01","coordinates":{"longitude":8.3125337865281,"latitude":54.934653919241}},{"id":22943,"image":"uploads/6e0c041365d6d943161b3186391dc1df.jpeg","findingDate":"2018-05-07","coordinates":{"longitude":8.6131310462952,"latitude":54.386487563407}},{"id":25187,"image":"uploads/b8b3e21de60beb7e15befad5ab8229c3.jpeg","findingDate":"2018-09-15","coordinates":{"longitude":8.6058630744461,"latitude":54.382205526674}},{"id":28719,"image":"uploads/07d378e98302c09f89a5506d36d271ba.jpeg","findingDate":"2019-09-02","coordinates":{"longitude":8.5805193215318,"latitude":54.3176178802}},{"id":28954,"image":"uploads/c6249907f870fec767e6b8708986e958.jpeg","findingDate":"2019-09-16","coordinates":{"longitude":8.2953697282114,"latitude":54.903519567583}},{"id":29318,"image":"uploads/a7243e909a7c0f09da0897792038eba9.jpeg","findingDate":"2019-10-17","coordinates":{"longitude":8.5841775298119,"latitude":54.319153797031}}],
        []
      ],
      species: []
    }
  },
  watch: {
    $route() {
      this.getQueryParams();
    }
  },
  mounted() {
    this.getQueryParams();
  },
  methods: {
    getQueryParams() {
      let q = this.$route.query.species;
      if(typeof q == "string") {
        this.species.push(q);
      } else if(Array.isArray(q)) {
        this.species = q;
      }
      this.requestData();
    },
    requestData() {
      this.species.forEach(s => {
        fetch("http://api.beachexplorer.org/v1/determination/forSpecies/" + s)
          .then(res => res.json)
          .then(data => this.meldungen.push([data]))
          .catch(e => console.error(e));
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  // width: 100%; später ändern
  // height: 100%;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1.4fr 4fr 1fr;
}

.spezies {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}
</style>