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

///////////////////////////////// FLIGHTS

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const formatLocation = (str) => str.slice(0, 3).toUpperCase();
for (let row of flights.split("+")) {
  let [str, location, destination, time] = row.trim().split(";");
  let output = `${str.startsWith("_Delayed") ? "🔴" : ""}${str.replaceAll(
    "_",
    " "
  )} from ${formatLocation(location)} to ${formatLocation(
    destination
  )} (${time.replace(":", "h")})`.padStart(45);
  console.log(output);
}

/////////////////////////////////////////

const greet = (greeting) => (name) => console.log(` ${greeting} dear ${name}`);

greet("hey")("ALI");

////////////////////////////////////////////////////////// Call, APlly and Bind

const zagros = {
  airline: "zagros",
  itaCode: "ZA",
  bookings: [],
  // book : function (){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} Airlines, flight ${this.itaCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.itaCode}${flightNum}`, name });
  },
};

const mahan = {
  airline: "mahan",
  itaCode: "MA",
  bookings: [],
};

const taban = {
  airline: "taban",
  itaCode: "TA",
  bookings: [],
};

const bookFlights = zagros.book;
bookFlights.call(mahan, 55, "DJ fosonghori");
bookFlights.call(zagros, 99, "sozan karami");
bookFlights.call(zagros, 11, "ali daei");

const flightData = [44, "mary coory"];
bookFlights.call(taban, ...flightData);
console.log(taban);
console.log(mahan);
console.log(zagros);

const addnum = (p1, p2) => p1 + p2;
console.log(addnum(100, 8));

const addHund = addnum.bind(null, 100);

console.log(addHund(3));

const tet = function (param1) {
  return function (param2) {
    return param2 + param1;
  };
};

const var2 = tet(100);

console.log(var2(8));
/////////////////////////////////////
console.log("sssssssssssssssssssssssssssssss");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n ${this.options.join("\n")} \n (write the numbers✍)`
      )
    );
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
    console.log(this.answers);
  },
};

poll.registerNewAnswer();
