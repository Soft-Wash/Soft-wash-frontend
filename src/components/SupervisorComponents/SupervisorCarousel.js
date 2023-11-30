import Carousel from 'react-bootstrap/Carousel';

function SupervisorCarousel() {
  return (
    <div>
        {/* <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000}>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> */}
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                {/* <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
                /> */}
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=eee"
                alt="Second slide"
                /> */}
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                alt="Third slide"
                /> */}
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default SupervisorCarousel