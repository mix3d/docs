<template lang="pug">
  v-app(toolbar footer)
    main-navigation
    main-toolbar
    main
      v-container(fluid)
        transition(name="slide" mode="out-in")
          router-view
    main-footer
    v-fab-transition
      v-btn(
        fab
        dark
        fixed
        bottom
        right
        class="red"
        v-scroll="onScroll"
        v-show="fab"
        @click="toTop"
      )
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

    data: () => ({
      fab: false
    }),

    mounted () {
      this.$vuetify.load(this.onScroll)
    },

    methods: {
      onScroll () {
        if (typeof window === 'undefined') return

        const top = window.pageYOffset ||
          document.documentElement.offsetTop ||
          0

        this.fab = top > 300
      },
      toTop () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>