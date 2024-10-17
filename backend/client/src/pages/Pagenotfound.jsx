import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '@mui/material';


function Pagenotfound() {
  const navigate = useNavigate()
  const goBackHandler=()=>{
    navigate(-1)
  }
  return (
    <Layout>
      <div className='text-center'>
        <h1>ERROR 404</h1>
        <p>Page not found</p>
     
        <Button variant='contained' onClick={goBackHandler}>
          Goback
        </Button>
      </div>
    </Layout>
  )
}

export default Pagenotfound