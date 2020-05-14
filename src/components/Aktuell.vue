<template>
  <div class="aktuell">
    <div class="row-head">
      <h5 class="aktuell-headline">Aktuell</h5>
    </div>
    <div class="row-body">
      <div class="aktuell-meldung" v-for="m in meldungen" :key="m.id">
        <p class="ergebnis-species">{{ m.species.name }}</p>
        <a class="ergebnis-time" :href="'https://www.beachexplorer.org/funde/' + m.id">{{ getDate(m.findingDate) }}</a>
        <!-- <img :src="m.image" alt="Kein Bild" class="ergebnis-pic"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aktuell',
  props: {
    meldungen: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/_variables.scss";
@import "../style/_mixins.scss";

.aktuell {
  margin-top: 15px;
}

.row-body {
  max-width: 300px;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-template-columns: repeat(2, minmax(80px, 1fr));
  gap: 10px 5%;
  overflow: hidden;
  margin: 0 auto;
  background-color: var(--color-secondary);
  padding: 15px;
  border-radius: 10px;

  @include media(tablet) {
    grid-template-columns: repeat(4, minmax(80px, 1fr));
    max-width: 720px;
  }

  @include media(desktop) {
    display: flex;
    max-width: 90%;
  }
}

.aktuell-meldung {
  background-color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: #fff;

  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 10vh;
  }

  a {
    margin: 5px 0;
    color: #fff;
  }

  // $max: 4;
  // @for $i from 0 to $max {
  //   &:nth-child(#{$i + 1}) {
  //     background-color: lighten($color-primary, $i * 5%);

  //     @if $i < 3 {
  //       color: var(--color-background);

  //       a {
  //         color: #fff;
  //       }
  //     }
  //   }
  //   &:nth-last-child(#{$i + 1}) {
  //     background-color: lighten($color-primary, 5% + $max * 5% * 2 + $i * -5%);
  //   }
  // }

  @include media(tablet) {
    max-width: 160px;
  }

  @include media(desktop) {
    flex: 1;
    margin: 0 5px;
  }
}
</style>
