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

for (let [i, gol] of game.scored.entries()) {
  console.log(`the ${i + 1}st goal is done by ${gol}`);
}

let sum = 0;
for (let value of Object.values(game.odds)) {
  sum += Number(value);
}
let averageNum = Math.trunc(sum / Object.values(game.odds).length);
console.log(`the average of odds is ${averageNum}`);

for (let [team, score] of Object.entries(game.odds)) {
  const teamName = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamName} is: ${score} `);
}

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const time = [...gameEvents.keys()];
console.log(
  `the average time of every event is : ${time.pop() / gameEvents.size}`
);
for (let [minutes, item] of gameEvents) {
  console.log(
    ` ${minutes <= 45 ? "[First Half]" : "[Second Half]"} ${minutes}: ${item}`
  );
}

const capitalizeFirstLetters = function (param) {
  const paramLower = param.toLowerCase().split(" ");
  let result = [];
  for (let item of paramLower) {
    result.push(item.replace(item[0], item[0].toUpperCase()));
  }
  console.log(result.join(" "));
};

capitalizeFirstLetters("hi my name is ALI");
capitalizeFirstLetters("I REAALy enjoy codinG");

const makeDigitsHidden = function (number) {
  const str = number + "";
  const last4Digits = str.slice(-4);

  console.log(last4Digits.padStart(str.length, "*"));
};

makeDigitsHidden(3930984824);
makeDigitsHidden("23456789065434567");

const showEmoji = function (n) {
  console.log(`there are ${n} emoji ${"🤩".repeat(n)}`);
};

showEmoji(4);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  let firstStr,
    secondStr,
    result = "";
  const str = document.querySelector("textarea").value;
  const sepratedLineStr = str.split("\n");

  for (let [i, item] of sepratedLineStr.entries()) {
    [firstStr, secondStr] = item.toLowerCase().trim().split("_");
    result = `${firstStr}${secondStr.replace(
      secondStr[0],
      secondStr[0].toUpperCase()
    )}`;
    console.log(`${result.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

// and ${"🌺".repeat(counter)}
//  for (let item of paramLower) {
//     result.push(item.replace(item[0], item[0].toUpperCase()));
