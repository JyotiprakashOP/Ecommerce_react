import { useState,useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";


import React from 'react'
import axios from "axios";
import Spinner from "../Spinner";

function Private() {
    const [ok, setOk] = useState(false)
    const [auth,setAuth] =useAuth()

    useEffect(()=>{
        const authCheck = async() =>{
            const res = await axios.get(`${process.env.REACT_APP_API}/auth/user-auth`,
                {
                    headers : {
                        "Authorization" : auth?.jwtToken
                    }
                }
            )
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.jwtToken) authCheck()
    },[auth])
  return ok ? <Outlet/> : <Spinner/>
}

export default Private;