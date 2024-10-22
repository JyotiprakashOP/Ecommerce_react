import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer,setAnswer] = useState("");
  

  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/forgot-password`, {
        email,
        newPassword,
        answer
      });

      if (res && res.data.success) {
        
        toast.success("Login successful!");
       
        navigate("/login");
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
          className="row forgotPassword"
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
              label="Enter your new password"
              type="password"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              label="Enter your pet name"
              type="text"
              fullWidth
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div>
            <Button variant="contained" className="bg-success" onClick={loginHandler}>
              Reset
            </Button>
           
          </div>
        </div>  
      </div>
    </Layout>
  );
}

export default ForgotPassword;
