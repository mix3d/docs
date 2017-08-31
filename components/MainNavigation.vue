<template lang="pug">
  v-navigation-drawer(
    v-model="isActive"
    persistent
    :mini-variant.sync="mini"
    dark
    enable-resize-watcher
  )
    v-toolbar(flat).transparent
      v-list.pa-0.vuetify
        v-list-tile(avatar tag="div")
          v-list-tile-avatar
            router-link(to="/")
              img(src="/static/v.png" v-bind:style="filter")
          v-list-tile-content
            v-list-tile-title Vuetify
            v-list-tile-sub-title Branch: {{ $store.state.release }}
          v-list-tile-action
            v-btn(icon dark v-on:click.stop="mini = !mini")
              v-icon chevron_left
    v-divider
    v-card(flat dark).py-2.your-logo-here
      v-layout(fill-height)
        v-flex.text-xs-center
          div
            em Your Logo Here
          v-btn(
            round
            href="https://patreon.com/vuetify"
            target="_blank"
            rel="noopener"
            small
            dark
            primary
          ).elevation-0 Find out how
    v-list(dense)
      template(v-for="item in items")
        v-list-group(v-if="item.items" v-bind:group="item.group")
          v-list-tile(slot="item" ripple)
            v-list-tile-action
              v-icon(dark) {{ item.action }}
            v-list-tile-content
              v-list-tile-title {{ item.title }}
            v-list-tile-action
              v-icon(dark) keyboard_arrow_down
          v-list-tile(
            v-for="subItem in item.items" v-bind:key="subItem.title"
            v-bind="{ \
              to: !subItem.target ? subItem.href : null, \
              href: subItem.target && subItem.href \
            }"
            ripple
            v-bind:disabled="subItem.disabled"
            v-bind:target="subItem.target"
          )
            v-list-tile-content
              v-list-tile-title {{ subItem.title }}
            v-list-tile-action(v-if="subItem.action")
              v-icon(dark :class="[subItem.actionClass || 'success--text']") {{ subItem.action }}
        v-subheader(v-else-if="item.header" dark) {{ item.header }}
        v-divider(v-else-if="item.divider")
        v-list-tile(
          v-bind="{ \
            to: !item.target ? item.href : null, \
            href: item.target && item.href \
          }"
          ripple
          v-bind:disabled="item.disabled"
          v-bind:target="item.target"
          rel="noopener"
          v-else
        )
          v-list-tile-action
            v-icon(dark) {{ item.action }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
          v-list-tile-action(v-if="item.subAction")
            v-icon(dark class="success--text") {{ item.subAction }}
          v-chip(
            v-else-if="item.chip"
            label
            small
            class="caption blue lighten-2 white--text mx-0"
          ) {{ item.chip }}
</template>

<script>
  export default {
    data () {
      return {
        mini: false,
        items: [
          { header: 'Core documentation' },
          {
            title: 'Vuetify',
            action: 'apps',
            group: 'vuetify',
            items: [
              { href: '/vuetify/quick-start', title: 'Quick start' },
              { href: '/vuetify/why-vuetify', title: 'Why Vuetify?' },
              { href: '/vuetify/frequently-asked-questions', title: 'Frequently asked questions' },
              { href: '/vuetify/sponsors-and-backers', title: 'Sponsors and backers' },
              { href: '/vuetify/contributing', title: 'Contributing' }
            ]
          },
          {
            title: 'Layout',
            action: 'devices',
            group: 'layout',
            items: [
              { href: '/layout/pre-defined', title: 'Pre-defined', action: 'star', actionClass: 'white--text' },
              { href: '/layout/grid', title: 'Grid' },
              { href: '/layout/spacing', title: 'Spacing' },
              { href: '/layout/alignment', title: 'Alignment' },
              { href: '/layout/display', title: 'Display' },
              { href: '/layout/elevation', title: 'Elevation' },
              { href: '/layout/sandbox', title: 'Sandbox' }
            ]
          },
          {
            title: 'Style',
            action: 'style',
            group: 'style',
            items: [
              { href: '/style/colors', title: 'Colors' },
              { href: '/style/theme', title: 'Theme' },
              { href: '/style/typography', title: 'Typography' },
              { href: '/style/content', title: 'Content' }
            ]
          },
          {
            title: 'Motion',
            action: 'slow_motion_video',
            group: 'motion',
            items: [
              { href: '/motion/transitions', title: 'Transitions' }
            ]
          },
          {
            title: 'Components',
            action: 'widgets',
            group: '/components',
            items: [
              { href: '/components/alerts', title: 'Alerts' },
              { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
              { href: '/components/bottom-navigation', title: 'Bottom navigation' },
              { href: '/components/buttons', title: 'Buttons' },
              { href: '/components/floating-action-buttons', title: 'Buttons: Floating Action Buttons' },
              { href: '/components/cards', title: 'Cards' },
              { href: '/components/carousels', title: 'Carousel' },
              { href: '/components/chips', title: 'Chips' },
              { href: '/components/data-tables', title: 'Data tables' },
              { href: '/components/dialogs', title: 'Dialogs' },
              { href: '/components/dividers', title: 'Dividers' },
              { href: '/components/expansion-panels', title: 'Expansion panels' },
              { href: '/components/footer', title: 'Footer' },
              { href: '/components/grid-lists', title: 'Grid Lists' },
              { href: '/components/icons', title: 'Icons' },
              { href: '/components/lists', title: 'Lists' },
              { href: '/components/menus', title: 'Menus' },
              { href: '/components/navigation-drawers', title: 'Navigation drawers' },
              { href: '/components/pagination', title: 'Pagination' },
              { href: '/components/parallax', title: 'Parallax' },
              { href: '/components/pickers', title: 'Pickers' },
              { href: '/components/progress', title: 'Progress & activity' },
              { href: '/components/selects', title: 'Selects' },
              { href: '/components/selection-controls', title: 'Selection controls' },
              { href: '/components/sliders', title: 'Sliders' },
              { href: '/components/snackbars', title: 'Snackbars & toasts' },
              { href: '/components/steppers', title: 'Steppers' },
              { href: '/components/subheaders', title: 'Subheaders' },
              { href: '/components/tabs', title: 'Tabs' },
              { href: '/components/text-fields', title: 'Text fields' },
              { href: '/components/toolbars', title: 'Toolbars' }
            ]
          },
          {
            title: 'Directives',
            action: 'polymer',
            group: '/directives',
            items: [
              { href: '/directives/badges', title: 'Badges' },
              { href: '/directives/resizing', title: 'Resizing' },
              { href: '/directives/ripples', title: 'Ripples' },
              { href: '/directives/scrolling', title: 'Scrolling' },
              { href: '/directives/tooltips', title: 'Tooltips' },
              { href: '/directives/touch-support', title: 'Touch Support' }
            ]
          },
          {
            href: 'https://vuetify.threadless.com',
            title: 'Shop',
            target: '_blank',
            action: 'shopping_cart',
            chip: 'NEW'
          },
          { divider: true },
          { header: 'Additional resources' },
          {
            title: 'Ecosystem',
            action: 'public',
            items: [
              {
                href: 'https://vuejobs.com/?ref=vuetify',
                target: '_blank',
                title: 'Jobs',
                action: 'whatshot'
              },
              {
                href: 'https://chat.vuetifyjs.com',
                target: '_blank',
                title: 'Community'
              }
            ]
          },
          {
            title: 'Guides',
            action: 'developer_mode',
            group: '/guides',
            items: [
              {
                href: '/guides/server-side-rendering',
                title: 'Server Side Rendering'
              }
            ]
          },
          {
            title: 'Examples',
            action: 'web',
            items: [
              {
                href: 'https://github.com/nuxt/nuxt.js/tree/master/examples/with-vuetify',
                target: '_blank',
                title: 'NUXT'
              }
            ]
          },
          // { title: 'Optimization', action: 'flash_on', disabled: true },
          // { title: 'Deployment', action: 'important_devices', disabled: true }
        ]
      }
    },

    computed: {
      filter () {
        const color = this.$store.state.currentColor
        let hue = 0

        if (color === 'purple') {
          hue = 420
        } else if (color === 'darken-3 pink') {
          hue = 480
        } else if (color === 'indigo') {
          hue = 370
        } else if (color === 'cyan') {
          hue = 337
        } else if (color === 'teal') {
          hue = 315
        }

        return {
          filter: `hue-rotate(${hue}deg)`
        }
      },

      isActive: {
        get () {
          return this.$store.state.sidebar
        },
        set (val) {
          this.$store.commit('vuetify/SIDEBAR', val)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .vuetify
    .router-link-active
      display: flex
      align-items: center

    .list__tile__avatar img
      border-radius: 0 !important
  
  .navigation-drawer--mini-variant .your-logo-here
    display: none
</style>
