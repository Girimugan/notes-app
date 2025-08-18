import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/img/Shoe.jpg';
import banner2 from '../assets/img/Light.jpg';
import banner3 from '../assets/img/Shoe.jpg';
import image1 from '../assets/img/category_img_01.jpg';
import image2 from '../assets/img/category_img_02.jpg';
import image3 from '../assets/img/category_img_03.jpg';
import image4 from "../assets/img/image4.jpg";
import image5 from "../assets/img/image5.jpg";
import image6 from "../assets/img/image6.jpg";
import image7 from '../assets/img/searchbar1.png';
import image8 from '../assets/img/shoping.png';
import image9 from '../assets/img/contact.png';
import mail from '../assets/img/mail.png';

function Reacttemp() {
  return <>

    <div className="box1">
      <img src={mail} className='myimage4' alt="" />
      <p className='para1'>info@company.com</p>
    </div>

    <Navbar expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand className='title1' href="#home">Zay </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="list d-flex justify-content-center custom-nav">
            <Nav.Link href=""><a href="">Home</a></Nav.Link>
            <Nav.Link href=""><a href="">About</a></Nav.Link>
            <Nav.Link href=""><a href="">Shop</a></Nav.Link>
            <Nav.Link href=""><a href="">Contact</a></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <img src={image7} className='myimage1' alt="" />
        <img src={image8} className='myimage2' alt="" />
        <img src={image9} className='myimage3' alt="" />
      </Container>
    </Navbar>

    <div className="bgclr">
      <Carousel>
        <Carousel.Item>
          <div className="container">
            <div className="row align-items-center" style={{ height: "600px" }}>
              <div className="col-md-6">
                <div className="text-start">
                  <h1 className='head1'>Zay eCommerce</h1>
                  <h2 className='head2'>Tiny and Perfect eCommerce Template</h2>
                  <p className='para2'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src={banner1}
                  alt="First slide"
                  style={{ height: "100%", width: "90%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row align-items-center" style={{ height: "600px" }}>
              <div className="col-md-6">
                <div className="text-start">
                  <h1 className='head1'>Repr in voluptate</h1>
                  <h2 className='head2'>Aliquip ex ea commodo consequat</h2>
                  <p className='para2'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src={banner2}
                  alt="First slide"
                  style={{ height: "100%", width: "90%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row align-items-center" style={{ height: "600px" }}>
              <div className="col-md-6">
                <div className="text-start">
                  <h1 className='head1'>Zay eCommerce</h1>
                  <h2 className='head2'>Ullamco laboris nisi ut</h2>
                  <p className='para2'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid"
                  src={banner3}
                  alt="First slide"
                  style={{ height: "100%", width: "90%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="background-color">
      <div className="box2">
        <h1 className="d-flex justify-content-center head3">Categories of The Month</h1>
        <p className='para3'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="box3">
              <img src={image1} className='picture1' alt="" />
              <h4 className='mt-3'>Watches</h4>
              <button className="btn mt-2"><a href="">Go Shop</a></button>
            </div>
          </div>
          <div className="col">
            <div className="box4">
              <img src={image2} className='picture2' alt="" />
              <h4 className='mt-3'>Shoes</h4>
              <button className="btn mt-2"><a href="">Go Shop</a></button>
            </div>
          </div>
          <div className="col">
            <div className="box5">
              <img src={image3} className='picture3' alt="" />
              <h4 className='mt-3'>Accories</h4>
              <button className="btn mt-2"><a href="">Go Shop</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="background-color1">
      <div className="box6">
        <div className="d-flex justify-content-center head4">Featured Product</div>
        <div className="para4">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
      </div>
      <div className="container">
        <div className="row d-flex ">
          <div className="col-auto">
            <div className="box7">
              <img src={image4} alt="" />
              <p className='para7'><a href="">$240.00</a></p>
              <h3 className='head5 '>Gym Weight</h3>
              <p className='para5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</p>
              <p className='para6'><a href="">Reviews (42)</a></p>
            </div>
          </div>
          <div className="col-auto">
            <div className="box8">
              <img src={image5} alt="" />
              <p className='para7'><a href="">$240.00</a></p>
              <h3 className='head5'>Cloud Nike Shoes</h3>
              <p className='para5'>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</p>
              <p className='para6'><a href="">Reviews (45)</a></p>
            </div>
          </div>
          <div className="col-auto">
            <div className="box9">
              <img src={image6} alt="" />
              <p className='para7'><a href="">$240.00</a></p>
              <h3 className='head5'>Summer Addides Shoes</h3>
              <p className='para5'>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
              <p className='para6'><a href="">Reviews (48)</a></p>
            </div>
          </div>   
        </div>
      </div>
    </div>

  </>
}

export default Reacttemp; 