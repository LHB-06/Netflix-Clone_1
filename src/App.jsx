import React from "react";
import { BrowserRouter } from "react-router-dom"; // 추가
// AppRoutes.jsx 안에서 BrowserRouter 을 사용할 경우 Header/Footer
// 가 아루터 밖에 있어서 Error 가 날 수 있음
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
