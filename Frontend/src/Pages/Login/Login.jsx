import React, { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserAuth } from "../../Utils/AuthContext";
import Cookies from "js-cookie";
import { useNavigate, useLocation } from "react-router-dom";





function Login() {
  const nagivate = useNavigate();
  const location = useLocation();

    // const getUser = useQuery({
    //   queryKey: ["users"],
    //   queryFn: async () => {
    //     axios
    //       .get(`${import.meta.env.VITE_APP_URL}auth`, config)
    //       .then((res) => res.json);
    //   },
    // });

  const { auth, setAuth } = UserAuth();
  console.log(auth);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const token = "";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const getUser = useQuery({
    //   queryKey: ["users"],
    //   queryFn: async () => {
    //     axios
    //       .get(`${import.meta.env.VITE_APP_URL}auth`, config)
    //       .then((res) => res.json);
    //   },
    // });

    await axios
      .post(`${import.meta.env.VITE_APP_URL}auth/login`, {
        ...user,
      })
      .then((res) => {
        Cookies.set("token", res.data.token);

        if (Cookies.get("token")) {
        
          nagivate(`${location.state}`);
        }
      });
  };

  return (
    <div
      className="signup m-auto mt-5"
      style={{
        width: "70%",
      }}
    >
      <h1 className="text-center" >Login</h1>
      <form className=" store__form" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            required
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            required
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>

        <button type="submit " className="btn btn-primary w-100">
          Submit
        </button>
        <span
          style={{
            color: "#2E3840",
          }}
        >
          Don't have account <a href="/signup">create an account</a>
        </span>
      </form>
   
    </div>
  );
}

export default Login;
