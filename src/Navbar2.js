import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "./Navbar2.css";

const Navbar2 = () =>{
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {/* <NavLink to="/home" className='bar'>Home</NavLink> */}
                  <NavLink to='/signup' className='bar'>Sign Up</NavLink>
                  <NavLink to='/login' className='bar'>Login</NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    )
}
export default Navbar2;
