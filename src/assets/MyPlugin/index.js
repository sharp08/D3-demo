import Functions from '@pingzi_1227/tool-box'

export default {
  install: (Vue, options) => {
    for (let [name, value] of Object.entries(Functions)) {
      window[name] = value
    }
  }
}