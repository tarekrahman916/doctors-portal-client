import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Treatment = () => {
  return (
    <section className="lg:pl-16 mt-16">
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img
            src={treatment}
            className="lg:w-[450px] rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
