
import Sidebar from './Components/Sidebar';
import Content_teste from './Components/Content_teste';
import { Container } from 'react-bootstrap';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Container className='Custom_Container'>
      <Sidebar />
      <Content_teste />
    </Container>
    
  );
}

export default App;
