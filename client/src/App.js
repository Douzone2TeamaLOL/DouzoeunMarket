import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Outlet/Header";
import Footer from "./components/Outlet/Footer";
import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import Transaction from "./components/Payment/Transaction";
import { useSelector } from "react-redux";
import MyPage from "./components/Mypage/MyPage";

function App() {
  //불러올떄 이줄 추가 하시면돼요~!
  const getAuthInfo = useSelector((state) => state);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/pay" element={<Transaction />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
