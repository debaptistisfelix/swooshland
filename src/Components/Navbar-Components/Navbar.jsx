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
import { UserContext } from "../Context/UserContext";
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from 'uuid';





function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const [openUserModal, setOpenUserModal] = useState(false);
    const [openCartModal, setOpenCartModal] = useState(false);
    const [openSearchResults, setOpenSearchResults] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const { setLogged } = useContext(LoggedContext);
    const { user, setUser } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['client']);



    const [items, setItems] = useState([]);

    // Ogni volta che lo user subisce cambiamenti viene aggiornato
    useEffect(() => {
        async function fetchUser() {
            const userData = cookies.client._id
            const res = await axios.get(`http://localhost:3000/api/users/${userData}`)
            const userInfos = res.data;
            setUser(userInfos)

        }
        function resetUser() {
            setUser({})
        }
        cookies.client ? fetchUser() : undefined;

    }, []);



    useEffect(() => {
        const checkLogSession = () => {

            cookies.isLGGD ? setLogged(true) : setLogged(false);
            /*  window.localStorage.getItem("isLoggedIn") ? setLogged(true) : setLogged(false); */
        }
        checkLogSession();

        async function fetchProds() {
            const res = await axios.get("http://localhost:3000/api/products");
            const products = res.data;

            setItems([...products])
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




    const body = document.querySelector("body");
    const navbar = document.querySelector(".Navbar");
    const userModal = document.querySelector(".UserModalNav");
    const cartModal = document.querySelector(".CartModalNav");

    body.addEventListener("click", (e) => {
        e.target !== navbar && hideSearchResults();
        e.target !== userModal && setOpenUserModal(false);
        e.target !== cartModal && setOpenCartModal(false);
    })



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
                        toggleNavStatus={toggleNavStatus}
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
                                <Link className="Navbar-show-monthly">SHOW <i className="fa-solid fa-rocket"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Navbar-icons">
                <i
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleUserModal();

                    }}
                    className={`fa-regular fa-user nav-icons ${openUserModal === true ? "selected-nav-user-icon" : undefined}`}></i>
                <div className="Nav-cart-count-box"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleCartModal();
                    }}

                >
                    {/* <NavLink
                        onClick={toggleCartModal}
                        className={`fa-solid fa-bag-shopping nav-icons ${openCartModal === true ? "selected-nav-cart-icon" : undefined}`}>
                    </NavLink>
                    <span className="Nav-cart-count">3</span> */}
                    <CartIcon cart={user.cart}
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