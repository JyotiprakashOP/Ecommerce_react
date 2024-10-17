import React from 'react'
import Layout from '../components/Layout';
import { useAuth } from '../context/auth';

function Home() {
  const [auth,setAuth] = useAuth()
  return (
    <Layout>
      Home
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default Home