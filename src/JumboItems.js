import { Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap';
/**
   * 점보트론 items
   */
 const JumboItems = () =>{
    return(
    <div className="jumbotron">
        <h1 className="jumbo_title"> 20% Seson Off </h1>
        <p className="jumbo_subtitle"> this is a simple hero unit, </p>
        <Button variant="primary">Primary</Button>{' '}
    </div>
    )
  }

  export default JumboItems