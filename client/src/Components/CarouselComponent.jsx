import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import meta1 from '../assets/images/meta1.jpg'
import meta2 from '../assets/images/meta2.jpg'
import meta3 from '../assets/images/meta3.jpg'

const CarouselComponent = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={meta1} className='imgone' width={1500} height={400} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={meta2} className='imgtwo' width={1500} height={400} />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <img src={meta3} className="imgthree" width={1500} height={400} />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent
