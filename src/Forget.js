import React from 'react'
import "./SignUp.css";
import {database} from './firebase.js';
import {sendPasswordResetEmail} from "firebase/auth";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBInput,
  } from 'mdb-react-ui-kit';
import { NavLink} from 'react-router-dom';

const Forget = () =>{
    // const history = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        const email = event.target.email.value;
        
        sendPasswordResetEmail(database,email).then(()=>{
           alert("Password sent successfully")
           
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
            <h3 className='mb-3'>Enter Your Email</h3>
            <MDBInput wrapperClass='mb-4' name='email' id='formControlLg' type='email' size="lg" placeholder='Email Id'/>
            
            <MDBBtn className="mb-4" size="lg" >Reset Password </MDBBtn>
            </form>
            <NavLink to="/login" style={{textDecoration:"none"}}>Login?</NavLink>
        </MDBCol>
        </MDBRow>
        </MDBContainer>
            
        </>
    )
}
export default Forget;