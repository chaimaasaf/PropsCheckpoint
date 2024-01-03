import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <Card
      style={{ width: "200px", margin: "10px", border: "thick double #32a1ce" }}
    >
      <Card.Img
        variant="top"
        src={imageURL}
        alt={name}
        style={{ width: "10rem", height: "10rem" }}
      />

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
