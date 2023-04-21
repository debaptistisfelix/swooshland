import "./Footer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState, useContext } from "react";
import { LoggedContext } from "../Context/LoggedContext";
import useInputState from "../Hooks/useInputState";

function Footer() {
  const [email, handleEmail, resetEmail] = useInputState("");
  const [cookies] = useCookies(["client"]);
  let { token } = useContext(LoggedContext);

  const [error, setError] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  async function handleNewsLetterSubmit(event) {
    event.preventDefault();
    const headers = { Authorization: `Bearer ${token}` };
    if (email === "") {
      return;
    }
    try {
      await axios.patch(
        "https://easy-ruby-goose-sari.cyclic.app/api/users/newsletterSub",
        {
          email: email,
        },
        {
          headers: headers,
        }
      );
      setError(null);
      console.log("subscribed");
      resetEmail();
      setSubscribed(true);
    } catch (err) {
      console.log(err.response.data.message);
      setError(err.response.data.message);
      resetEmail();
    }
  }

  return (
    <div className="Footer">
      <div className="Footer-upper-part">
        <div className="Footer-side side-A">
          <div className="Footer-links">
            <span className="Footer-links-title">
              <b>EXPLORE</b> <i className="fa-solid fa-rocket"></i>
            </span>
            <Link to="/" className="Footer-link">
              HOME
            </Link>
            <Link to="/sneakers" className="Footer-link">
              SNEAKERS
            </Link>
            <Link to="/accessories" className="Footer-link">
              ACCESSORIES
            </Link>
          </div>
          <div className="Footer-links">
            <span className="Footer-links-title">
              <b>INFO</b> <i className="fa-solid fa-circle-info"></i>
            </span>
            <Link className="Footer-link">SHIPPING</Link>
            <Link className="Footer-link">RETURN POLICY</Link>
            <Link className="Footer-link">FAQ</Link>
          </div>
        </div>
        <div className="Footer-side side-B">
          <div className="Footer-newsletter-box">
            <span className="Footer-newsletter-title">
              {!error && "SUBSCRIBE TO OUR NEWSLETTER"}
              {error && <>{error}</>}
            </span>
            <form
              onSubmit={() => {
                handleNewsLetterSubmit(event);
              }}
              className="Footer-newsletter-form"
            >
              <input
                required
                type="email"
                value={email}
                onChange={handleEmail}
                className="Footer-newsletter-input"
                placeholder="Insert User Email Address"
              />
              {cookies.client ? (
                <button className="Footer-submit">
                  {subscribed === false ? (
                    <i className="fa-solid fa-envelope"></i>
                  ) : (
                    <i className="fa-solid fa-check"></i>
                  )}
                </button>
              ) : (
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/user-log"
                  className="Footer-submit"
                >
                  <i className="fa-solid fa-envelope"></i>
                </Link>
              )}
            </form>
            <span className="Footer-newsletter-policy">
              By subscribing to our Newsletter you accept the Terms & Condition
              of our Privacy Policy.
            </span>
          </div>
          <div className="Footer-socials-box">
            <span className="Footer-socials-title">FOLLOW US ON</span>
            <div className="Footer-social-icons">
              <Link>
                <i className="social-icons fa-brands fa-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com/swooshlandcustoms"
                target="_blank"
              >
                <i className="social-icons fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="https://www.facebook.com/swooshlandcustoms/"
                target="_blank"
              >
                {" "}
                <i className="social-icons fa-brands fa-square-facebook"></i>
              </Link>
              <Link>
                {" "}
                <i className="social-icons fa-brands fa-twitch"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-under-part">
        <span className="Footer-copyright">
          <i className="fa-regular fa-copyright"></i>
          2023 Debastuzzi Inc. All rights reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
