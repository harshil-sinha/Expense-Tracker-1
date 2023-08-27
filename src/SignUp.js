import React from 'react'
import "./index.css";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
  } from 'mdb-react-ui-kit';

const SignUp = () =>{
    return (
        <>
         <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
            <MDBCol col='10' md='6'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
            </MDBCol>

            <MDBCol col='4' md='6'>
            <h1 className='mb-3 text-center'>Sign Up</h1>
            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
            <div className="d-flex justify-content-between mx-4 mb-4">
            </div>

            <MDBBtn className="mb-4 w-100" size="lg">Sign Up</MDBBtn>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
            
        </>
    )
}
export default SignUp;
