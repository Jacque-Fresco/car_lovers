import login from './login.png';
import './CustomCard.css';
import { Card, Button  } from "react-bootstrap";


const CustomCard = ({title, carsImage, carsUrl}) => {
  return (
    <Card id="card1">
  <Card.Img variant="top" src={ carsImage }/>
  <Card.Body>
    <Card.Title id="title">{ title }</Card.Title>
    <Card.Text id="text">
      fasdfasfsdfsafas
    </Card.Text>
    <Button variant="light" href={ carsUrl } id="btn">Read more</Button>
  </Card.Body>
</Card>
  );
};

export default CustomCard;
