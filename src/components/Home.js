import { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const Home  = () => {

    const [name, setName] = useState('');


    const handleClick = () => {
        setName('Sent');
    }
    
    return ( 
        <div className="home">
            <MDBBtn onClick={handleClick}><a class='text-white' href="#booking">SEND</a></MDBBtn><small>{name}</small>
        </div>
     );
}
 
export default Home;