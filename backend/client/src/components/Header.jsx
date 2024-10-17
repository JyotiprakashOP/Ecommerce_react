import React from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Avatar } from "@mui/material";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";


function Header() {
  const [auth,setAuth]=useAuth()

  const logoutHandler=()=>{
    setAuth({
      ...auth,
      user : null,
      token :''
    })
    localStorage.removeItem("auth")
    toast.success('Logout successfully')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid text-light">
        <span className="col-1 ms-5 mb-1 logo">
            AadimanavV
          </span>
          <Stack spacing={1} direction="row" className="col-10 ms-3">
            <Button variant="text" className="nav-item">
              <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="/">Home</Link>
            </Button>
            
            <Button variant="text"  className="nav-item">
              <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="/catagory">catagory</Link>
            </Button>
            
            {
              !auth.user ? (
                <>
                <Button variant="text"  className="nav-item">
                  <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="/register">register</Link>
                </Button>
                <Button variant="text"  className="nav-item">
                  <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="login">login</Link>
                </Button>
                </>
              ) : (
                <>
                  <Button variant="text"  className="nav-item">
                    <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="/login" onClick={logoutHandler}>Logout</Link>
                  </Button>
            
                </>
              )
            }
            
            <Button variant="text"  className="nav-item">
              <Link style={{textDecoration:'none',color:'white',fontSize:'0.75rem'}} to="/cart">cart (0)</Link>
            </Button>
            
            
          </Stack>
          <Avatar className="col-1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiPI3Yb27T_VdTIXp4K8bBcg01VtMrheC_qg&s" alt="J" style={{height:'50px'}} />
          </Avatar>

        </div>
      </nav>
    </div>
  );
}

export default Header;
