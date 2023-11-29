import React, { useContext } from "react";
import "../styles/Signinpage.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SigninPage() {
  const { register, setRegister } = useContext(userContext);
  const history = useNavigate();
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                Url Shortener task
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
                    onSubmit={async (e) => {
                      e.preventDefault();
                      await axios
                        .put(
                          "https://urlshortener-f2s1.onrender.com/api/users/login",
                          {
                            username: register.email,
                            password: register.password,
                          }
                        )
                        .then((res) => {
                          setRegister({
                            email: res.data.username,
                            Firstname: res.data.name,
                            Lastname: "",
                            password: "",
                          });
                          history("/Home");
                        })
                        .catch((error) => {
                          alert(error.message);
                        });
                    }}
                  >
                    <div className="row">
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
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign in
                    </button>
                  </form>

                  <div className="text-center">
                    <p>Don't have an accont ?</p>
                    <Link to="/" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </Link>
                  </div>
                  <div className="text-center">
                    <p>Are you forgot your password ?</p>
                    <Link
                      to="/Forget"
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Forgot password
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

export default SigninPage;
