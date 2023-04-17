import Navbar from "./Components/Navbar-Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer-Components/Footer";
import ItemPage from "./Components/ItemPage-Components/ItemPage";
import UserLogContainer from "./Components/UserLogContainer";
import { Routes, Route } from "react-router-dom";
import AccessoriesListPage from "./Components/ShowItems/AccessoriesListPage";
import { LoggedProvider } from "./Components/Context/LoggedContext";
import Cart from "./Components/Cart/Cart";
import WishlistPage from "./Components/WishlistPage/WishlistPage";
import Error404 from "./Components/Error404/Error404";
import ItemListPage from "./Components/ShowItems/ItemListPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import OrderPage from "./Components/OrderPage/OrderPage";
import Orders from "./Components/Orders/Orders";
import OrderCompleted from "./Components/OrderPage/OrderCompleted";
import OrderFailed from "./Components/OrderPage/OrderFailed";
import "@stripe/stripe-js";
import Homepage from "./Components/Homepage/Homepage";
import { OrderProcessProvider } from "./Components/Context/OrderProcessContext";
import ForgotPassword from "./Components/Login/ForgotPassword";
import ResetPassword from "./Components/Login/ResetPassword";
import { AppProvider } from "./Components/Context/AppContext";
import { UserProvider } from "./Components/Context/UserContext";
import OrderPaid from "./Components/OrderPage/OrderPaid";

function App() {
  return (
    <div className="App">
      <LoggedProvider>
        <UserProvider>
          <OrderProcessProvider>
            <AppProvider>
              <Navbar />
              <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/sneakers" element={<ItemListPage />} />
                <Route path="/accessories" element={<AccessoriesListPage />} />

                <Route path="/user-log" element={<UserLogContainer />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route
                  path="/resetPassword/:resetToken"
                  element={<ResetPassword />}
                />
                <Route path="/item" element={<ItemPage />} />
                <Route path="/products/:itemId" element={<ItemPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/order-completed" element={<OrderCompleted />} />
                <Route path="/order-failed" element={<OrderFailed />} />
                <Route path="/order-finished" element={<OrderPaid />} />
              </Routes>
              <Footer />
            </AppProvider>
          </OrderProcessProvider>
        </UserProvider>
      </LoggedProvider>
    </div>
  );
}

export default App;
