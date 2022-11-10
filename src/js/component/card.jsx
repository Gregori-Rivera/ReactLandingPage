import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const BasicExample = () => {
  return (
    <div className="d-flex justify-content-around">
      <div>
      <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/28/200/150" />
            <Card.Body>
              <Card.Title>Gregori Rivera</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <Button variant="primary">Go somewhere</Button>
            </ListGroup>
          </Card>
        </div>
        <div>
        <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/43/200/150" />
            <Card.Body>
              <Card.Title>Gregori Rivera</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <Button variant="primary">Go somewhere</Button>
            </ListGroup>
          </Card>
        </div>
        <div>
        <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/110/200/150" />
            <Card.Body>
              <Card.Title>Gregori Rivera</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <Button variant="primary">Go somewhere</Button>
            </ListGroup>
          </Card>
        </div>
        <div>
          <Card className="text-center" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/id/15/200/150" />
            <Card.Body>
              <Card.Title>Gregori Rivera</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Estudiante Front End</ListGroup.Item>
              <Button variant="primary">Go somewhere</Button>
            </ListGroup>
          </Card>
        </div>
    </div>
  );
};

export default BasicExample;
