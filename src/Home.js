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
        <MDBContainer className="my-2 text-center">
            <MDBRow>
            <MDBCol md='12'>
            <h1 className='mb-3'>Welcome to Expense Tracker</h1>
            </MDBCol>
            </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Home;
