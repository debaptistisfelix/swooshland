import Navbar from "./Components/Navbar-Components/Navbar"
import './App.css'
import Footer from "./Components/Footer-Components/Footer"
import ItemPage from "./Components/ItemPage-Components/ItemPage";
import UserLogContainer from "./Components/UserLogContainer";
import { Routes, Route } from "react-router-dom";
import AccessoriesListPage from "./Components/ProductsListPage/AccessoriesListPage";
import SneakersListPage from "./Components/ProductsListPage/SneakersListPage";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import { LoggedProvider } from "./Components/Context/LoggedContext";



function App() {
  return (
    <div className="App">
      <LoggedProvider>
        <Navbar />
        <Routes>
          <Route path="/sneakers" element={<SneakersListPage />} />
          <Route path="/accessories" element={<AccessoriesListPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/user-log" element={<UserLogContainer />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/sneakers/:itemId" element={<ItemPage path="sneakers" />} />
          <Route path="/accessories/:itemId" element={<ItemPage path="accessories" />} />
        </Routes>
        <Footer />
      </LoggedProvider>
    </div>
  )
}

export default App
