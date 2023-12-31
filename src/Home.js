import { MDBContainer, MDBCol, MDBRow,MDBBtn} from 'mdb-react-ui-kit';
import React from 'react';
import { signOut } from 'firebase/auth';
import { database } from './firebase';
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
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
        <MDBContainer fluid className="my-2">
            <MDBRow>
            <MDBCol>
            <h3 className='text-center'>Welcome to Expense Tracker</h3>
            </MDBCol>
            {/* <MDBCol md='6' justify-content-end sm='4' size='6' lg='3'>
            <span>Your profile is incomplete <NavLink to="/form" style={{textDecoration:"none"}}>complete now</NavLink></span>
            </MDBCol> */}
            </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Home;
