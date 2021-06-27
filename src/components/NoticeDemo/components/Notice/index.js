import Notice from './Notice.vue'
import Vue from 'vue'

// 给 Notice 添加一个创建组件实例的方法，可以动态编译自身模版并挂载
Notice.getInstance = props => {
  // 创建一个Vue实例
  const instance = new Vue({
    //渲染函数，用户渲染置顶模版为虚拟DOM
    render(h) {
      return h(Notice, { props })
    }
  })

  instance.$mount() //执行挂载 ，若不置顶选择器，则模版将被渲染为文档之外的元素
  document.body.appendChild(instance.$el);

  //获取 Notice 实例
  const notice = instance.$children[0];
  return notice;
}

// 设计一个单例模式，全局范围唯一创建一个 Notice 实例，意味着 body 中最多只有一个 msg 的 dom 容器
let msgInstance = null;
function getInstance() {
  msgInstance = msgInstance || Notice.getInstance();
  return msgInstance;
}

// 暴露接口
export default {
  info({ duration = 2, content = '' }) {
    getInstance().add({
      content,
      duration
    });
  }
}