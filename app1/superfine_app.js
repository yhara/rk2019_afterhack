
const view = count =>
  h("div", {}, [
    h("button", { onclick: () => render(count - 1) }, "-"),
    h("button", { onclick: () => render(count + 1) }, "+"),
    h("ul", {},
      Array.from({length: count}, (v, k) => { 
        return h("li", {
          key: k,
          oncreate: () => console.log('oncreate', k),
          onupdate: () => console.log('onupdate', k),
        }, k)
      })),
  ])

const app = (view, container, node) => state => {
  node = patch(node, view(state), container)
}

const render = app(view, document.body)

render(0)
