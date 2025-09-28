import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App.jsx"; // 수정
// import reportWebVitals from "./reportWebVitals";
import "./styles/globals.css"; // 추가

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 우선은 필요없는거 같아서 주석처리함

// index.js 파일 이름을 main.jsx 로 변경
// index.html 에서 경로도 src/main.jsx 로 수정
