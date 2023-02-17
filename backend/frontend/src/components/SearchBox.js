import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export function SearchBox() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword!=='') {
        navigate(`/?keyword=${keyword}&page=1`);
    } else {
        navigate(navigate(location.pathname));
    }
  };
  return (
      <Form onSubmit={submitHandler}>
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-sm-2 ml-sm-5"
        ></Form.Control>
        <Button type="submit" variant="outline-success" className="p-2"  onSubmit={submitHandler}>
          Submit
        </Button>
      </Form>

  );
}
