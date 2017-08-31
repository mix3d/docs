import Vue from 'vue'
import Router from 'vue-router'

const meta = require('./meta.json')
const release = process.env.RELEASE

// Route helper function for lazy loading
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: () => import(
      /* webpackChunkName: "routes" */
      /* webpackMode: "lazy-once" */
      `../pages/${view}View.vue`
    )
  }
}

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    base: release ? `/releases/${release}` : __dirname,
    mode: release ? 'hash' : 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      route('/', 'Home'),
      route('/vuetify/quick-start', 'QuickStart'),
      route('/vuetify/why-vuetify', 'Why'),
      route('/vuetify/frequently-asked-questions', 'Faq'),
      route('/vuetify/sponsors-and-backers', 'Sponsors'),
      route('/vuetify/contributing', 'Contributing'),
      route('/layout/pre-defined', 'Layouts'),
      route('/layout/grid', 'Grid'),
      route('/layout/spacing', 'Spacing'),
      route('/layout/alignment', 'Alignment'),
      route('/layout/display', 'Display'),
      route('/layout/elevation', 'Elevation'),
      route('/layout/sandbox', 'Sandbox'),
      route('/style/colors', 'Colors'),
      route('/style/theme', 'Theme'),
      route('/style/typography', 'Typography'),
      route('/style/content', 'Content'),
      route('/motion/transitions', 'Transitions'),
      route('/components/alerts', 'Alerts'),
      route('/components/breadcrumbs', 'Breadcrumbs'),
      route('/components/bottom-navigation', 'BottomNavigation'),
      route('/components/buttons', 'Buttons'),
      route('/components/floating-action-buttons', 'Fabs'),
      route('/components/cards', 'Cards'),
      route('/components/carousels', 'Carousel'),
      route('/components/chips', 'Chips'),
      route('/components/data-tables', 'Datatables'),
      route('/components/dialogs', 'Dialogs'),
      route('/components/dividers', 'Divider'),
      route('/components/expansion-panels', 'ExpansionPanel'),
      route('/components/footer', 'Footer'),
      route('/components/grid-lists', 'GridList'),
      route('/components/icons', 'Icon'),
      route('/components/lists', 'Lists'),
      route('/components/menus', 'Menus'),
      route('/components/navigation-drawers', 'NavigationDrawer'),
      route('/components/pagination', 'Pagination'),
      route('/components/parallax', 'Parallax'),
      route('/components/pickers', 'Pickers'),
      route('/components/progress', 'Progress'),
      route('/components/selects', 'Select'),
      route('/components/selection-controls', 'SelectionControls'),
      route('/components/sliders', 'Slider'),
      route('/components/snackbars', 'Snackbar'),
      route('/components/steppers', 'Steppers'),
      route('/components/subheaders', 'Subheader'),
      route('/components/tabs', 'Tabs'),
      route('/components/text-fields', 'TextFields'),
      route('/components/toolbars', 'Toolbars'),
      route('/directives/badges', 'Badges'),
      route('/directives/resizing', 'Resize'),
      route('/directives/ripples', 'Ripples'),
      route('/directives/scrolling', 'Scroll'),
      route('/directives/tooltips', 'Tooltips'),
      route('/directives/touch-support', 'Touch'),
      route('/guides/server-side-rendering', 'SSR'),
      // Global redirect for 404
      { path: '*', redirect: '/' }
    ]
  })

  router.beforeEach((to, from, next) => {
    if (typeof ga !== 'undefined' && process.env.NODE_ENV !== 'development') {
      ga('set', 'page', to.path)
      ga('send', 'pageview')
    }
    next()
  })

  return router
}
