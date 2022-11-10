import React from "react";
import Card from "react-bootstrap/Card";

const WithHeaderAndQuoteExample = () => {
  return (

      <Card className=" navbar navbar-dark bg-dark">
        <Card.Body>
          <blockquote className="blockquote mb-0 text-center">
             <footer className="blockquote-footer">
              Copyright Your Website 2022
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

  );
};

export default WithHeaderAndQuoteExample;
