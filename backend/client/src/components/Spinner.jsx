import React,{useState,useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
function Spinner() {

  const [count,setCount] = useState(5)
  const navigate = useNavigate()

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount((prevValue)=> --prevValue)
    },1000)
    count === 0 && navigate('/login')
    return ()=> clearInterval(interval)
  },[count,navigate])
  return (
    <div >
        <Box sx={{ display: 'flex' }} className="d-flex justify-content-center align-items-center flex-column" style={{height:'100vh'}}>
          <CircularProgress />
          <h4>Redirecting to you in {count} seconds</h4>
        </Box>
    </div>
  )
}

export default Spinner