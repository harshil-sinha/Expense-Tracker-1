import React from 'react'
import "./SignUp.css";
import {database} from './firebase.js';
import {signInWithEmailAndPassword } from "firebase/auth";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
  } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const history = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.pass.value;

        signInWithEmailAndPassword(database,email,pass).then(()=>{
            // console.log(data,"authData");
            alert("Login Successfully")
            history('/home');
        }).catch((err)=>{
            alert(err.code);
        })
        
    }
    return (
        <>
         <MDBContainer fluid className="p-3 my-5">
            <MDBRow>
            <MDBCol md='6'>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
            </MDBCol>
            <MDBCol md='6' className='text-center'>
            <form onSubmit={(event) =>{
                handleSubmit(event)
            }}>
            <h1 className='mb-3'>Login</h1>
            <MDBInput wrapperClass='mb-4' name='email' id='formControlLg' type='email' size="lg" placeholder='Email Id'/>
            <MDBInput wrapperClass='mb-4' name="pass" id='formControlLg' type='password' size="lg" placeholder='Password'/>

            <MDBBtn className="mb-4" size="lg" >Login</MDBBtn>
            </form>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
            
        </>
    )
}
export default Login;
