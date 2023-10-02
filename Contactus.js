import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button,Card,Col,Row,Form,Accordion,Container,Nav,Navbar,Figure,Image,Carousel,ExampleCarouselImage} from 'react-bootstrap';
import './Contactus.css'


function Contactus (){
        return(
           <div className='bodydiv'> 


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
        <Link  className="nav-link text-light ms-4 fw-bold " to="/Shop">Shop</Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Aboutus" className='text-light ms-4 fw-bold'>About </Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Services" className='text-light ms-4 fw-bold '>Services</Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Blog"  className='blog text-light ms-4 fw-bold  '>Blog</Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link href="/Contactus" className='text-light ms-4 fw-bold activee' >Contact</Nav.Link>
        </li>
        <li class="nav-item">
        <i class="bi bi-person ms-4 profile text-light"></i>
        </li>
        <li class="nav-item">
        <i class="bi bi-cart  ms-4 profile text-light"></i>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* nav close */}
           
<div class=" mb-3 ">
  <div class="row g-0">
    <div class="col-md-5 frist">
      <h1 class="card-title  text-white mt-5  mx-5"  style={{paddingTop: '10%',fontSize:'50px'}}><strong>Contact</strong></h1>
        <p class="card-text fw-lighter text-white  mx-5 mt-5">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet <br/>velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <button type="button" class="btn btn-warning mx-5 btn-lg  mt-3 rounded-pill position-relative">
        Shop Now
       </button>  
       <button type="button" class="btn btn-outline-success btn-lg mt-3 rounded-pill position-relative text-light">
       <strong> Explore</strong>
       </button>  
    </div>
    <div class="col-md-7">
      <div class="card-body two">
      <Card.Img variant="top" src="images\couch.png" className='img-fluid '  style={{width: '80%'}} />
      </div>
    </div>
  </div>
</div>






<Container className='mt-5' style={{ width: '59rem' }}>
      <Row>
        <Col xs={1}>
        <Button className='btn btn-success  btn-lg' ><i class="fa-solid fa-location-dot pe-3 " style={{color: '#fafafa',paddingLeft:'19%'}}></i></Button>
        </Col>
        <Col>
        <p>43 Raymouth Rd. Baltemoer, <br/> London 3910</p>
        </Col>
        <Col xs={1}>
        <Button className='btn btn-success  btn-lg' ><i class="fa-solid fa-envelope pe-3 " style={{color: '#fafafa',paddingLeft:'19%'}}></i></Button>
        </Col>
        <Col>
        <p className='mt-3'>info@yourdomain.com </p>
        </Col>

        <Col xs={1}>
        <Button className='btn btn-success  btn-lg' ><i class="fa-solid fa-phone pe-3 " style={{color: '#fafafa',paddingLeft:'19%'}}></i></Button>
        </Col>
        <Col>
        <p className='mt-3'>+1 294 3925 3939</p>
        </Col>
      </Row>
    </Container>



    <Container className='mt-5' style={{ width: '59rem' }}>
      <Row>
        <Col xs={5}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First name</Form.Label>
        <Form.Control type="email" placeholder="name" />
      </Form.Group>
        </Col>

        <Col xs={5}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="email" placeholder="Last name" />
      </Form.Group>
        </Col> <br/>
      
        <Col xs={10}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder=""  style={{fontSize: '140%'}}/>
      </Form.Group>
        </Col> <br/>

        <Col xs={10}>
         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
        </Col> <br/>

 {/* <button type="button" class="btn btn-warning mx-5 btn-lg  mt-3 rounded-pill position-relative"> fdd</button> */}
 <Col xs={3}>
          <button type="button" class="btn btn-dark  mb-5 rounded-pill"  style={{fontSize: '140%'}} > Send Message</button>
        </Col> <br/>

      </Row>
    </Container>

     <div className='bg-light1'>
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
    export default Contactus;