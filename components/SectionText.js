export default {
  functional: true,

  render (h, { data, children }) {
    data.staticClass = (`section-text ${data.staticClass || ''}`).trim()

    return h('div', data, children)
  }
}
