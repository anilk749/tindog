import React from "react";

function Header() {
  return (
    <div className="header-section">
        <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" active aria-current="page" href="#">
          <h2>TinDog</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-4">
              <a class="nav-link " href="#">
                <h5>Contact</h5>
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
              <h5>Pricing</h5>
              </a>
            </li>
            <li class="nav-item ">
                <a class="nav-link" href="#">
                    <h5>Download</h5>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div className="d-flex">
        <div>
            <h1>Meet new and interesting dogs nearby.</h1>
            <button class="btn btn-dark btn-lg me-3 mt-4">Download</button>
            <button class="btn btn-outline-light btn-lg mt-4">Download</button>
        </div>
        <div>
            <img src={require("../assets/images/iphone6.png")} width={"80%"} alt="iphone image"/>
        </div>
    </div>
    </div>
  );
}
export default Header;
