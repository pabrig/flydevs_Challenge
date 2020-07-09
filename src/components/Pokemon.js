import React from "react";
import { Row, Container, Col, Card, Accordion, Button } from "react-bootstrap";

export default function Pokemon(props) {

     //Style
     const cardStyle = {
      boxShadow: '-8px 11px 22px -2px rgba(0,0,0,0.75)'
    }
    const imgStyle = {
      width: '30%'
    }
    const infoStyle = {
      borderRadius: '10px'
    }


  return (
     <Container >
      <Row >
        <Col xs={12} md={12}>
          <Card className=" mt-5" style={cardStyle}>
            <Card.Header className="card text-white bg-danger">
              <h4 className="text-center">{props.name}</h4>
            </Card.Header>
            <Card.Body className="card body border-dark mb-8">
              <img
                src={props.sprite}
                alt={props.name}
                className="center-block mx-auto"
                style={imgStyle}
              />
            </Card.Body>
            <Card.Footer className="text-muted ">
              <Accordion defaultActiveKey="0" >
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="1"
                  block
                  className="btn btn-dark text-white"
                  style={infoStyle}
                >
                  Info
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="1">
                  <Row className="mt-2">
                    <Col>
                      <h5 className="text-center">Abilities</h5>
                      {props.abilities.map((ability, key) => (
                        <div key={key} className="text-center">
                          <span>{ability.ability.name}</span>
                        </div>
                      ))}
                    </Col>
                    <Col>
                      <h5 className="text-center">Types</h5>
                      {props.types.map((type, key) => (
                        <div key={key} className="text-center">
                          <span>{type.type.name}</span>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </Accordion.Collapse>
              </Accordion>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
