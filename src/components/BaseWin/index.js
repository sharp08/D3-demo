import Vue from 'vue'
import BaseWin from './BaseWin'

// const Win = Vue.extend(BaseWin)

let instance;
let instances = [];

export default {
  show(o) {
    instance = new Vue({
      render(h) {
        // return h(BaseWin, [
        //   h(o.top, {
        //     slot: "top"
        //   }),
        //   h("div", {
        //     slot: "mid"
        //   }, "222"),
        //   h("div", {
        //     slot: "btm"
        //   }, "333"),
        // ])
        return h(BaseWin, o.render(h))
      }
    })

    const component = instance.$mount()
    document.body.appendChild(component.$el);

    instances.push(instance.$el)
  },
  hide() { },
  destory() {
    document.body.removeChild(instance.$el);
  },
  destoryAll() {
    instances.forEach(item => {
      document.body.removeChild(item);
    })
  }
}