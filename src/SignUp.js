import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const SignUp = () =>{
    return (
        <>
            <Container>
            <Row>
                <Col className='mt-4'>
                <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" required/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Confirm Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Confirm Password" required/>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Sign Up</Button>
                </Col>
            </Form.Group>
            </Form>
                </Col>
            </Row>
            </Container>
     
        </>
    )
}
export default SignUp;