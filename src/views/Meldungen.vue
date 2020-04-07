<template>
  <main class="content">
    <Aktuell />
    <section class="spezies"></section>
    <SpeziesSuche />
  </main>
</template>

<script>
// @ is an alias to /src
import Aktuell from '@/components/Aktuell.vue'
import SpeziesSuche from '@/components/SpeziesSuche.vue'

export default {
  name: 'Meldungen',
  components: {
    Aktuell,
    SpeziesSuche
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
</style>