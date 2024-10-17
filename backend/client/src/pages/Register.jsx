import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import { Button } from "@mui/material";
import { toast } from "react-hot-toast";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address,setAddress] = useState('')
  const navigate = useNavigate()


  const submitHandler= async ()=>{
    
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/signup`, { name, email, phone, password, address });

      if(res.data.success){
        toast.success(res.data.message)
        navigate("/login")
      }else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
    }
    
  }
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-5">
            <h1 style={{ fontSize: "10rem" }}>
              <b className="gradient">Register Yourself</b>
            </h1>
          </div>
          <div className="col-6 mt-4">
            <div className="container registerForm">
              <TextField
                id="standard-basic"
                label="Enter your name "
                variant="standard"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
              <TextField
                id="standard-basic"
                label="Enter your email"
                variant="standard"
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
              />
              <TextField
                id="standard-basic"
                label="Enter your phone number"
                variant="standard"
                type="number"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                required
              />
              <TextField
                id="standard-basic"
                label="Enter your password"
                variant="standard"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
              <TextField
                id="standard-basic"
                label="Enter your address"
                variant="standard"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                required
              />

              <Button variant="contained" className="mt-3" onClick={submitHandler}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
