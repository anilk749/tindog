import React from "react";

export default function Testimonials() {
  return (
    <div className="container-fluid" id="testimonialSection">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner container-fluid w-75">
        <div class="carousel-item active pb-5">
          <h2>
          I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.
          </h2>
          <img src={require("../assets/images/dog-img.jpg")} class="testimonialImg my-4 me-4" alt="dog"/>
          <em>Pebbles, New York</em>
        </div>
        <div class="carousel-item pb-5">
          <h2>
          My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.
          </h2>
          <img src={require("../assets/images/lady-img.jpg")} class="testimonialImg my-4 me-4" alt="lady"/>
          <em>Beverly, Illinois</em>
        </div>
      </div>
      <button
        class="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
      <img className="pressLogo col-sm-2 mt-4" src={require("../assets/images/TechCrunch.png")} alt="techcrunch"/>
      <img className="pressLogo col-sm-2 ps-3 ms-4 mt-4" src={require("../assets/images/bizinsider.png")} alt="bizinsider"/>
      <img className="pressLogo col-sm-2 ps-3 ms-4 mt-4" src={require("../assets/images/tnw.png")} alt="tnw"/>
      <img className="pressLogo col-sm-2 ps-3 ms-4 mt-4" src={require("../assets/images/mashable.png")} alt="mashable"/>
      </div>

  );
}
