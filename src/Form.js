import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
} from 'mdb-react-ui-kit';

export default function Form() {
  return (
    <MDBContainer fluid className='mt-5'>
    <form>
    <MDBRow className='mb-4 justify-content-end'>
        <MDBCol className='col-md-4'>
        <label htmlFor="">Enter Full Name:</label>
          <MDBInput id='form6Example1' />
        </MDBCol>
        <MDBCol className='col-md-4'>
        <label htmlFor="">Profile Photo URL</label>
          <MDBInput id='form6Example2'/>
          <MDBBtn type='submit' block className='mt-3'>Sign in</MDBBtn>
        </MDBCol>
      </MDBRow>
    {/* </MDBCol>
    </MDBRow> */}
    </form>
    </MDBContainer>
  );
}