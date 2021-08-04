import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fab } from '@material-ui/core';
import {Add} from '@material-ui/icons'


// npm install -save styled components
// npm install react-bootstrap@next bootstrap@5.0.2

// npm install @material-ui/icons
// npm install @material-ui/core


function App() {
  return (
    <Container fluid>
      <Row className='My-primary'>
        <Col xs lg="2" className='border-end border-white '></Col>
        <Col lg>
          <div className='My-fab-wrapper'>
            <Fab className='My-fab' aria-label="add">
              <Add />
            </Fab>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
