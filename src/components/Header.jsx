import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import SvgIcon from "@mui/material/SvgIcon";
import { HashLink as Link } from "react-router-hash-link";

function GooglePlayIcon(props) {
  return (
    <SvgIcon sx={{ fontSize: 18 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
      </svg>
    </SvgIcon>
  );
}

function Header() {
  return (
    <div className="titleContainer" id="title">
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid ps-0">
          <a className="navbar-brand" active aria-current="page" href="/">
            tindog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <Link smooth to="#footerSection" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item me-4">
                <Link smooth to="#pricingSection" className="nav-link">Pricing</Link>
              </li>
              <li className="nav-item ">
                <Link smooth to="#downloadSection" className="nav-link">Download</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row mb-5 " >
        <div className="col-lg-6">
          <h1 className="lh-base">Meet new and interesting dogs nearby.</h1>
          <button className="btn btn-dark btn-lg me-3 mt-3 mb-3 align-items-start ">
            <AppleIcon />
            &nbsp;Download
          </button>
          <button className="btn btn-light btn-lg mt-3 mb-3 align-items-start">
            <GooglePlayIcon />
            &nbsp;Download
          </button>
        </div>
        <div className="col-lg-6 position-relative">
          <img
            className="titleImg"
            src={require("../assets/images/iphone6.png")}
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
