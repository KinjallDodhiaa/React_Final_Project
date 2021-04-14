import React, { useRef } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieData } from '../action';

const SearchBar = (props) => {
    console.log(props);
    const searchRef = useRef();


    const searchMovieOnClick = () => {
        props.getMovieData(searchRef.current.value)
    }
    return (
        <Container>
            <Row>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={searchMovieOnClick} variant="outline-secondary">Button</Button>
                    </InputGroup.Prepend>
                    <FormControl ref={searchRef} aria-describedby="basic-addon1" />
                </InputGroup>

            </Row>
        </Container>
    );
};

export default connect(null, { getMovieData })(SearchBar);