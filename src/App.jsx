import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Basket from "./pages/Basket";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getProduct } from "./Redux/Actions/productActions";
const App = () => {
  const dispatch = useDispatch();

  axios.defaults.baseURL = "https://fakestoreapi.com";

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route />
        <Route path='/Basket' element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
