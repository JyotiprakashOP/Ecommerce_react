import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {
        email,
        password,
      });

      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.name,
          token: res.data.jwtToken,
        });
        toast.success("Login successful!");
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate("/");
      } else {
        toast.error(res.data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container">
        <div
          className="row loginForm"
          style={{ paddingLeft: "15rem", paddingRight: "15rem" }}
        >
          <div>
            <TextField
              variant="outlined"
              label="Enter your email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Enter your password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button variant="contained" className="bg-success" onClick={loginHandler}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
