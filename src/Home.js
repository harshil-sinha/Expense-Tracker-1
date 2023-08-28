import { MDBContainer, MDBCol, MDBRow,MDBBtn} from 'mdb-react-ui-kit';
import React from 'react';
import { signOut } from 'firebase/auth';
import { database } from './firebase';
import { useNavigate } from 'react-router-dom';
const Home = () =>{
    const history = useNavigate();

    const handleClick = () =>{
        signOut(database).then(()=>{
            alert("Logout Successfully")
            history("/login")
        }).catch((err)=>{
            alert(err.code);
        })
    }
    return (
        <>
         <MDBContainer className="my-2 text-end">
         <MDBRow>
         <MDBCol>
         <MDBBtn className="mb-4" size="md" onClick={handleClick}>LogOut</MDBBtn>
         </MDBCol>
         </MDBRow>
         </MDBContainer>
        <MDBContainer className="my-5 text-center">
            <h1 className='mb-3'>Welcome</h1>
            <MDBRow>
            <MDBCol md='12'>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' alt='Sample' />
            </div>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Home;
