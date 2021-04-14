import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';


const Home = () => {
  return (

    <section id="slider">


      <div className="container mt-4">
        <div className="row">
          <Carousel>
            <CarouselItem className="item " interval={3000}  >
              <div>
                <img className="img-slider" src="https://www.mediaweek.com.au/wp-content/uploads/2019/12/jumanji-the-next-level-.gif" alt="" />
              </div>
            </CarouselItem>

            <CarouselItem className="item" interval={3000} fade='true'>

              <div>
                <img className="img-slider" src="https://miro.medium.com/max/3000/0*9eO1lirHDIFk2blU.jpg" alt="" />
              </div>
            </CarouselItem>

            <CarouselItem className="item" interval={3000} fade='true'>

              <div >
                <img className="img-slider" src="https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2019/09/01093013/Endgame-Lead-1.jpg" alt="" />
              </div>
            </CarouselItem>
          </Carousel>



        </div>
      </div>




    </section>



    // <Container>
    //   <Row>
    //     <Carousel>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/image1.jpeg"
    //           alt="First slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>First slide label</h3>
    //           <p>
    //             Nulla vitae elit libero, a pharetra augue mollis interdum.
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/image2.jpeg"
    //           alt="Second slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>Second slide label</h3>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <img
    //           className="d-block w-100"
    //           src="../images/images.jpeg"
    //           alt="Third slide"
    //         />
    //         <Carousel.Caption>
    //           <h3>Third slide label</h3>
    //           <p>
    //             Praesent commodo cursus magna, vel scelerisque nisl
    //             consectetur.
    //           </p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //     </Carousel>
    //   </Row>
    // </Container>
  );
};

export default Home;