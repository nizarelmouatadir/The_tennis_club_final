import { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const Home  = () => {

    const [field, setName] = useState('');


    const handleClick = () => {
        setName('Sent');
    }
    
    return ( 
        <div className="home">
            <MDBBtn onClick={handleClick}>SEND</MDBBtn><small>{name}</small>
        </div>
     );
}
 
export default FieldButtons;