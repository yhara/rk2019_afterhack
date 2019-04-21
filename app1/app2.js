
//import { h, app } from "hyperapp"

const state = {
  className: 'x'
}

const actions = {
  toggle: () => state => ({ className: state.className === 'x' ? 'y' : 'x' })
}

const view = (state, actions) =>
  h("div", { class: state.className, onclick: () => actions.toggle() }, "test")

app(state, actions, view, document.body)
