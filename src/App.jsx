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
import { UserProvider } from "./Components/Context/UserContext";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <div className="App">
      <UserProvider>
        <LoggedProvider>
          <Navbar />
          <Routes>
            <Route path="/sneakers" element={<SneakersListPage />} />
            <Route path="/accessories" element={<AccessoriesListPage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/user-log" element={<UserLogContainer />} />
            <Route path="/item" element={<ItemPage />} />
            <Route path="/products/:itemId" element={<ItemPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </LoggedProvider>
      </UserProvider>

    </div>
  )
}

export default App
