import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styling from './style/style.module.css';
import PrevArrow from '../../shared/Arrow/PrevArrow';
import NextArrow from '../../shared/Arrow/NextArrow';
import imgGroup1 from '../../../assests/imgs/product/Group 9160.svg';


const Header = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Container>
            <Row className="d-flex justify-content-between align-items-center">
                <Col lg="6">
                    <Slider {...settings}>
                        <div>
                            <img src={imgGroup1} alt="" className={`img-fluid `} />
                        </div>
                        <div>
                            <img src={imgGroup1} alt="" className={`img-fluid`} />
                        </div>
                        <div>
                            <img src={imgGroup1} alt="" className={`img-fluid `} />
                        </div>
                    </Slider>
                </Col>
                <Col lg="6" md="10" sm="12">
                    <div className={`${styling.desc} d-flex flex-column justify-content-between align-items-center`}>
                        <h5>براندات نسائي عالمية</h5>
                        <h1 className="text-dark text-opacity-75">أحدث أدوات الجمال</h1>
                        <h5>براندات نسائي عالمية</h5>
                        <button variant="info">اكتشف الآن</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;