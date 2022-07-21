import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import tennis_court_hull from './assets/tennis_court_hull.jpg';
import tennis_court_hull_location from './assets/tennis_court_hull_location.jpg';
import tennis_court_ottawa1 from './assets/tennis_court_ottawa1.jpg';
import tennis_court_ottawa1_location from './assets/tennis_court_ottawa1_location.jpg';
import tennis_court_ottawa2 from './assets/tennis_court_ottawa2.jpg';
import tennis_court_ottawa2_location from './assets/tennis_court_ottawa2_location.jpg';
import Roger_Federer from './assets/Roger_Federer.jpg';
import Rafael_Nadal from './assets/Rafael_Nadal.jpg';
import Novak_Djokovic from './assets/Novak_Djokovic.jpg';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBInputGroup, MDBIcon  } from 'mdb-react-ui-kit';
import Home from './components/Home';

function App() {
  return (
    <div className="App bg-secondary">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">The Tennis Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#field">Fields</Nav.Link>
              <Nav.Link href="#opponents">Opponents</Nav.Link>
              <Nav.Link href="#booking">Booking</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1>" You can now meet and play with nearby tennis lovers and " <br /> choose form a variety of tenis courts.</h1>
      <br /><br /><br /><br /><br />

      <section id='field'>

        <h2>Choose a tennis court.</h2>

        <FloatingLabel
          controlId="floatingInput"
          label="Enter an adress"
          className="mx-auto mb-3 text-start" style={{ width: "40%" }}
        >
          <Form.Control type="adress" placeholder="type adresse" />
        </FloatingLabel>

        <MDBRow className='m-5' style={{ height: "180px" }}>
          <MDBCol md='4' style={{ width: "20%" }}>
            <img src={tennis_court_hull} className='img-fluid' style={{ height: "100%", width: "100%" }} alt='tennis_court_hull' />
          </MDBCol>

          <MDBCol md='4' class="square border border-dark border-2 text-start fw-bold fs-4 pt-2" style={{ width: "60%" }}>
            Name: Tennis Courts Parc de l'ile <br />
            Address: 315 Rue Saint-Rédempteur, J8X 2T4 <br />
            Opening hours: 7am - 10pm<br />
            <MDBBtn className='mt-3 mx-5 text-left bg-dark border-dark'><a class='text-white' href='#opponents'>Select Field</a> </MDBBtn>
          </MDBCol>
          <MDBCol md='4' style={{ width: "20%" }}>
            <a href="https://www.google.com/maps/place/Tennis+Courts+Parc+de+l'ile/@45.4368596,-75.7264591,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce0592bcc91047:0xe3b49dd3c65fecd1!8m2!3d45.4368596!4d-75.7242704">
              <img src={tennis_court_hull_location} className='img-fluid shadow-5' style={{ height: "100%", width: "100%" }} alt='tennis_court_hull_location' />
            </a>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mx-5' style={{ height: "180px" }}>
          <MDBCol md='4' style={{ width: "20%" }}>
            <img src={tennis_court_ottawa1} className='img-fluid' style={{ height: "100%", width: "100%" }} alt='tennis_court_ottawa' />
          </MDBCol>
          <MDBCol md='4' class="square border border-dark border-2 text-start fw-bold fs-4 pt-2" style={{ width: "60%" }}>
            Name: Bordeleau Park Tennis Court <br />
            Address: 349 Bruyère St, Ottawa, K1N 5G9 <br />
            Opening hours: 9am - 9pm <br />
            <MDBBtn className='mt-4 mx-5 text-left bg-dark border-dark'><a class='text-white' href='#opponents'>Select Field</a> </MDBBtn>
          </MDBCol>
          <MDBCol  md='4' style={{ width: "20%" }}>
            <a href="https://www.google.com/maps/place/Bordeleau+Park/@45.4356631,-75.6901779,17z/data=!4m9!1m2!2m1!1sBordeleau+Park+Tennis+Court+!3m5!1s0x4cce055a3c8b4ad5:0xeebb35c8ef11b9f4!8m2!3d45.4358535!4d-75.6871147!15sChxCb3JkZWxlYXUgUGFyayBUZW5uaXMgQ291cnQgkgEMdGVubmlzX2NvdXJ0">
              <img src={tennis_court_ottawa1_location} className='img-fluid shadow-5' style={{ height: "100%", width: "100%" }} alt='tennis_court_ottawa1_location' />
            </a>
          </MDBCol>
        </MDBRow>

        <MDBRow className='m-5 pt-2' style={{ height: "190px" }}>
          <MDBCol md='4' style={{ width: "20%" }}>
            <img src={tennis_court_ottawa2} className='img-fluid' style={{ height: "100%", width: "100%" }} alt='tennis_court_ottawa2_location' />
          </MDBCol>
          <MDBCol md='4' class="square border border-dark border-2 text-start fw-bold fs-4 pt-2" style={{ width: "60%" }}>
            Name: Public Tennis Courts <br />
            Address: 80 Chamberlain Ave, ON K1S 3Z2 <br />
            Opening hours: 8am - 10pm<br />
            <MDBBtn className='mt-2 mx-5 text-left bg-dark border-dark'><a class='text-white' href='#opponents'>Select Field</a> </MDBBtn>
          </MDBCol>
          <MDBCol md='4' style={{ width: "20%" }}>
            <a href="https://www.google.com/maps/place/Public+Tennis+Courts/@45.4064307,-75.6972694,17z/data=!4m13!1m7!3m6!1s0x4cce05b6eefbcc9f:0x702beb6221b3d250!2sChamberlain+Park,+80+Chamberlain+Ave.,+Ottawa,+ON+K1S+3Z2!3b1!8m2!3d45.406259!4d-75.695519!3m4!1s0x4cce05b68c10ee2b:0xa02c7fbe6e24e144!8m2!3d45.405796!4d-75.69635">
              <img src={tennis_court_ottawa2_location} className='img-fluid shadow-5' style={{ height: "100%", width: "100%" }} alt='tennis_court_ottawa2_location' />
            </a>
          </MDBCol>
        </MDBRow>
      </section>

      <br /><br /><br />

      <section id='opponents'>
        <h2 class='mb-5'>Pick your opponent.</h2>
        <MDBContainer>

          <MDBRow>
            <MDBCol size='md' class="mx-3" style={{ width: "30%" }}>
              <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={Roger_Federer} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Roger Federer</MDBCardTitle>
                  <MDBCardText>
                    Number of games played: 171. <br />
                    Wins/losses: 111/60.<br />
                    Win rate: 55%.
                  </MDBCardText>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Send him a message"
                    className="mx-auto mb-3 text-start fst-italic" style={{ width: "90%" }}
                    
                  >
                    <Form.Control type="Conversation" placeholder="type message" />
                  </FloatingLabel>
                  <Home />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol size='md' class="mx-3" style={{ width: "30%" }}>
              <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={Rafael_Nadal} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Rafael Nadal</MDBCardTitle>
                  <MDBCardText>
                    Number of games played: 145. <br />
                    Wins/losses: 103/42. <br />
                    Win rate: 55%.
                  </MDBCardText>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Send him a message"
                    className="mx-auto mb-3 text-start fst-italic" style={{ width: "90%" }}
                  >
                    <Form.Control type="Cconversation" placeholder="type message" />
                  </FloatingLabel>
                  <Home />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

            <MDBCol size='md' class="mx-3" style={{ width: "30%" }}>
              <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={Novak_Djokovic} className='img-fluid' style={{ height: "100%", width: "100%" }} fluid alt='...' />
                  <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>Novak Djokovic</MDBCardTitle>
                  <MDBCardText>
                    Number of games played: 129. <br />
                    Wins/losses: 89/40. <br />
                    Win rate: 55%.
                  </MDBCardText>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Send him a message"
                    className="mx-auto mb-3 text-start fst-italic" style={{ width: "90%" }}
                  >
                    <Form.Control type="Cconversation" placeholder="type message" />
                  </FloatingLabel>
                  <Home />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <br /> <br /> <br /> <br /> 
      <section id='booking'>
<br /> <br /><br /> <br /> 

      <h2>Make reservation</h2>

      <Container className='my-3'>
        <MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' placeholder="Enter you first name/Entrez votre prénom.." />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' placeholder="Enter you last name/Entrez votre nom de famille." />
      </MDBInputGroup>

      <MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' placeholder="Enter your email address/Entrez votre adresse email." />
      </MDBInputGroup>
      
      <MDBInputGroup className='mb-3'>
        <input className='form-control' type='text' placeholder="Enter the date for the booking/Entrez la date de la réservation (YYYY-MM-DD-hour-min)" />
      </MDBInputGroup>
      
      <MDBBtn>
        Confirm reservation
      </MDBBtn>

      </Container>
      </section>

      <br /> <br /> <br /> <br /><br /><br /><br />
      

<br /><br /><br /><br /><br /><br /><br />
    </div>

  );
}

export default App;
