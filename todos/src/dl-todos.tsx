import React from "react";
import ReactDOM from "react-dom";
// single-spa-react 用于创建使用 React 框架实现的微前端应用
import singleSpaReact from "single-spa-react";
// 用于渲染在页面中的根组件 就相当于传统React应用的App.js文件
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  // 渲染根组件
  rootComponent: Root,
   // 错误边界函数
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // 指定根组件的渲染位置
  domElementGetter: () => document.getElementById('myreact')
});

export const { bootstrap, mount, unmount } = lifecycles;
