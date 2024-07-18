"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
const [players1, players2] = game.players;
const [gk1, ...fieldplayers1] = players1;
const [gk2, ...fieldplayers2] = players2;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// console.log((team1 ||= "winner"));
team1 < team2 && console.log("team1 is winwer");
team1 > team2 && console.log("team2 is winer");
const printGoals = function (...params) {
  console.log(`${params.length} is scored`);
};

printGoals("sara", "dara");
