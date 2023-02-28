import Navbar from "./Components/Navbar-Components/Navbar"
import './App.css'
import Footer from "./Components/Footer-Components/Footer"
import ItemPage from "./Components/ItemPage-Components/ItemPage";
import UserLogContainer from "./Components/UserLogContainer";
import { Routes, Route } from "react-router-dom";
import ItemListPage from "./Components/ShowItems/ItemListPage";

const sneakersPageContent = {
  pageTitle: "SNEAKERS",
  filterTitle: "SNEAKER MODELS",
  filtercategs: ["ALL", "NIKE AIR FORCE 1", "NIKE AIR JORDAN 1 MID", "NIKE AIR JORDAN 1 LOW", "PUMA", "FILA", "ADIDAS"],
  items: [
    { model: "NIKE AIR FORCE 1", name: "DOODLES", imgSrc: "/list/doodles.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "DRAGON V2", imgSrc: "/list/dragonv2.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "DRAGON V1", imgSrc: "/list/dragonv1.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "HEAVEN & HELL", imgSrc: "/list/heaven.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "KRAKEN 1994", imgSrc: "/list/kraken1994.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "L.A. KRAKEN", imgSrc: "/list/krakenla.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "LEO KAWAI", imgSrc: "/list/kawai.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "LEOPARD", imgSrc: "/list/leo.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "PURPLE DRIP", imgSrc: "/list/purple.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "SKY CAMU", imgSrc: "/list/sky.jpg", price: "189.90" },
    { model: "NIKE AIR FORCE 1", name: "JOLLY", imgSrc: "/list/jolly.jpg", price: "189.90" },

    { model: "JORDAN 1 MID", name: "PINK DIOR", imgSrc: "/list/dior.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "LEMON", imgSrc: "/list/lemon.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "OG-ORANGE", imgSrc: "/list/og.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF RAGE", imgSrc: "/list/ira.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF PRIDE", imgSrc: "/list/superbia.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "BREEZE", imgSrc: "/list/breeze.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SUNDAY", imgSrc: "/list/sunday.jpg", price: "249.90" },
    { model: "JORDAN 1 MID", name: "SIN OF LUST", imgSrc: "/list/lust.jpg", price: "249.90" },

    { model: "JORDAN 1 LOW", name: "EAZY", imgSrc: "/list/eazy.jpg", price: "249.90" },
    { model: "JORDAN 1 LOW", name: "MIAMI", imgSrc: "/list/miami.jpg", price: "249.90" },

    { model: "ADIDAS STAN SMITH", name: "SPIDEY", imgSrc: "/list/spidey.jpg", price: "159.90" },
    { model: "ADIDAS STAN SMITH", name: "MINIONS", imgSrc: "/list/minions.jpg", price: "159.90" },

    { model: "FILA RAPTOR", name: "SAFARI", imgSrc: "/list/fila.jpg", price: "189.90" },
    { model: "PUMA CALI", name: "CLEOPATRA", imgSrc: "/list/puma.jpg", price: "189.90" },
  ]

}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/user-log" element={<UserLogContainer />} />
        <Route path="/sneakers" element={<ItemListPage />} />
        <Route path="/item" element={<ItemPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
