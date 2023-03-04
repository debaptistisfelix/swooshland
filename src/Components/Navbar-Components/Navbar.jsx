import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import UserModalNav from "./UserModalNav";
import CartModalNav from "./CartModalNav";
import NavbarSearchResults from "./NavbarSearchResults";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";
import axios from "axios";

/* const items = [
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
]  */



function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const [openUserModal, setOpenUserModal] = useState(false);
    const [openCartModal, setOpenCartModal] = useState(false);
    const [openSearchResults, setOpenSearchResults] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { setLogged } = useContext(LoggedContext);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const checkLogSession = () => {
            window.localStorage.getItem("isLoggedIn") ? setLogged(true) : setLogged(false);
        }
        checkLogSession();

        async function fetchProds() {
            const sneakRes = await axios.get("http://localhost:3000/api/sneakers");
            const sneakers = sneakRes.data;
            const accessRes = await axios.get("http://localhost:3000/api/accessories");
            const accessories = accessRes.data;
            setItems([...sneakers, ...accessories])
        }

        fetchProds();
    }, []);


    let navStatus;
    openNav === true ? navStatus = "Navbar-active" : undefined

    let cardStatus;
    openNav === true ? cardStatus = "Navbar-footer-card-appears" : undefined;

    let linkStatus;
    openNav === true ? linkStatus = "Navbar-link-appear" : undefined;

    let NavBlurrer;
    (openNav === false) ? NavBlurrer = "hide-nav-blurrer" : NavBlurrer = undefined

    let SearchNavBlurrer;

    openSearchResults === false ? SearchNavBlurrer = "hide-search-nav-blurrer" : SearchNavBlurrer = undefined;



    function toggleNavStatus() {
        setOpenNav(!openNav);
        setOpenCartModal(false)
        setOpenUserModal(false);

    }
    function toggleUserModal() {
        setOpenUserModal(!openUserModal)
        setOpenSearchResults(false);
        openCartModal === true ? toggleCartModal() : undefined

    }
    function toggleCartModal() {
        setOpenCartModal(!openCartModal)
        setOpenSearchResults(false)
        openUserModal === true ? toggleUserModal() : undefined
    }

    function handleSearchChange(e) {
        setOpenSearchResults(true);
        setOpenUserModal(false);
        setOpenCartModal(false);
        setSearchValue(e.target.value)
    }

    function hideSearchResults() {
        setOpenSearchResults(false);
        setSearchValue("");
    }

    let filteredItem;
    searchValue === ""
        ? filteredItem = []
        : filteredItem = items.filter(item => {
            return (item.category.toLowerCase().includes(searchValue.toLowerCase()) || item.name.toLowerCase().includes(searchValue.toLowerCase()))
        })

    console.log(items)






    return (
        <nav className="Navbar">
            <div className="Navbar-logo-box">

                <NavLink to="/" className="Navbar-logo">SWOOSHLAND</NavLink>
            </div>
            <div className={`Navbar-rightside ${navStatus}`}>
                <div className="Navbar-close-sidemenu"><i onClick={toggleNavStatus} className="fa-solid fa-xmark"></i></div>
                <ul className="Navbar-links">
                    <NavLink onClick={() => setOpenNav(false)} className={`Navbar-link ${linkStatus}1 homeLink`}>HOME <i className="fa-solid fa-chevron-right link-arrow"></i></NavLink>
                    <NavLink onClick={() => setOpenNav(false)} to="/sneakers" className={`Navbar-link ${linkStatus}2`}>SNEAKERS <i className="fa-solid fa-chevron-right link-arrow"></i></NavLink>
                    <NavLink onClick={() => setOpenNav(false)} to="/accessories" className={`Navbar-link ${linkStatus}3`}>ACCESSORIES <i className="fa-solid fa-chevron-right link-arrow"></i></NavLink>
                    <NavLink onClick={() => setOpenNav(false)} to="/aboutus" className={`Navbar-link ${linkStatus}4`}>ABOUT US <i className="fa-solid fa-chevron-right link-arrow"></i></NavLink>
                </ul>
                <div className="Navbar-search-box">
                    <span className="Navbar-search-cta">Explore all of our Custom Products!</span>
                    <div className="Navbar-complete-input">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            onChange={handleSearchChange}
                            value={searchValue}
                            placeholder="SEARCH"
                            type="text"
                        />
                        {openSearchResults === true ? <i
                            onClick={hideSearchResults}
                            className="fa-solid fa-xmark hideSearchResults"></i> : undefined}

                    </div>
                    <NavbarSearchResults
                        searchValue={searchValue}
                        openedSearchResults={openSearchResults}
                        filteredItem={filteredItem} />
                </div>
                <div className="Navbar-footer">
                    <div className={`Navbar-footer-card ${cardStatus}`}>
                        <div className="Navbar-footer-shadow">
                            <span className="Navbar-weekly-tag">
                                CUSTOM OF THE MONTH
                            </span>
                            <div className="Navbar-weekly-model">
                                <span className="Navbar-sneaker-brand">NIKE AIR </span>
                                <span className="Navbar-sneaker-category">JORDAN 1 MID</span>
                                <span className="Navbar-sneaker-name">OG-ORANGE</span>
                                <Link className="Navbar-show-monthly">SHOW <i class="fa-solid fa-rocket"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Navbar-icons">
                <NavLink
                    onClick={toggleUserModal}
                    className={`fa-regular fa-user nav-icons ${openUserModal === true ? "selected-nav-user-icon" : undefined}`}></NavLink>
                <div className="Nav-cart-count-box"
                    onClick={toggleCartModal}

                >
                    {/* <NavLink
                        onClick={toggleCartModal}
                        className={`fa-solid fa-bag-shopping nav-icons ${openCartModal === true ? "selected-nav-cart-icon" : undefined}`}>
                    </NavLink>
                    <span className="Nav-cart-count">3</span> */}
                    <CartIcon
                    />
                </div>
                <div onClick={toggleNavStatus} className="Navbar-hamburger">
                    <i className="hamburger fa-solid fa-bars nav-icons"></i>
                </div>
            </div>
            <UserModalNav
                toggleUserModal={toggleUserModal}
                openedUserModal={openUserModal} />
            <CartModalNav openedCartModal={openCartModal} />
            <div className={`Nav-blurrer ${NavBlurrer}`}></div>
            <div className={`search-nav-blurrer ${SearchNavBlurrer}`}></div>
        </nav>
    )
}

export default Navbar;