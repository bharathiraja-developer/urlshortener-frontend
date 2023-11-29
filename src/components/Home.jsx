import React, { useContext, useState } from "react";
import "../styles/Signinpage.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const { register, setRegister } = useContext(userContext);
  const [data, setData] = useState([]);
  let i = 0;
  axios.get("https://urlshortener-f2s1.onrender.com/api").then((res) => {
    setData(res.data);
  });
  return (
    <div>
      <p className="d-flex flex-row justify-content-center fs-2 fw-semibold">
        Welcome {register.Firstname}!
      </p>
      <div className="d-flex flex-row justify-content-center mb-2">
        <Link to="/Createurl" className="btn btn-success">
          Create New Url
        </Link>
      </div>
      <table className="container text-center mt-1">
        <thead>
          <tr>
            <th>SI.NO:</th>
            <th>Original url</th>
            <th>Short url</th>
            <th>No of clicks</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            i++;
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>
                  <a href={element.origUrl}>{element.origUrl}</a>
                </td>
                <td>
                  <a href={element.shortUrl}>{element.shortUrl}</a>
                </td>
                <td>{element.clicks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
