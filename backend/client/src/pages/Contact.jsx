import React from 'react'
import Layout from '../components/Layout'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

function Contact() {
  return (
    <Layout>
      <div className='container-fluid row '>
        <div className="col-6" >
          <h1 style={{fontSize:'9rem',marginTop:'4rem'}}>
            <b>CONTACT US</b>
          </h1>
        </div>
        <div className="col-6 ps-5" style={{marginTop:"10rem",}}>
          <b>If you have any query, feel free to contact us</b><br />
          <b>We are available 24X7</b><hr />

          <p><EmailIcon></EmailIcon> : <b>jyotiprakashop@gmail.com</b></p>
          <p><LocalPhoneIcon></LocalPhoneIcon> : <b>+91 9692545718</b></p>
          <p><HeadsetMicIcon></HeadsetMicIcon> : <b>1800-0000-0000(toll free)</b></p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact