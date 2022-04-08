import React from "react";
// 引入路由相关组件
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
// 引入组件
import Home from './pages/home';
import About from './pages/about';
export default function Root(props) {
  // return <section>{props.name} is mounted! && 拉勾大前端</section>;
  return (
    // 使用路由组件，设计基础路由路径
    <BrowserRouter basename="/todos">
      <div>{props.name}</div>
      {/* 设置点击链接，跳转路由 */}
      <div>
        <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link>
      </div>
​
      {/* 路由展示 */}
      <Routes>
        <Route path="/home" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About/>}>
        </Route>
        {/* 路由重定向 */}
        <Route path="*" element={<Navigate to="/home" />} > 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}