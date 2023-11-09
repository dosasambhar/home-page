import React from 'react'
import "./Home.css"
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Tomato from './Images/tomato.jpeg';
import Ginger from './Images/ginger.jpeg';
import Onion from './Images/onion.jpeg';

const Home = () => {
  return (
    <div>
      <div className='head'>
        <p className='head-heading'><h1>Basket</h1><span> 3 items</span>{" "}</p>
      </div>

     <div className='stack-stack-cont'>
     <div className='stack-cont'>
     <div className='stack'>
     <Stack className='stack-stack'>
      <div className="p-img"> <img src={Tomato} alt="img" style={{ width: '130px', height: '120px' , borderRadius: '20px 0 0 20px'}}/> </div>
      <div className="p-2"><h5>
        Heirloom tomato</h5>
        <h5 >$5.99/lb</h5>
        <div>
          <Button></Button>
        </div>
        </div>
      <div className="stack-3"><h5>$5.99</h5></div>
    </Stack>
     </div>

     <div className='stack'>
     <Stack direction="horizontal" className='stack-stack' style={{marginTop:'-1rem'}}>
      <div className="p-img"> <img src={Ginger} alt="img" style={{ width: '130px', height: '120px' , borderRadius: '20px 0 0 20px'}}/> </div>
      <div className="p-2"><h5>
        Organic ginger</h5>
        <h5>$12.99/lb</h5>
        <div>
          <Button></Button>
        </div>
        </div>
      <div className="stack-4"><h5>$6.50</h5></div>
    </Stack>
     </div>

     <div className='stack' style={{marginTop:'-16px'}}>
     <Stack direction="horizontal" className='stack-stack'>
      <div className="p-img"> <img src={Onion} alt="img" style={{ width: '130px', height: '120px' , borderRadius: '20px 0 0 20px'}}/> </div>
      <div className="p-2"><h5>
        Sweet onion</h5>
        <h5>$2.99/lb</h5>
        <div>
          <Button></Button>
        </div>
        </div>
      <div className="stack-5"><h5>$14.95</h5></div>
    </Stack>
     </div>
      </div>


      <div className='stack-cont-2'>
        <h5>Order summary</h5>

        <div className='stack-cont-3'>
        <Stack direction="horizontal">
      <div className="p-2">Subtotal</div>
      <div style={{paddingLeft: '160px'}}>$27.44</div>
    </Stack>

    <Stack direction="horizontal">
      <div className="p-2">Shipping</div>
      <div style={{paddingLeft: '160px'}}>$3.99</div>
    </Stack>

    <Stack direction="horizontal">
      <div className="p-2">Tax</div>
      <div style={{paddingLeft: '200px'}}>$2.00</div>
    </Stack>

    <Stack direction="horizontal">
      <div className="p-2">Total</div>
      <div style={{paddingLeft: '180px'}}>$33.43</div>
    </Stack>

    <div>
      <Button className='stack-btn'> Continue to payment <i class="fa-solid fa-arrow-right" style={{paddingLeft:'90px'}}></i> </Button>
    </div>
        </div>
      </div>
     </div>

    </div>
  )
}

export default Home