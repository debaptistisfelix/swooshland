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

import { useCookies } from "react-cookie";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openSearchResults, setOpenSearchResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { logged, setLogged, logOut } = useContext(LoggedContext);
  const [cookies] = useCookies(["client"]);

  const [items, setItems] = useState([]);

  // Ogni volta che lo user subisce cambiamenti viene aggiornato
  useEffect(() => {
    const checkLogSession = () => {
      const loggedInConditions = cookies.isLGGD && cookies.client;
      loggedInConditions ? setLogged(true) : setLogged(false);
    };
    checkLogSession();
  }, []);

  useEffect(() => {
    async function fetchProds() {
      const res = await axios.get(
        "https://easy-ruby-goose-sari.cyclic.app/api/items?limit=31"
      );
      const products = res.data.data.data;

      setItems([...products]);
    }
    fetchProds();
  }, []);

  let navStatus;
  openNav === true ? (navStatus = "Navbar-active") : undefined;

  let cardStatus;
  openNav === true ? (cardStatus = "Navbar-footer-card-appears") : undefined;

  /*  let linkStatus;
  openNav === true ? (linkStatus = "Navbar-link-appear") : undefined; */

  let NavBlurrer;
  openNav === false
    ? (NavBlurrer = "hide-nav-blurrer")
    : (NavBlurrer = undefined);

  let SearchNavBlurrer;

  openSearchResults === false
    ? (SearchNavBlurrer = "hide-search-nav-blurrer")
    : (SearchNavBlurrer = undefined);

  function toggleNavStatus() {
    setOpenNav(!openNav);
    setOpenCartModal(false);
    setOpenUserModal(false);
  }
  function toggleUserModal() {
    setOpenUserModal(!openUserModal);
    setOpenSearchResults(false);
    openCartModal === true ? toggleCartModal() : undefined;
  }
  function toggleCartModal() {
    setOpenCartModal(!openCartModal);
    setOpenSearchResults(false);
    openUserModal === true ? toggleUserModal() : undefined;
  }

  function handleSearchChange(e) {
    setOpenSearchResults(true);
    setOpenUserModal(false);
    setOpenCartModal(false);
    setSearchValue(e.target.value);
  }

  function hideSearchResults() {
    setOpenSearchResults(false);
    setSearchValue("");
  }

  let filteredItem;
  searchValue === ""
    ? (filteredItem = [])
    : (filteredItem = items.filter((item) => {
        return (
          item.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }));

  const body = document.querySelector("body");
  const navbar = document.querySelector(".Navbar");
  const userModal = document.querySelector(".UserModalNav");
  const cartModal = document.querySelector(".CartModalNav");

  body.addEventListener("click", (e) => {
    e.target !== navbar && hideSearchResults();
    e.target !== userModal && setOpenUserModal(false);
    e.target !== cartModal && setOpenCartModal(false);
  });

  function navLinkFunc() {
    setOpenNav(false);
    window.scrollTo(0, 0);
  }

  const mobileScreenSize = window.innerWidth <= 767;

  return (
    <nav className="Navbar">
      <div className="Navbar-logo-box">
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to="/"
          className="Navbar-logo"
        >
          SWOOSHLAND
        </NavLink>
      </div>
      <div className={`Navbar-rightside ${navStatus}`}>
        <div className="Navbar-close-sidemenu">
          <i onClick={toggleNavStatus} className="fa-solid fa-xmark"></i>
        </div>
        <ul className="Navbar-links">
          <NavLink
            onClick={() => navLinkFunc()}
            to="/"
            className={`Navbar-link homeLink`}
          >
            HOME <i className="fa-solid fa-chevron-right link-arrow"></i>
          </NavLink>
          <NavLink
            onClick={() => navLinkFunc()}
            to="/sneakers"
            className={`Navbar-link`}
          >
            SNEAKERS <i className="fa-solid fa-chevron-right link-arrow"></i>
          </NavLink>
          <NavLink
            onClick={() => navLinkFunc()}
            to="/accessories"
            className={`Navbar-link`}
          >
            ACCESSORIES <i className="fa-solid fa-chevron-right link-arrow"></i>
          </NavLink>
          {logged === false && mobileScreenSize && (
            <NavLink
              onClick={() => navLinkFunc()}
              to="/user-log"
              className={`Navbar-link user-navlink`}
            >
              LOGIN / SIGNUP{" "}
              <i className="fa-solid fa-chevron-right link-arrow"></i>
            </NavLink>
          )}
          {logged === true && mobileScreenSize && (
            <ul className="Navbar-links user-navbar-links">
              <NavLink
                onClick={() => navLinkFunc()}
                to="/orders"
                className={`Navbar-link user-navlink`}
              >
                ORDERS <i className="fa-solid fa-chevron-right link-arrow"></i>
              </NavLink>
              <NavLink
                onClick={() => navLinkFunc()}
                to="/wishlist"
                className={`Navbar-link user-navlink`}
              >
                WISHLIST<i className="fa-solid fa-chevron-right link-arrow"></i>
              </NavLink>
              <NavLink
                onClick={() => navLinkFunc()}
                to="/profile"
                className={`Navbar-link user-navlink`}
              >
                ADDRESSES
                <i className="fa-solid fa-chevron-right link-arrow"></i>
              </NavLink>
              <NavLink
                onClick={() => {
                  logOut();
                  navLinkFunc();
                }}
                to="/"
                className={`Navbar-link user-navlink`}
              >
                LOG OUT
                <i className="fa-solid fa-chevron-right link-arrow"></i>
              </NavLink>
            </ul>
          )}
        </ul>
        <div className="Navbar-search-box">
          <span className="Navbar-search-cta">
            Explore all of our Custom Products!
          </span>
          <div className="Navbar-complete-input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              onChange={handleSearchChange}
              value={searchValue}
              placeholder="Search ..."
              type="text"
            />
            {openSearchResults === true ? (
              <i
                onClick={hideSearchResults}
                className="fa-solid fa-xmark hideSearchResults"
              ></i>
            ) : undefined}
          </div>
          <NavbarSearchResults
            toggleNavStatus={toggleNavStatus}
            searchValue={searchValue}
            openedSearchResults={openSearchResults}
            filteredItem={filteredItem}
          />
        </div>
        {/* <div className="Navbar-footer">
          <div className={`Navbar-footer-card ${cardStatus}`}>
            <div className="Navbar-footer-shadow">
              <span className="Navbar-weekly-tag">CUSTOM OF THE MONTH</span>
              <div className="Navbar-weekly-model">
                <span className="Navbar-sneaker-brand">NIKE AIR </span>
                <span className="Navbar-sneaker-category">JORDAN 1 MID</span>
                <span className="Navbar-sneaker-name">OG-ORANGE</span>
                <Link
                  onClick={() => {
                    setOpenNav(false);
                    window.scrollTo(0, 0);
                  }}
                  to="/products/6432f546e715a8760dcccb12"
                  className="Navbar-show-monthly"
                >
                  SHOW <i className="fa-solid fa-rocket"></i>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="Navbar-icons">
        <i
          onClick={(e) => {
            e.stopPropagation();
            toggleUserModal();
          }}
          className={`fa-regular fa-user nav-icons ${
            openUserModal === true ? "selected-nav-user-icon" : undefined
          }`}
        ></i>
        <div
          className="Nav-cart-count-box"
          onClick={(e) => {
            e.stopPropagation();
            toggleCartModal();
          }}
        >
          <CartIcon />
        </div>
        <div onClick={toggleNavStatus} className="Navbar-hamburger">
          <i className="hamburger fa-solid fa-bars nav-icons"></i>
        </div>
      </div>

      <UserModalNav
        toggleUserModal={toggleUserModal}
        openedUserModal={openUserModal}
      />

      <CartModalNav openedCartModal={openCartModal} />
      <div className={`Nav-blurrer ${NavBlurrer}`}></div>
      <div className={`search-nav-blurrer ${SearchNavBlurrer}`}></div>
    </nav>
  );
}

export default Navbar;
