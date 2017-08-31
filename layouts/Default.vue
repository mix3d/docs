<template lang="pug">
  v-app(toolbar footer)
    main-navigation
    main-toolbar
    main
      v-container(fluid)
        transition(name="slide" mode="out-in")
          router-view
    main-footer
    //v-speed-dial(bottom right direction="top" fixed)
      v-btn(slot="activator" fab dark @click="toTop").red
        v-icon keyboard_arrow_up
</template>

<script>
  import MainNavigation from 'components/MainNavigation'
  import MainToolbar from 'components/MainToolbar'
  import MainFooter from 'components/MainFooter'

  export default {
    components: {
      MainNavigation,
      MainToolbar,
      MainFooter
    },

    methods: {
      toTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>