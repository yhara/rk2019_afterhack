
//import { h, app } from "hyperapp"

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) =>
  h("div", {}, [
    h("button", { onclick: () => actions.down(1) }, "-"),
    h("button", { onclick: () => actions.up(1) }, "+"),
    h("ul", {},
      Array.from({length: state.count}, (v, k) => { 
        return h("li", {
          key: k,
          oncreate: () => console.log('oncreate', k),
          onupdate: () => console.log('onupdate', k),
        }, k)
      })),
  ])

app(state, actions, view, document.body)
