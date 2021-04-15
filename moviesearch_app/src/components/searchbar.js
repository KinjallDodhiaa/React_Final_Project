import React, { useRef } from 'react';
import { Button, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMovieData } from '../action';

const SearchBar = ({ getMovieData }) => {
  // const { getMovieData } = props
  const searchRef = useRef();

  const searchMovieOnClick = () => {
     getMovieData(searchRef.current.value);
  };

  // const searchMovieCategoryOnClick = (e) =>{
  //     props.getMovieData(e.target.value);
  //     console.log(e.target.value);
  // }


  // some smal changes

  const searchMovieCategoryOnClick = (e) => {
     getMovieData(e.target.name);
  };

  return (
    <Container className="mt-4">
      <Row>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button onClick={searchMovieOnClick} variant="outline-secondary">
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl ref={searchRef} aria-describedby="basic-addon1" />
        </InputGroup>
        <Container>
          <Row>
            <h1>Movies</h1>
            <Button name="action" onClick={searchMovieCategoryOnClick}>
              Action
            </Button>
            <Button name="thriller" onClick={searchMovieCategoryOnClick}>
              Thriller
            </Button>
            <Button name="horror" onClick={searchMovieCategoryOnClick}>
              Horror
            </Button>
            <Button name="drama" onClick={searchMovieCategoryOnClick}>
              Drama
            </Button>

          </Row>
        </Container>

        {/* <select
            onClick={searchMovieCategoryOnClick}
          >
            <option value="action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Romance">Romance</option>
          </select> */}

        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu ref={searchRef}>
              <Dropdown.Item onClick={searchMovieCategoryOnClick}>
                Action
              </Dropdown.Item>
              <Dropdown.Item>Thrillers</Dropdown.Item>
              <Dropdown.Item>Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
      </Row>
    </Container>
  );
};

export default connect(null, { getMovieData })(SearchBar);