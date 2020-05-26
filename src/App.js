/*
 * @Author: stephenHe
 * @Date: 2020-05-26 15:03:05
 * @LastEditors: stephenHe
 * @LastEditTime: 2020-05-26 15:16:29
 * @Description: 根组件
 * @FilePath: /cloud-music/App.js
 */

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
