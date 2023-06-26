import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { authContext } from "../../../contexts/AuthProvider/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong </p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h2 className="text-3xl">
        Please{" "}
        <button onClick={handleLogOut} className="btn">
          Sign Out
        </button>{" "}
        and log back in.
      </h2>
    </div>
  );
};

export default DisplayError;
