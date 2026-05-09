import React, { useState } from "react";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginUser = async () => {
    try {
      const response = await fetch("https://example-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      console.log(data);

      alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;