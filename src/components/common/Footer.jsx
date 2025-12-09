import React from "react";

export default function Footer() {
    return (
        <footer className="footer bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">

                <div className="row">

                    {/* Brand + Contact */}
                    <div className="col-md-3 mb-4">
                        <div className="logo-section">
                            <a className="navbar-brand d-flex align-items-center mb-3" href="#" style={{ fontSize: "2rem" }}>
                                <i className="bi bi-activity"></i>&nbsp;Krist
                            </a>
                        </div>
                        <p className="mb-1"><i className="bi bi-telephone"></i> (704) 5550127</p>
                        <p className="mb-1"><i className="bi bi-envelope"></i> krist@example.com</p>
                        <p><i className="bi bi-geo-alt"></i> 3891 Ranchview Dr, Richardson, CA 62639</p>

                        {/* Payment Icons */}
                        <div className="d-flex gap-2 mt-3">

                        </div>
                    </div>

                    {/* Information */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Information</h6>
                        <ul className="list-unstyled">
                            <li>My Account</li>
                            <li>Login</li>
                            <li>My Cart</li>
                            <li>My Wishlist</li>
                            <li>Checkout</li>
                        </ul>
                    </div>

                    {/* Service */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Service</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Delivery Information</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold mb-3">Subscribe</h6>
                        <p className="small">
                            Enter your email to be the first to know about new collections and product launches.
                        </p>

                        <div className="input-group">
                            <span className="input-group-text bg-white text-dark">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input
                                type="email"
                                className="form-control bg-white text-dark"
                                placeholder="Your Email"
                            />
                            <button className="btn btn-dark">
                                →
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom d-flex justify-content-between align-items-center mt-4 pt-3 border-top border-secondary">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                            height="25"
                            alt="Mastercard"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                            height="25"
                            alt="Visa"
                        />
                        <img
                            src="data:image/png;base64,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"
                            height="25"
                            alt="Apple Pay"
                        />
                        <img
                            src="data:image/png;base64,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"
                            height="25"
                            alt="Google Pay"
                        />
                    </div>

                    <p className="mb-0 small">© 2023 Krist All Rights Reserved</p>

                    <div className="d-flex gap-3">
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter-x"></i>
                    </div>
                </div>

            </div>
        </footer>
    );
}
