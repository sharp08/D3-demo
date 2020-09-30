import Vue from 'vue'
import BaseWin from './BaseWin'

let instanceList = []; //  已创建的窗口实例
let visibleInstances = []; //  正在显示的窗口实例

const rtn = {
  // 显示窗口，有就显示，没有就创建
  show(o) {
    // 如果传入的是字符串，则认为是已经创建过的窗口，本次是显示
    if (typeof o === "string") {
      const idx = instanceList.findIndex(item => item.key === o)
      if (idx >= 0) {
        instanceList[idx].instance.$children[0].visible = true //  显示窗口
        // 存入显示的窗口队列（默认调用 show 就是显示）
        visibleInstances.push({
          key: o,
          instance: instanceList[idx].instance
        })
      } else {
        console.warn(`instanceList 中没有找到 key 为 ${o} 的窗口`)
      }
    }
    // 创建
    else if (Object.prototype.toString.call(o) === "[object Object]") {
      const instance = new Vue({
        render: h => h(BaseWin, o.render(h)),
      })
      const component = instance.$mount()
      document.body.appendChild(component.$el);

      instance.$children[0].key = o.key //  把 key 存放到窗口组件中
      instance.$children[0].position = o.position || ["center", "100px"]    //  默认的位置
      // 将窗口放到已创建的列表
      instanceList.push({
        key: o.key,
        instance
      })
      // 存入显示的窗口队列（默认调用 show 就是显示）
      visibleInstances.push({
        key: o.key,
        instance
      })
    }
    // 参数必须传
    else {
      console.warn("参数必须为 string 或 object")
    }
  },
  // 隐藏窗口，传 key 则隐藏 key 窗口，不传则隐藏最后一个弹出的窗口
  hide(key) {
    // 如果已有打开的窗口
    if (visibleInstances.length > 0) {
      // key 是字符串就隐藏一个窗口
      if (typeof key === "string") {
        const idx = visibleInstances.findIndex(item => item.key === key)
        if (idx >= 0) {
          visibleInstances[idx].instance.$children[0].visible = false //  隐藏窗口
          visibleInstances.splice(idx, 1) //  从可见窗口列表中移除这一项
        } else {
          console.warn(`visibleInstances 没有找到 key 为 ${key} 的窗口`)
        }
      }
      // key 是数组就隐藏多个
      else if (Array.isArray(key)) {
        key.forEach(str => {
          const idx = visibleInstances.findIndex(item => item.key === str)
          if (idx >= 0) {
            visibleInstances[idx].instance.$children[0].visible = false
            visibleInstances.splice(idx, 1)
          } else {
            console.warn(`visibleInstances 没有找到 key 为 ${str} 的窗口`)
          }
        })
      }
      // 隐藏最后一个弹出的窗口
      else {
        visibleInstances[visibleInstances.length - 1].instance.$children[0].visible = false
        visibleInstances.pop()
      }
    }
    // 没有打开的窗口
    else {
      console.warn("当前没有打开的窗口")
    }
  },
  // 销毁窗口，销毁时
  destory(key) {
    if (instanceList.length > 0) {
      // 销毁一个
      if (typeof key === "string") {
        // 删掉可见列表中的该实例
        const idx = visibleInstances.findIndex(item => item.key === key)
        if (idx >= 0) visibleInstances.splice(idx, 1)

        // 删掉实例列表中的该实例
        const idx2 = instanceList.findIndex(item => item.key === key)
        if (idx2 >= 0) {
          document.body.removeChild(instanceList[idx2].instance.$el);
          instanceList.splice(idx2, 1)
        } else {
          console.warn(`instanceList 没有找到 key 为 ${key} 的窗口`)
        }
      }
      // 销毁多个
      else if (Array.isArray(key)) {
        key.forEach(str => {
          // 删掉可见列表中的该实例
          const idx = visibleInstances.findIndex(item => item.key === str)
          if (idx >= 0) visibleInstances.splice(idx, 1)

          // 删掉实例列表中的该实例
          const idx2 = instanceList.findIndex(item => item.key === str)
          if (idx2 >= 0) {
            document.body.removeChild(instanceList[idx2].instance.$el);
            instanceList.splice(idx2, 1)
          } else {
            console.warn(`instanceList 没有找到 key 为 ${str} 的窗口`)
          }
        })
      }
      // 没传 key 时销毁最后一个窗口
      else {
        const temp = instanceList.pop()
        document.body.removeChild(temp.instance.$el);
        // 判断需要销毁的窗口是否在显示列表中，在就删掉
        const idx = visibleInstances.findIndex(item => item.key === temp.key)
        if (idx >= 0) visibleInstances.splice(idx, 1)
      }
      console.log(visibleInstances)
      console.log(instanceList)
    }
    // 
    else {
      console.warn("没有可供销毁的窗口")
    }
  },
  // 销毁全部窗口
  destoryAll() {
    if (instanceList.length > 0) {
      instanceList.forEach(item => {
        document.body.removeChild(item.instance.$el);
      })
      instanceList = []
      visibleInstances = []
    } else {
      console.warn("没有可供销毁的窗口")
    }
  }
}

export default rtn