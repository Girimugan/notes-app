import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from './assets/img/category_img_01.jpg'
import banner2 from './assets/img/category_img_02.jpg'
import banner3 from './assets/img/category_img_03.jpg'
import './Demoslide.css';

const Demoslide = () => {
    return (
        <div className="container mt-5">
            <Carousel>
                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-left">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="d-block"
                                src={banner1}
                                alt="First slide"
                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />

                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-left">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-md-6">
                             <img
                                className="d-block"
                                src={banner2}
                                alt="Second slide"
                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-left">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        <div className="col-md-6">
                             <img
                                className="d-block"
                                src={banner3}
                                alt="third slide"
                                style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};



export default Demoslide;
    