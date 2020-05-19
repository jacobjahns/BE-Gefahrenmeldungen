<template>
<div class="preview-page"><!-- delete for production -->
<div class="preview-container"><!-- delete for production -->
  <main class="luftballons">
    <section class="header">
      <h2 class="headline">Luftballons</h2>
      <p class="last-entry">zuletzt vor <span>{{ Math.floor( getTimePassed(new Date(this.entries[0].findingDate)) / 86400000) }}</span> Tagen</p>
    </section>
    <section class="entries">
      <div class="entry" v-for="entry in entries" :key="entry.id">
        <h3 class="date">{{ getDate(entry.findingDate) }}</h3>
        <a :href="`https://www.beachexplorer.org/funde/${entry.id}`" class="id">{{ entry.id }}</a>
      </div>
    </section>
  </main>
</div><!-- delete for production -->
</div><!-- delete for production -->
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      entries: [{findingDate:0}],
      lastUpdate: 0,
      apiRequest: 'https://api.stage.beachexplorer.org/v2/determination/forSpecies/ospar-kategorie-49?_format=json&order=DESC',
      limitEntries: 20,
      reloadFrequency: 5000
    }
  },
  methods: {
    getTimePassed(timestamp) {
      // returns time since last update in ms
      
      try {
        return Date.now() - timestamp;
      } catch(err) {
        return 0;
      }
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


// main app styling
.luftballons {
  position: absolute;
  width: 100%; // change to simulate other environments
  height: 100%;

  padding: 2px 4px;
  background-color: var(--color-background);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.header {
  margin: 2px 0;
  padding: 0 0 2px;
  border-bottom: 1px solid var(--color-border);

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

  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-background);
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 30px;
    border: none;
  }
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) var(--color-background);

  .entry {
    width: 100%;
    margin: 2px 0;
    padding: 4px 4px;

    border-collapse: collapse;
    border-top: 1px dotted var(--color-border);
    border-bottom: 1px dotted var(--color-border);
    transition: all .2s;

    &:hover {
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
      background-color: darken($color-background, 5%);
    }

    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    .date {
      font-weight: normal;
    }
  }
}


// preview styling
.preview-page {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .preview-container {
    position: absolute;
    width: 360px;
    height: 60%;
    top: 20px;
    right: 20px;
  }
}
</style>