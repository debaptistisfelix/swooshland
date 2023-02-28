import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-upper-part">
                <div className="Footer-side side-A">
                    <div className="Footer-links">
                        <span className="Footer-links-title"><b>EXPLORE</b> <i class="fa-solid fa-rocket"></i></span>
                        <Link className="Footer-link">SNEAKERS</Link>
                        <Link className="Footer-link">ACCESSORIES</Link>
                        <Link className="Footer-link">ABOUT US</Link>
                    </div>
                    <div className="Footer-links">
                        <span className="Footer-links-title"><b>INFO</b> <i class="fa-solid fa-circle-info"></i></span>
                        <Link className="Footer-link">SHIPPING</Link>
                        <Link className="Footer-link">RETURN POLICY</Link>
                        <Link className="Footer-link">FAQ</Link>
                    </div>
                </div>
                <div className="Footer-side side-B">
                    <div className="Footer-newsletter-box">
                        <span className="Footer-newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</span>
                        <div className="Footer-newsletter-form">
                            <input className="Footer-newsletter-input"
                                type="text"
                                placeholder="Insert email to receive latest news" />
                            <button className="Footer-submit"><i class="fa-solid fa-envelope"></i></button>
                        </div>
                        <span className="Footer-newsletter-policy">By subscribing to our Newsletter you accept the Terms & Condition of our Privacy Policy.</span>
                    </div>
                    <div className="Footer-socials-box">
                        <span className="Footer-socials-title">FOLLOW US ON</span>
                        <div className="Footer-social-icons">
                            <i className="social-icons fa-brands fa-twitter"></i>
                            <i className="social-icons fa-brands fa-instagram"></i>
                            <i className="social-icons fa-brands fa-square-facebook"></i>
                            <i className="social-icons fa-brands fa-twitch"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-under-part">
                <span className="Footer-copyright"><i class="fa-regular fa-copyright"></i>
                    2023 Debastuzzi Inc. All rights reserved
                </span>
            </div>

        </div>
    )
}

export default Footer;