import React, { useState } from "react";
import { Form, Container, Col, Button } from "react-bootstrap";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const searchStyle = {
    borderRadius: '10px'
  }

  return (
    <Container>
      <Form className="mt-2">
        <Form.Row className="align-item-center mt-2  ">
          <Col sm={10}>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              className="mt-2  border-dark mb-8 readonly"
              placeholder="Search your Pokemon"
            />
          </Col>
          <Col sm={2} className="">
            <Button
              block
              className="mt-2 btn-dark"
              onClick={(e) => props.getPoke(search)}
              style={searchStyle}
            >
              {" "}
              Search{" "}
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
