import React, { useState } from "react";
import axios from "axios";

function Createurl() {
  const [url, setUrl] = useState("");
  const [create, setCreate] = useState(true);
  const [tem, setTem] = useState("");
  if (create) {
    return (
      <div>
        <section className="background-radial-gradient overflow-hidden">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                  Create a new Url
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
                        const res = await axios.post(
                          `https://urlshortener-f2s1.onrender.com/api/short`,
                          { origUrl: url }
                        );
                        setTem(res.data.shortUrl);
                        setCreate(false);
                      }}
                    >
                      <div className="row">
                        <label className="form-label" htmlFor="form3Example3">
                          Enter a URL
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example3"
                            className="form-control"
                            value={url}
                            required
                            onChange={(e) => {
                              setUrl(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className="background-radial-gradient overflow-hidden">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                  Create a new Url
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
                        const res = await axios.post(
                          `https://urlshortener-f2s1.onrender.com/api/short`,
                          { origUrl: url }
                        );
                        console.log(res.data.shortUrl);
                      }}
                    >
                      <div className="row">
                        <label className="form-label" htmlFor="form3Example3">
                          Enter a URL
                        </label>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example3"
                            className="form-control"
                            value={url}
                            required
                            onChange={(e) => {
                              setUrl(e.target.value);
                            }}
                          />
                        </div>
                        <label className="form-label" htmlFor="form3Example3">
                          New URL
                        </label>
                        <div className="form-outline mb-4">
                          <a href={tem}>{tem}</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Createurl;
