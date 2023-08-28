import React from 'react'
import "./SignUp.css";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
  } from 'mdb-react-ui-kit';

const Login = () =>{
    return (
        <>
         <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
            <MDBCol md='6'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
            </MDBCol>

            <MDBCol md='6' className='text-center'>
            <h1 className='mb-3'>Login</h1>
            <MDBInput wrapperClass='mb-4' id='formControlLg' type='email' size="lg" placeholder='Email Id'/>
            <MDBInput wrapperClass='mb-4' id='formControlLg' type='password' size="lg" placeholder='Password'/>

            <MDBBtn className="mb-4" size="lg">Login</MDBBtn>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
            
        </>
    )
}
export default Login;