<template lang="pug">
  v-toolbar(:class="[$store.state.currentColor]" fixed dark)#main-toolbar
    v-toolbar-side-icon(@click.stop="toggleSidebar")

    transition(name="slide" mode="out-in")
      v-toolbar-title(
        v-html="$store.state.h1"
        style="position: relative"
        v-bind:key="$store.state.h1"
        class="flexbox"
      )
    v-spacer
</template>

<script>
  export default {
    name: 'toolbar',

    methods: {
      toggleSidebar () {
        this.$store.commit('vuetify/SIDEBAR', !this.$store.state.sidebar)
      }
    }
  }
</script>
