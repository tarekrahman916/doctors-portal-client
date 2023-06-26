import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${appointment})`, backgroundSize: "cover" }}
      className="py-16"
    >
      <div className="text-center">
        <h4 className="text-primary text-xl font-bold">Contact Us</h4>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="lg:w-1/2 mx-auto mt-10 px-5">
        <form className="">
          <div className="form-control mb-5">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-5">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control ">
            <textarea
              className="textarea textarea-bordered"
              placeholder="Your message"
              rows="3"
            ></textarea>
          </div>
          <div className="mt-6 flex justify-center">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
