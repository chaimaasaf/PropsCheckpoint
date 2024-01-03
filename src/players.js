import play1 from "../src/images/joueur1.png";
import play2 from "../src/images/joueur2.png";
import play3 from "../src/images/joueur3.png";
import play4 from "../src/images/joueur4.png";

const players = [
  {
    name: "ALIce",
    team: "TeamA",
    nationality: "france",
    jerseyNumber: 7,
    age: 25,
    imageURL: require("../src/images/joueur2.png"),
  },
  {
    name: "dalice",
    team: "italie",
    nationality: "italie",
    jerseyNumber: 5,
    age: 35,
    imageURL: require("./joueur1.png"),
  },
  {
    name: "ademic",
    team: "Teamb",
    nationality: "espagne",
    jerseyNumber: 13,
    age: 18,
    imageURL: require("../src/images/joueur3.png"),
  },
  {
    name: "ahmed",
    team: "algerie",
    nationality: "algerie",
    jerseyNumber: 7,
    age: 45,
    imageURL: require("../src/images/joueur4.png"),
  },
];

export default players;
