import React from 'react';
import { Button,Card,Col,Row,Form,Accordion,Container,Nav,Navbar,Figure,Image,Carousel,ExampleCarouselImage} from 'react-bootstrap';

import { Route, Link } from 'react-router-dom';
import './Frontt.css'

function Services (){
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
        <Nav.Link href="/Services" className='text-light ms-4 fw-bold activee'>Services</Nav.Link>
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
      <h1 class="card-title  text-white mt-5  mx-5"  style={{paddingTop: '10%',fontSize:'50px'}}><strong>Services</strong></h1>
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



<Container style={{paddingTop:'5%'}}>
    <Row className=' g-5 mb-5'>
    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/truck.svg"     className="img-fluid"  style={{width: '110%'  }} />
      </div>
    </div>
    <h6 className='mt-5 '>Fast & Free Shipping</h6>
    <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/bag.svg"     className="img-fluid    "  style={{width: '100%'  }} />
      </div>
    </div>
          <h6 className='mt-5'>Easy to Shop</h6>
          <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
       <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
       <Image  src="https://themewagon.github.io/furni/images/support.svg"     className="img-fluid    "  style={{width: '100%'  }} />
      </div>
       </div>
        <h6 className='mt-5'>24/7 Support</h6>
        <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20  translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/return.svg"     className="img-fluid    "  style={{width: '100%',marginLright:'50%'  }} />
      </div>
    </div>
     <h6 className='mt-5'>Hassle Free Returns</h6>
     <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>
    </Row>




    <Row className=' g-5 mb-5'>
    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/truck.svg"     className="img-fluid"  style={{width: '110%'  }} />
      </div>
    </div>
    <h6 className='mt-5'>Fast & Free Shipping</h6>
    <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/bag.svg"     className="img-fluid    "  style={{width: '100%'  }} />
      </div>
    </div>
          <h6 className='mt-5'>Easy to Shop</h6>
          <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
       <div className="position-absolute top-20 start-20 mb-5 translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
       <Image  src="https://themewagon.github.io/furni/images/support.svg"     className="img-fluid    "  style={{width: '100%'  }} />
      </div>
       </div>
        <h6 className='mt-5'>24/7 Support</h6>
        <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>

    <Col className='col-lg-3'>
    <div className="position-relative ms-3">
      <div className="position-absolute top-20 start-20  translate-middle rounded-circle bordercss  border border-4 border-white" style={{ width: '50px', height: '50px' }}>
      <Image  src="https://themewagon.github.io/furni/images/return.svg"     className="img-fluid    "  style={{width: '100%',marginLright:'50%'  }} />
      </div>
    </div>
     <h6 className='mt-5'>Hassle Free Returns</h6>
     <p className='footerpe'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
    </Col>
    </Row>


</Container>















                                                                               {/* Crafted with excellent material*/}
<div class="product-section">
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p> <button type="button" class="btn btn-dark mx-5 btn-lg fw-bold  mt-3 rounded-pill position-relative">
        Explore
       </button> </p>
					</div> 
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
              <Card.Img variant="top" src="https://themewagon.github.io/furni/images/product-1.png"  className='img-fluid product-thumbnail'/>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">$50.00</strong>
							<span class="icon-cross">
              <i class="bi bi-plus-lg  icon1 text-white"></i>
							</span>
						</a>
					</div> 
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
            <Card.Img variant="top" src="https://themewagon.github.io/furni/images/product-1.png"  className='img-fluid product-thumbnail'/>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">$78.00</strong>
							<span class="icon-cross">
              <i class="bi bi-plus-lg  icon1 text-white"></i>
							</span>
						</a>
					</div>
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
            <Card.Img variant="top" src="https://themewagon.github.io/furni/images/product-1.png"  className='img-fluid product-thumbnail'/>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">$43.00</strong>
							<span class="icon-cross">
              <i class="bi bi-plus-lg  icon1 text-white"></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
                                                                              {/* Testimonials */}
                                                                              <Container fluid>
          <h1 className='display-6 text-center fw-normal pt-5'>Testimonials</h1>
          <Carousel data-bs-theme='dark' className='p-5'>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{fontSize: '20px', width: '75%'}}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                <Image src='images/person-1.png' fluid roundedCircle style={{width: '75px', height: '100%'}} />
                <h6 className='pt-4'>Maria Jones</h6>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Maria Jones</h6>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container className='d-flex flex-column justify-content-center align-items-center'>
                <p className='text-center py-4' style={{ fontSize: '20px', width: '75%' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                <Image src='images/person-1.png' fluid roundedCircle style={{ width: '75px', height: '100%' }} />
                <h6 className='pt-4'>Maria Jones</h6>
                <p>CEO, Co-Founder, XYZ Inc.</p>
              </Container>
            </Carousel.Item>
          </Carousel>
        </Container>





       <div className='bg-light1'>                                                                     {/* Subscribe to Newsletter */}
        
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
      <Image  src="images\sofa.png"  className="img-fluid   "    style={{width: '100%' ,height:'50%' ,maxWidth:'350px',}} />
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
    export default Services;