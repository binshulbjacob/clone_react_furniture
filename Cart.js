import React from "react";
import { Button,Card,Col,Row,Form,Accordion,Container,Nav,Navbar,Figure,Image,Carousel,ExampleCarouselImage} from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';

function Cart (){
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

<h1 className='text-white  Shop '> <span className='ms-5 fw-bold' style={{fontSize:'50px'}}>Cart</span>  </h1>


<Container style={{paddingTop:'10%'}}>
      <Row>
        <Col>
          <h6>Image</h6>
        </Col>
        <Col>
          <h6>Product</h6>
        </Col>
        <Col>
          <h6>Price</h6>
        </Col>
        <Col>
          <h6>Quantity</h6>
        </Col>
        <Col>
          <h6>Total</h6>
        </Col>
        <Col>
          <h6>Remove</h6>
        </Col>
      </Row>
      <hr/>
    </Container>



    <Container>
      <Row>
        <Col>
        <Image src="https://themewagon.github.io/furni/images/product-1.png" alt="Image Alt Text" fluid />
        </Col>
        <Col>
          <h6 className="mt-5">Product 1</h6>
        </Col>
        <Col>
          <h6 className="mt-5">$49.00</h6>
        </Col>
        <Col>
        <Form.Control  size="sm" type="text" placeholder="0" className="mt-5 ms-2" style={{width:'20%'}}/> 
        </Col>
        <Col>
          <h6 className="mt-5">$49.00</h6>
        </Col>
        <Col>
          <h6 className="mt-5"> x </h6>
        </Col>
      </Row>
      <hr/>
    </Container>


    <Container>
      <Row>
        <Col>
        <Image src="https://themewagon.github.io/furni/images/product-2.png" alt="Image Alt Text" fluid />
        </Col>
        <Col>
          <h6 className="mt-5">Product 2</h6>
        </Col>
        <Col>
          <h6 className="mt-5">$49.00</h6>
        </Col>
        <Col>
        <Form.Control  size="sm" type="text" placeholder="1" className="mt-5 ms-2" style={{width:'20%'}}/> 
        </Col>
        <Col>
          <h6 className="mt-5">$49.00</h6>
        </Col>
        <Col>
          <h6 className="mt-5"> x </h6>
        </Col>
      </Row>
      <hr/>
    </Container>

    {/* <button type="button" class="btn btn-dark  rounded-pill"  style={{fontSize: '140%'}} > Update Cart </button> */}

    <Container>
      <Row>
        <Col className=' ' xs={12} md={9}>
        <button type="button" class="btn btn-dark  rounded-pill"  style={{fontSize: '140%'}} >  Update Cart </button> 
        <button type="button" class="btn btn-dark ms-5 me-5 mx-5   rounded-pill"  style={{fontSize: '140%'}} > Continue Shopping </button> 
        </Col>

        <Col className='' xs={12} md={3}>

          <h6 className="mt-5">CART TOTALS</h6>
          <hr/>
          <p>Subtotal&nbsp;&nbsp; &nbsp; <span className="ms-5">$230.00</span></p>
          <p> Total &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; <span className="ms-5">$230.00</span> </p>
        </Col>
      </Row>
    </Container>




    <Container className="mb-5">
      <Row>
        <Col>
        <h5>Coupon</h5>
        <p>Enter your coupon code if you have one</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Coupon Code" />
      </Form.Group>
        </Col>
        <Col className="mt-3">
        <button type="button" class="btn btn-dark mt-5 rounded-pill"  style={{fontSize: '140%'}} > <h5 className="mt-1">Apply Coupon</h5>  </button> 
        </Col>
        <Col className='' xs={12} md={3}>
          <a href="/Checkout">
        <button type="button" class="btn btn-dark mt-3 pt-3 pb-3 px-3 rounded-pill"  style={{fontSize: '140%'}} > <h5 className="mt-1">Procee To Checkout</h5>  </button> </a>
        </Col>
      </Row>
    </Container>








    <div className='bg-light1'>                                                                           {/* Subscribe to Newsletter */}
        
        <Container className="mt-5" style={{paddingTop:'5%'}}>
         <Row  >
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
                <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                </Col>
                <Col  className='' xs={12} md={4}>
                <Button className='btn btn-success  btn-lg'  ><i class="fa-solid fa-paper-plane pe-3" style={{color: '#fafafa', paddingLeft:'25%'}}></i></Button>
                </Col>
                </Row>                
        </Col>
                <Col xs={6} md={3}>
               <div  class="img-wrap">
              <Image  src="images/sofa.png"  className="img-fluid   "    style={{width: '100%' ,height:'50%' ,maxWidth:'350px',}} />
              </div>
              </Col>
              </Row>
              </Container>
        
                                                                                       {/*footer */}
        <Container >
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
         <Container >
          <Row className=' g-5'>
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
export default Cart