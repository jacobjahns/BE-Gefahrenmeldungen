<template>
  <main class="luftballons">
    <section class="header">
      <h2 class="headline">Luftballons</h2>
      <p class="last-update">vor <span>{{ Math.floor(Date.now() - this.entries[0].findingDate / 86400000) }}</span> Tagen</p>
    </section>
    <section class="entries">
      <div class="entry" v-for="entry in entries" :key="entry.id">
        <h3 class="date">{{ getDate(entry.findingDate) }}</h3>
        <a :href="`https://www.beachexplorer.org/funde/${entry.id}`" class="id">{{ entry.id }}</a>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      entries: [],
      lastUpdate: 0,
      apiRequest: 'https://api.stage.beachexplorer.org/v2/determination/forSpecies/ospar-kategorie-49?_format=json&order=DESC',
      limitEntries: 20,
      reloadFrequency: 5000
    }
  },
  methods: {
    getTimePassed() {
      // returns time since last update in ms
      
      let t = Date.now() - this.entries[0].findingDate;
      t = Math.floor(t / 86400000);
      return t;
    },
    getEntries() {
      // (re)loads the entries in the page

      axios.get(this.apiRequest, this.axiosOptions)
        .then(res => this.entries = res.data.slice(0, this.limitEntries))
        .catch(err => console.error(err));
    }
  },
  mounted() {
    this.getEntries();
    setInterval(this.getEntries, this.reloadFrequency)
  }
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
@import '../style/_mixins.scss';


.luftballons {
  position: absolute;
  width: 100%; // change to simulate other environments
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  .headline {
    font-weight: bold;
  }

  .last-update {
    font-weight: normal;

    span {
      font-weight: bold;
    }
  }
}

.entries {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .entry {
    width: 100%;
    margin: 2px 0;
    padding: 4px 4px;
    border-collapse: collapse;
    border-top: 1px dotted var(--color-border);
    border-bottom: 1px dotted var(--color-border);

    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    .date {
      font-weight: normal;
    }
  }
}
</style>