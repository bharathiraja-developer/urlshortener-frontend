import React, { useContext } from "react";
import "../styles/Signinpage.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage() {
  const history = useNavigate();
  const { register, setRegister } = useContext(userContext);
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                Url Shoertener
              </h1>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log(register);
                      axios.post(
                        "https://urlshortener-f2s1.onrender.com/api/users",
                        register
                      );
                      setRegister({
                        email: "",
                        Firstname: "",
                        Lastname: "",
                        password: "",
                      });
                      alert("Check your mail and activate your account");
                      history("/Signin");
                    }}
                  >
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        value={register.email}
                        required
                        onChange={(e) => {
                          setRegister({
                            ...register,
                            email: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        value={register.Firstname}
                        required
                        onChange={(e) => {
                          setRegister({
                            ...register,
                            Firstname: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        value={register.Lastname}
                        required
                        onChange={(e) => {
                          setRegister({
                            ...register,
                            Lastname: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={register.password}
                        required
                        onChange={(e) => {
                          setRegister({
                            ...register,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <button className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>
                  </form>

                  <div className="text-center">
                    <p>Already have a accont ?</p>
                    <Link
                      to="/Signin"
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
