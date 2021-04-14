import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const MovieGallery = (props) => {
    switch (props.data.status) {
        case 'START':
            return <h1>LOADING...</h1>;
        case 'FAILED':
            return <h1>FAILED</h1>;
        case 'SUCCESS':
            return (
                <Container>
                    <Row>
                        {props.data.data.map((elm, idx) => (
                            <Card key={idx} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={elm.Poster} height="150" />
                                <Card.Body>
                                    <Card.Title>{elm.Title}</Card.Title>
                                    <Card.Text>{elm.Type}</Card.Text>
                                </Card.Body>

                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            )
        default: return null

    }
}

const mapStateToProps = (state) => {
    return {
        data: state.results
    }
}

export default connect(mapStateToProps)(MovieGallery);