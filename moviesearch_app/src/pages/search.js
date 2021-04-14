import React, { useRef } from 'react';
import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Search = () => {
    const searchRef=useRef();


    const searchMovieOnClick=()=>{

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

export default Search;