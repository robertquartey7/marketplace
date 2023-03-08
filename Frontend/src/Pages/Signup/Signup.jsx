import { useState } from "react";
import axios from "axios";
function Signup() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // handling submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_APP_URL}auth/signup`, {
        displayName: `${user.fname} ${user.lname}`,
        username: user.username,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="signup m-auto mt-5"
      style={{
        width: "70%",
      }}
    >
      <h1 className="text-center">Sign up</h1>
      <form className=" store__form" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            required
            name="fname"
            value={user.fname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            required
            name="lname"
            value={user.lname}
            onChange={handleChange}
          />
        </div>
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
            value={user.username}
            onChange={handleChange}
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
            value={user.email}
            onChange={handleChange}
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
            value={user.pas}
            onChange={handleChange}
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
          Alreadt have account <a href="/login">login</a>
        </span>
      </form>
    </div>
  );
}

export default Signup;
