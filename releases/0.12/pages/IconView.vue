<template lang="pug">
  component-view(v-bind:doc="doc")
</template>

<script>
  export default {
    data () {
      return {
        doc: {
          title: 'Icons',
          component: 'icon',
          edit: 'IconView',
          desc: 'The <code>v-icon</code> component provides a large set of glyphs to provide context to various aspects of your application. Vuetify icons utilize Google\'s Material Icons font library. For a list of all available icons, visit the official <a href="https://material.io/icons/" target="_blank">Material Icons</a> page.',
          examples: [
            { header: 'Standard (small)', file: 'icons/1', desc: 'Icons come in two themes, light and dark.' },
            { header: 'Font awesome medium', file: 'icons/2', desc: 'Font awesome is also supported with the use of the <code>fa</code> prop. All text will be prefixed with <em>fa-</em> so that you can write your icons that same as Material icons.' },
            { header: 'Large', file: 'icons/3', desc: 'Large icons have an increased font size.' },
            { header: 'X-Large', file: 'icons/4', desc: 'X-large icons have even more increased font size!' },
            { header: 'Color', file: 'icons/5', desc: 'Using color helpers you can change the color of an icon from the standard dark and light themes.' },
            { header: 'Buttons', file: 'icons/6', desc: 'Icons can be used inside of buttons to add emphasis to the action.' }
          ],
          props: {
            'v-icon': {
              params: [
                [
                  'medium',
                  'Boolean',
                  'False',
                  'Medium size'
                ],
                [
                  'large',
                  'Boolean',
                  'False',
                  'Large size'
                ],
                [
                  'x-large',
                  'Boolean',
                  'False',
                  'Extra-Large size'
                ],
                [
                  'left',
                  'Boolean',
                  'False',
                  'Places icon on the left'
                ],
                [
                  'right',
                  'Boolean',
                  'False',
                  'Places icon on the right'
                ],
                [
                  'light',
                  'Boolean',
                  'False',
                  'Applies the light theme (default dark)'
                ]
              ]
            }
          }
        }
      }
    }
  }
</script>
