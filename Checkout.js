import React from "react";
import { Button,Card,Col,Row,Form,Accordion,Container,Nav,Navbar,Figure,Image,Carousel,ExampleCarouselImage} from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';

function Checkout (){
        return(
           <div className="bodydiv"> 

{/* nav open */}
<nav class="navbar navbar-expand-lg navimage1">
  <div class="container">
  <Link  className="nav-link text-light  fw-bold" to="/"> <h2>Furni.</h2></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item "  style={{paddingLeft: '630px'}} >
          
        <a  className="nav-link text-light fw-bold " to="/">Home</a>
        </li>
        <li class="nav-item">
        <Link  className="nav-link text-light ms-4 fw-bold" to="/Shop">Shop</Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Aboutus" className='text-light ms-4 fw-bold'>About </Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Services" className='text-light ms-4 fw-bold'>Services</Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Blog"  className='blog text-light ms-4 fw-bold '>Blog</Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Contactus" className='text-light ms-4 fw-bold' >Contact</Nav.Link>
        </li>
        <li class="nav-item">
        <i class="bi bi-person ms-4 profile text-light"></i>
        </li>
        <li class="nav-item">
          <a href='/Cart'>
        <i class="bi bi-cart  ms-4 profile text-light "></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* nav close */}
<h1 className='text-white  Shop '> <span className='ms-5 fw-bold' style={{fontSize:'50px'}}>Checkout</span>  </h1>

<Container className="mt-5 mb-5">
<Card className="bodydiv"> 
      <Card.Body className="mt-2 mb-2 ">Returning customer? <u>Click here</u> to login</Card.Body>
    </Card>
</Container>



<Container className="ms-5" style={{paddingTop:'5%' }}>
    <Row>
        <Col xs={6} md={6}>
            <h2>Billing Details</h2>
            <Container>
      <div style={{ background: '#fff', padding: '35px', borderRadius: '8px'}}>
        {/* <h2>Select Box Heading</h2> */}
        <Form >
        <Form.Label>Country *</Form.Label>
        <Form.Select aria-label="Default select example">
            
      <option >Select a Country</option>
      <option value="1">India</option>
      <option value="2">Usa</option>
      <option value="3">Canada</option>
    </Form.Select>

          <Row>
            <Col md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="mb-3" type="text" placeholder="Enter first name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="mb-3" type="text" placeholder="Enter last name" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="secondName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control className="mb-3" type="text" placeholder="Company Name" />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Address *</Form.Label>
            <Form.Control className="mb-3" type="text" placeholder="Address *" />
          </Form.Group>

          <Form.Group controlId="thirdName" className="mt-4">
            {/* <Form.Label>Third Name</Form.Label> */}
            <Form.Control className="mb-3 " type="text" placeholder="Apartment , suite , unit etc." />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>State / Country *</Form.Label>
                <Form.Control className="mb-3 " type="email" placeholder="" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>Posta / Zip *</Form.Label>
                <Form.Control type="password" placeholder=" " />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control className="mb-3" type="email" placeholder="" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="password">
                <Form.Label>Phone *</Form.Label>
                <Form.Control type="password" placeholder="Phone Number " />
              </Form.Group>
            </Col>
          </Row>


          <Form>
      {['an account?'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={` Create ${type}`}/>
        </div>
      ))}
    </Form>
    
    <Form>
      {['Different Address?'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check // prettier-ignore
            type={type}
            id={`default-${type}`}
            label={` Ship To A  ${type}`}/>
        </div>
      ))}
    </Form>
<Form>
      <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Order Notes</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Write your notes here..." />
      </Form.Group>
    </Form>
        </Form>
      </div>
    </Container>

        </Col>






        <Col xs={6} md={6}>
            <h2>Coupon Code</h2>
            <div style={{ background: '#fff', padding: '35px', borderRadius: '8px'}}>
        <Form >
          <Row>
            <Col  md={7}>
              <Form.Group controlId="firstName">
                <Form.Label>Enter your coupon code if you have one</Form.Label>
                <Form.Control className="mb-3 mt-4" type="text" placeholder="Coupon Code" />
              </Form.Group>
            </Col>
            <Col md={5}>
             <Button className="btn btn-dark mt-5  rounded" >Apply</Button>
            </Col>
          </Row>
        </Form>
      </div> <br/> <br/>


      <h2>Your Order</h2>
      <div style={{ background: '#fff', padding: '35px', borderRadius: '8px'}}>
      
        <Form >
          <Row>
            <Col md={6}>
             <h6>Product</h6>
            </Col>
            <Col md={6}>
            <h6 className="ms-5 px-5">	Total</h6>
            </Col>
            <hr/>
          </Row>



          <Row>
            <Col md={6}>
             <h6>Top Up T-Shirt x 1</h6>
            </Col>
            <Col md={6}>
            <h6 className="ms-5 px-5">	$250.00</h6>
            </Col>
            <hr/>
          </Row>

          <Row>
            <Col md={6}>
             <h6>Polo Shirt x 1</h6>
            </Col>
            <Col md={6}>
            <h6 className="ms-5 px-5">	$100.00</h6>
            </Col>
            <hr/>
          </Row>

          <Row>
            <Col md={6}>
             <h6>Cart Subtotal</h6>
            </Col>
            <Col md={6}>
            <h6 className="ms-5 px-5">	$350.00</h6>
            </Col>
            <hr/>
          </Row>

          <Row>
            <Col md={6}>
             <h6>Cart Subtotal</h6>
            </Col>
            <Col md={6}>
            <h6 className="ms-5 px-5">	$350.00</h6>
            </Col>
            <hr/>
          </Row>

        <Row>
        <Col md={12}>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header> <u>Direct Bank Transfer</u></Accordion.Header>
        <Accordion.Body>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Col>
        </Row>
         
        <Row>
        <Col className="mt-3" md={12}>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header> <u>Cheque Payment</u></Accordion.Header>
        <Accordion.Body>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Col>
        </Row>

        <Row>
        <Col className="mt-3" md={12}>
        <Accordion>
        <Accordion.Item eventKey="0">
        <Accordion.Header> <u>Payment</u></Accordion.Header>
        <Accordion.Body>
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
        </Accordion.Body>
        </Accordion.Item>
        </Accordion>
        </Col>
        </Row>

        <Row>
        <Col className="mt-5" md={6}>
        
        <button type="button" class="btn btn-dark  mb-5 rounded-pill"  style={{fontSize: '140%'}} > <strong>Place Order</strong></button>
        </Col>
        </Row>
        </Form>
      </div>

        </Col>

    </Row>
</Container>

<div className='bg-light1 mt-5'>
    <Container style={{paddingTop:'5%'}}>
 <Row className='bg-white' >
 <Col xs={12} md={9}  style={{paddingTop: '10%'}} >
    <h4 className='Subscribe'> <i class="fa-regular fa-envelope" style={{color: ' #878787'}}></i>  Subscribe to Newsletter</h4>
<Row>
      <Col className='rounded'xs={12} md={4}>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder=" Enter your name"  style={{fontSize: '100%'}} />
      </Form.Group>
</Col>
        <Col  className='' xs={12} md={4}>
        <Form.Group className="mb-3 ms-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Enter your password" />
        </Form.Group>
        </Col>
        <Col  className='' xs={12} md={4}>
        <Button className='btn btn-success  btn-lg'  ><i class="fa-solid fa-paper-plane pe-3" style={{color: '#fafafa', paddingLeft:'25%'}}></i></Button>
        </Col>
        </Row>                
</Col>
        <Col xs={6} md={3}>
       <div  class="img-wrap">
      <Image  src="images\sofa.png"  className="img-fluid" style={{width: '100%' ,height:'50%' ,maxWidth:'350px',}} />
      </div>
      </Col>
      </Row>
      </Container>


{/* Footer */}

<Container className='bg-ligt'>
<Row className=' g-5 mb-5'>
  <Col className='col-lg-4'>
    <h1 className='furi'>Furni.</h1>
    <p className='footerpe'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
    <Link href="#"><span class="fa fa-brands fa-facebook-f custom-social "></span></Link>
    <Link href="#"><span class="fa fa-brands fa-twitter custom-social ms-2"></span></Link>
    <Link href="#"><span class="fa fa-brands fa-instagram custom-social ms-2"></span></Link>
    <Link href="#"><span class="fa fa-brands fa-linkedin custom-social ms-2 "></span></Link>
</Col>

<Col className='col-lg-2  '>
<Link href="#"  style={{textDecoration:'none'}}><p className='mt-5 footerpe'>About us</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className='footerpe'>Services</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className=' footerpe'>Blog</p></Link> 
<Link href="#"  style={{textDecoration:'none'}}> <p className=' footerpe'>Contact us</p></Link> 
</Col>
<Col className='col-lg-2  '>
<Link href="#"  style={{textDecoration:'none'}}><p className='mt-5 footerpe'>Support</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className='footerpe'>Knowledge base</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className=' footerpe'>Live chat</p></Link> 
</Col>
<Col className='col-lg-2  '>
<Link href="#"  style={{textDecoration:'none'}}><p className='mt-5 footerpe'>Jobs</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className='footerpe'>Our team</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className=' footerpe'>Leadership</p></Link> 
<Link href="#"  style={{textDecoration:'none'}}> <p className=' footerpe'>Privacy Policy</p></Link> 
</Col>
<Col className='col-lg-2  '>
<Link href="#"  style={{textDecoration:'none'}}><p className='mt-5 footerpe'>Nordic Chair</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className='footerpe'>Kruzo Aero</p></Link>
<Link href="#"  style={{textDecoration:'none'}}><p className=' footerpe'>Blog</p></Link> 
<Link href="#"  style={{textDecoration:'none'}}> <p className=' footerpe'>Ergonomic Chair</p></Link> 
</Col>
<hr></hr>
</Row>
</Container>
                                                                               {/*footerlast */}
 <Container>
  <Row className=' g-5 mb-5'>
    <Col className='col-lg-6'>
      <p className='footerpe'>Copyright ©2023. Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
    </Col>
    <Col className='col-lg-6'>
    <Link href="#"  style={{textDecoration:'none'}}> <p className=' footerpe text-end'>Terms & Conditions <span className='ms-3'>Privacy Policy</span></p></Link> 
    </Col>

  </Row>
  </Container>


  </div>  












           
            </div>
        )
}
export default Checkout