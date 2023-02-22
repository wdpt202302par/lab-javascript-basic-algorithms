console.log("I'm ready!");

// 1.1
const hacker1 = 'Antoine';
// 1.2
console.log("The 👨🏼‍💻driver's name is "+hacker1);
// 1.3
const hacker2 = "Justine";
// 1.4
console.log(`The 👩🏻‍✈️navigator's name is ${hacker2}`);

//
// 2.1
//

const driverLen = hacker1.length;
const navigatorLen = hacker2.length;

if (driverLen > navigatorLen) {
  console.log(`The Driver has the longest name, it has ${driverLen} characters`);
} else if (driverLen < navigatorLen) {
  console.log(`Yo, navigator got the longest name, it has ${navigatorLen} characters`);
} else {
  console.log(`Wow, you both got equally long names, ${driverLen}`);
}

//
// 3.1 "A N T O I N E"
//

let result1 = "";
for (let i = 0; i < hacker1.length; i++) {
  result1 += hacker1[i].toUpperCase();

  // a space after each letter (☝🏻 except for the last one)
  if (i !== hacker1.length-1) {
    result1 += " ";
  }
}
console.log(result1);

//
// 3.2 "eniotnA"
//

let result2 = "";
for (var i = hacker1.length - 1; i >= 0; i--) {
  result2 += hacker1[i];
}
console.log(result2);

//
// 3.3
//

const localeComparison = hacker1.localeCompare(hacker2);
if (localeComparison < 0) {
  console.log("The driver's name goes first.");
} else if (localeComparison > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?");
}

//
// Bonus
//

//
// Words count
//

const p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const p2 = "Mauris gravida, risus et mollis dictum, eros mauris cursus et et tortor, ut iaculis ligula leo quis purus.";
const p3 = "Mauris in porta orci.";

const str = p1 + " " + p2 + " " + p3;

let spaces = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    spaces++;
  }
}
console.log(`Mon paragraphe comporte ${spaces+1} mots.`)

//
// "et" count
//

let nbEt = 0;

// On parcourt chq lettre de `str`
for (let i = 0; i < str.length; i++) {
  // Quand on trouve un 'e'
  if (str[i] === "e") {
    // On regarde : s'il est précédé d'un espace + suivi d'un t + suivi d'un espace
    if (str[i-1] === " " && str[i+1] === "t" && (str[i+2] === " ")) {
      nbEt++;

      i += 2; // Optimisation: on saute 2 caractères, ie: "t "
    }
  }
}
console.log(`Mon paragraphe comporte ${nbEt} "et".`)