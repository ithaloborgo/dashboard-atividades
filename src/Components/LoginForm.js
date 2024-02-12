
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../img/LogoWeb.jpg';

//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoginForm() {
  return (
    
  <Container>
        <Row className="vh-100 d-flex align-items-center justify-content-center">
            <Col xs={6} className='form-Login'>

              <Row className="justify-content-center">
                <Col xs={12} sm={4} md={10} lg={10} className="text-center">
                    <img src={Logo} alt="logo"/>
                </Col>
              </Row>

              <Row className="justify-content-center">
                  <Col xs={12} sm={4} md={10} lg={10} >
                    <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control className='custom_Input' type="Usuario" placeholder="Usuario" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Senha</Form.Label>
                      <Form.Control type="password" className='custom_Input' placeholder="Senha" />
                    </Form.Group>
                    <div class="text-center">
                      <Button variant="primary" type="submit" className='Custom_btn'>
                        Login
                      </Button>
                    </div>
                    </Form>
                  
                  </Col>                 
              </Row>
            </Col>
          </Row>
      </Container>  
    
  );
}

export default LoginForm;
