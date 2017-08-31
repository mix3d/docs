<template lang="pug">
  form(
    method="POST"
    action="https://codepen.io/pen/define/"
    target="_blank"
    ref="form"
  )
    input(
      type="hidden"
      name="data"
      :value="value"
    )
</template>

<script>
  export default {
    data: () => ({
      title: 'Vuetify Example Pen',
      css_external: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons;https://unpkg.com/vuetify/dist/vuetify.min.css',
      js_external: 'https://unpkg.com/vue/dist/vue.js;https://unpkg.com/vuetify/dist/vuetify.min.js'
    }),

    props: ['pen'],

    computed: {
      script () {
        const replace = /(export default {|<script>|<\/script>|}([^}]*)$)/g
        return (this.pen.script || '').replace(replace, '').trim()
      },
      style () {
        return (this.pen.style || '').replace(/(<style>|<\/style>)/g, '').trim()
      },
      template () {
        let template = this.pen.template || ''
        template = template.replace('/static/', 'https://vuetifyjs.com/static/')

        return (template).replace(/(<template>|<\/template>([^<\/template>]*)$)/g, '').trim()
      },
      value () {

        const data = Object.assign({}, {
          html: `<div id="app">
  <v-app id="inspire">
    ${this.template}
  </v-app>
</div>`,
          js: `new Vue({
  el: '#app',
  ${this.script}
})`
        }, this.$data)

        return JSON.stringify(data)
      }
    },

    methods: {
      submit () {
        this.$el.submit()
      }
    }
  }
</script>
