import { Notify } from './notify'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// export default Notify

const defaultOptions = {
  type: 'base',
  showPopup: false,
  msg: '',
  color: undefined,
  background: undefined,
  duration: 3000,
  className: '',
  onClosed: null,
  onClick: null,
  onOpened: null,
  textTimer: null,
  unmount: null,
}

let idsMap: string[] = []
let optsMap: any[] = []
//   const clearNotify = (id?: string) => {
//     if (id) {
//       const container = document.getElementById(id);
//       optsMap = optsMap.filter((item) => item.id !== id);
//       idsMap = idsMap.filter((item) => item !== id);
//       if (container) {
//         document.body.removeChild(container);
//       }
//     } else {
//       idsMap.forEach((item) => {
//         const container = document.getElementById(item);
//         if (container) {
//           document.body.removeChild(container);
//         }
//       });
//       optsMap = [];
//       idsMap = [];
//     }
//   };

//   const updateNotify = (opts: any) => {
//     const container = document.getElementById(opts.id);
//     if (container) {
//       const currentOpt = optsMap.find((item) => item.id === opts.id);
//       if (currentOpt) {
//         opts = { ...defaultOptions, ...currentOpt, ...opts };
//       } else {
//         opts = { ...defaultOptions, ...opts };
//       }
//       const instance: any = createVNode(Notify, opts);
//       render(instance, container);
//       return instance.component.ctx;
//     }
//   };
console.log(222, Notify)
const render = ReactDOM.render
const mountNotify = (opts: any) => {
  console.log(222, Notify)
  // opts.unmount = clearNotify;
  let _id
  if (opts.id) {
    _id = opts.id
    //   if (idsMap.find((item) => item === opts.id)) {
    //     return updateNotify(opts);
    //   }
  } else {
    _id = new Date().getTime() + ''
  }
  opts = { ...defaultOptions, ...opts }
  opts.id = _id
  idsMap.push(opts.id)
  optsMap.push(opts)
  const container = document.createElement('div')
  container.id = opts.id
  // document.body.appendChild(container);

  let _toastTime: any
  let delDom = () => {
    ReactDOM.unmountComponentAtNode(container)
    document.body.removeChild(container)
    clearTimeout(_toastTime)
    _toastTime = null
  }
  // 当 duration 为 -1 时，显示伪不自动关闭
  if (opts.duration !== -1) _toastTime = setTimeout(delDom, opts.duration + 300) // +300 为离开动画所需要的时间
  render(
    React.createElement(Notify, {
      ...opts,

      // notice: {
      //     content: content,
      //     type: type
      // },
      // onClose: onClose,
      // duration: duration
    }),
    container
  )
  // const instance: any = createVNode(Notify, opts);
  // render(instance, container);
  // let called = false
  document.body.appendChild(container)

  // setTimeout(() => {
  //   instance.showPopup = true;
  // }, 0);
  // return instance.component.ctx;
}

const errorMsg = (msg: string) => {
  if (!msg) {
    console.warn('[NutUI Notify]: msg不能为空')
    return
  }
}

export default {
  text(msg: string, opts = {}) {
    errorMsg(msg)
    return mountNotify({ msg, ...opts })
  },
  primary(msg: string, opts = {}) {
    errorMsg(msg)
    return mountNotify({ msg, type: 'primary', ...opts })
  },
  success(msg: string, opts = {}) {
    errorMsg(msg)
    return mountNotify({ msg, type: 'success', ...opts })
  },
  danger(msg: string, opts = {}) {
    errorMsg(msg)
    return mountNotify({ msg, type: 'danger', ...opts })
  },
  warn(msg: string, opts = {}) {
    errorMsg(msg)
    return mountNotify({ msg, type: 'warning', ...opts })
  },
  hide() {
    //   clearNotify();
  },
  // install(app: App): void {
  //   app.config.globalProperties.$notify = NotifyFunction;
  // }
}

// export default NotifyFunction;
// export { Notify}
