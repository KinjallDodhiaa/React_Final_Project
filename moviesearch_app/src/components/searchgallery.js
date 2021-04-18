import React, { useState } from "react";
import { Card, Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";

const SearchGallery = (props) => {

  const [preview, setPreview] = useState({ show: false, moviePreview: '', title: '', type: '', year: '' });

  const handleClose = () => setPreview({ show: false, moviePreview: '', title: '', type: '', year: '' });

  const previewShow = (poster, title, type, year) => {
    setPreview({ show: true, moviePreview: poster, title: title, type: type, year: year })

  }

  switch (props.data.status) {
    case "START":
      return <h1>LOADING...</h1>;
    case "FAILED":
      return <h1>FAILED</h1>;
    case "SUCCESS":
      return (
        <Container>
          <Row>
            {props.data.data.map((elm, idx) => (
              <Col key={idx} className="p-3" lg="3" md="3" sm="1">
                <Card className="cardBorder" style={{ width: "15rem" }}>
                  <Card.Img
                    onClick={() => previewShow(elm.Poster, elm.Title, elm.Type, elm.Year)}
                    className="objectfit"
                    variant="top"
                    src={elm.Poster}
                    height="300"
                  />
                  <Card.Body className="cardBodyColor">
                    <Card.Title className="text-center cardTitleHeight">
                      <h6>{elm.Title}</h6>
                    </Card.Title>
                    {/* <Card.Text className="text-center">{elm.Type}</Card.Text> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Modal size="sm" show={preview.show} onHide={handleClose}>
            <Modal.Header>
              <Image className='modalImg' fluid src={preview.moviePreview} />
            </Modal.Header>
            <Modal.Body>
              <h3>{preview.title}</h3>
              <p>{preview.year}</p>


            </Modal.Body>
            <Modal.Footer className="cardBodyColor cardBorder">
              <Button
                className="cardBodyColor modalFooter"
                variant="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.results,
  };
};

export default connect(mapStateToProps)(SearchGallery);
