import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div className="hero  " style={{ background: `url(${bg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse p-5">
        <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button> */}
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
