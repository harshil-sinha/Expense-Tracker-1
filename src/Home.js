import { MDBContainer, MDBCol, MDBRow} from 'mdb-react-ui-kit';
import React from 'react';
const Home = () =>{
    return (
        <>
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