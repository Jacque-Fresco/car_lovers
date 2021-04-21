import login from './login.png';
import './CarsContainer.css';
import CustomCard from './CustomCard.js';
import { Button } from 'react-bootstrap';
import Fera from '../fera/Fera';
import Bmw from '../bmw/Bmw';

const CarsContainer = () => {
    const cars = [
{
    name:"fera",
    image:login,
    url:"ferrari"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
{
    name:"fera",
    image:login,
    url:"bmw"
},
]
let carsContain = [];

cars.forEach(( car ) => {
  carsContain.push(
    <div className="col-lg-3" id="g">
      <CustomCard title={car.name} carsImage={car.image} carsUrl={car.url}/>
    </div>
  )
})


return (
    <div className="row">
      {carsContain}
    </div>
);
};

export default CarsContainer;
