import React from "react";
export default function Pricing() {
  return (
    <div className="container-fluid" id="pricingSection">
      <h2 className="p-1">A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div className="row">
        <div className="col-md-6 col-lg-4 py-4 px-3">
          <div className="card">

          <div className="card-header">
            <h3>Chihuahua</h3>
          </div>

            <div className="card-body">
              <h2 className="card-title">Free</h2>
              <p className="card-text">
              5 Matches Per Day
              </p>
              <p className="card-text">
              10 Messages Per Day
              </p>
              <p className="card-text">
              Unlimited App Usage
              </p>
              <button href="/" className="btn btn-outline-dark btn-lg w-100">
              Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 py-4 px-3">
          <div className="card">
          <div className="card-header">
            <h3>Labrador</h3>
          </div>
            <div className="card-body">
              <h2 className="card-title">$49 / mo</h2>
              <p className="card-text">
              Unlimited Matches
              </p>
              <p className="card-text">
              Unlimited Messages              </p>
              <p className="card-text">
              Unlimited App Usage
              </p>
              <button href="/" className="btn btn-outline-dark btn-lg w-100">
              Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 py-4 px-3">
          <div className="card">
          <div className="card-header">
            <h3>Mastiff</h3>
          </div>
            <div className="card-body">
              <h2 className="card-title">$99 / mo</h2>
              <p className="card-text">
              Pirority Listing
              </p>
              <p className="card-text">
              Unlimited Matches
              </p>
              <p className="card-text">
              Unlimited Messages            
              </p>
              <p className="card-text">
              Unlimited App Usage
              </p>
              <button href="/" className="btn btn-dark btn-lg w-100">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
