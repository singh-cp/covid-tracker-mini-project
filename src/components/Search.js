import React from "react";
import Form from "react-bootstrap/Form";

function Search({ userInput }) {
  function handleSearch(e) {
    e.preventDefault();
    userInput(e.target.value);
  }
  return (
    <Form className="d-flex justify-content-center m-5 shadow-lg rounded">
      <Form.Control placeholder="Search a Country" onChange={handleSearch} />
    </Form>
  );
}

export default Search;
