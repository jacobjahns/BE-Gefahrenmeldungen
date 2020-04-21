<template>
  <div class="aktuell">
    <div class="row-head">
      <h5 class="aktuell-headline">Aktuell</h5>
    </div>
    <div class="row-body">
      <div class="aktuell-meldung" v-for="m in meldungen" :key="m.id">
        <p class="ergebnis-species">{{ m.species.name }}</p>
        <img :src="m.image" alt="Kein Bild" class="ergebnis-pic">
        <a class="ergebnis-time" :href="'https://www.beachexplorer.org/funde/' + m.id">{{ getDate(m.findingDate) }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aktuell',
  props: {
    meldungen: Array
  },
  methods: {
    getDate(i) {
      let d = new Date(i);
      return (d.getDate() > 9 ? d.getDate() : "0" + d.getDate()) + "." + (d.getMonth()+1) + "." + d.getFullYear();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aktuell-meldung {
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
}
</style>
