import Navbar from "./Components/Navbar-Components/Navbar"
import './App.css'
import Footer from "./Components/Footer-Components/Footer"
import ItemPage from "./Components/ItemPage-Components/ItemPage";
import UserLogContainer from "./Components/UserLogContainer";
import { Routes, Route } from "react-router-dom";
import AccessoriesListPage from "./Components/ProductsListPage/AccessoriesListPage";
import SneakersListPage from "./Components/ProductsListPage/SneakersListPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/sneakers" element={<SneakersListPage />} />
        <Route path="/accessories" element={<AccessoriesListPage />} />
        <Route path="/user-log" element={<UserLogContainer />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
