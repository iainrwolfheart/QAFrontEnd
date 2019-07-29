import React from 'react';
import '../homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import darkknight from '../assets/darkknight.jpg';
import inception from '../assets/inception.jpg';
import kong from '../assets/kong.jpg';
import tintin from '../assets/tintin.jpg';
import clash from '../assets/clash.jpg';
import madmax from '../assets/madmax.jpg';

export default class Harley extends React.Component {

    render() {
        return (
            <div className="homepage">
              <h1 className="headercurrent">Current Listings</h1>
                <Carousel style={{height: '600px', width:'1000px'}} className="carouselcurrent">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tintin}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={clash}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={inception}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1 className="headerfuture">Future Listings</h1>
                <Carousel style={{height: '600px', width:'1000px'}} className="carouselfuture">
                    <Carousel.Item className="carouselitem">
                        <img
                            className="d-block w-100"
                            src={darkknight}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={madmax}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={kong}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );

    }



}
