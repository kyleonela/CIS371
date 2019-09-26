// Sample Code for #part0
let zero = document.querySelector("#part00");
let hello = document.createTextNode("Hello world!");
zero.appendChild(hello);
/*--- begin answer part00 ---*/
let myname = 'Kyle Onela';
/*--- end answer part00 ---*/
if (typeof myname !== "undefined") {
  let textBefore = document.createTextNode("My name is ");
  zero.appendChild(textBefore);
  let boldNode = document.createElement("b");
  let name = document.createTextNode(myname);
  zero.appendChild(boldNode);
  boldNode.appendChild(name);
  let textAfter = document.createTextNode(". This work is solely mine! ");
  zero.appendChild(textAfter);

  zero.appendChild(
    document.createTextNode(
      "I understand that " +
        "copying someone else's code and claiming to be my own work " +
        "or sharing my code with someone else is a "
    )
  );
  let honesty = document.createElement("b");
  honesty.appendChild(document.createTextNode("violation"));
  zero.appendChild(honesty);
  zero.appendChild(document.createTextNode(" of academic honesty."));
}

// Code for part 1
let atoms = [
  "Aluminum",
  "Barium",
  "Carbon",
  "Dubnium",
  "Erbium",
  "Fluor",
  "Gallium",
  "Hydrogen",
  "Helium",
  "Iron",
  "Krypton",
  "Lithium",
  "Magnesium",
  "Nitrogen",
  "Oxygen",
  "Palladium",
  "Radon",
  "Silicon",
  "Titanium",
  "Uranium",
  "Vanadium",
  "Xenon",
  "Zinc"
];

let N = atoms.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atoms[pos1];
  atoms[pos1] = atoms[pos2];
  atoms[pos2] = tmp;
}

/*--- begin answer part01 ---*/
let part01 = document.querySelector("#part01");
let atomList = document.createElement("ol");
atoms.forEach(atomName => {
  let list = document.createElement("li");
  let atom = document.createTextNode(atomName);
  list.appendChild(atom);
  atomList.appendChild(list);
})
part01.appendChild(atomList);
// for(let i=0; i<atoms.length; i++){
//   console.log(i + '. ' + atoms[i]);
// }
/*--- end answer part01 ---*/

// Code for part 2
// Don't rename the following two variables!
/*--- begin answer part02 ---*/
const myDomesticTravel = {
  destination:"Detroit, Michigan",
  dateOfVisit: "August 2019",
  isAbroad: false
};
const myInternationalTravel = {
  destination:"Paris, France",
  dateOfVisit: "July 2018",
  isAbroad: true
};

let part02 = document.querySelector("#part02");

let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");
let domSentence = "I had fun this " + myDomesticTravel.dateOfVisit + " spending time with my family in " + myDomesticTravel.destination + '. ';
let intSentence = "My mom is so generous to pay for my air ticket to " + myInternationalTravel.destination + " in " + myInternationalTravel.dateOfVisit;
let sentenceTextNode = document.createTextNode(domSentence);
let sentenceTextNode2 = document.createTextNode(intSentence);

//images extra credit
let image = photoURL => {
  let images = document.createElement("img");
  images.setAttribute("src", photoURL);
  images.setAttribute("width", 250);
  return images;
}
let domImage = image("https://live.staticflickr.com/5794/21760939812_cc662858e0_b.jpg");
let intImage = image("https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?cs=srgb&dl=architecture-beautiful-building-1461974.jpg&fm=jpg");


paragraph1.appendChild(sentenceTextNode);
paragraph2.appendChild(sentenceTextNode2);

let domesticParagraph = paragraph1;
let internationalParagraph = paragraph2;

domesticParagraph.classList.add("domestic");
internationalParagraph.classList.add("international");

part02.appendChild(domImage);
part02.appendChild(paragraph1);
part02.appendChild(intImage);
part02.appendChild(paragraph2);
/*--- end answer part02 ---*/

// Code for part 3
let atomObjects = [
  { name: "Aluminum", weight: 26.982 },
  { name: "Barium", weight: 137.33 },
  { name: "Carbon", weight: 12.011 },
  { name: "Dubnium", weight: 268 },
  { name: "Erbium", weight: 167.26 },
  { name: "Fluor", weight: 18.988 },
  { name: "Gallium", weight: 69.723 },
  { name: "Hydrogen", weight: 1.008 },
  { name: "Helium", weight: 4.0026 },
  { name: "Iron", weight: 55.845 },
  { name: "Krypton", weight: 83.798 },
  { name: "Lithium", weight: 6.94 },
  { name: "Magnesium", weight: 24.305 },
  { name: "Nitrogen", weight: 14.007 },
  { name: "Oxygen", weight: 15.999 },
  { name: "Palladium", weight: 106.42 },
  { name: "Radon", weight: 222 },
  { name: "Silicon", weight: 28.085 },
  { name: "Titanium", weight: 47.867 },
  { name: "Uranium", weight: 238.03 },
  { name: "Vanadium", weight: 50.942 },
  { name: "Xenon", weight: 131.29 },
  { name: "Zinc", weight: 65.38 }
];
N = atomObjects.length;
for (let k = 0; k < 50; k++) {
  const pos1 = Math.floor(Math.random() * N);
  const pos2 = Math.floor(Math.random() * N);
  let tmp = atomObjects[pos1];
  atomObjects[pos1] = atomObjects[pos2];
  atomObjects[pos2] = tmp;
}

/*--- begin answer part03 ---*/
let part03 = document.querySelector("#part03");
let orderedList = document.createElement("ol");
atomObjects.forEach(element=>{
  let listItem = document.createElement("li");
  let eachElement = document.createTextNode(`${element.name} (weight: ${element.weight.toFixed(1)})`)
  
  //apply the classes if weight is above 150
  listItem.classList.add(element.weight > 150 ? "heavy" : "light");
  
  listItem.appendChild(eachElement);
  orderedList.append(listItem);
})
part03.append(orderedList);
/*--- end answer part03 ---*/

// Code for part 4
/*--- begin answer part04 ---*/
let part04 = document.querySelector("#part04");
let table = document.createElement("table");

table.classList.add("mytable");

//top row
let heading1 = document.createTextNode("Atom");
let heading2 = document.createTextNode("Weight");

let headingTH = document.createElement("th");
let headingTH2 = document.createElement("th");

let headingTR = document.createElement("tr");

headingTH.appendChild(heading1);
headingTH2.appendChild(heading2);

headingTR.appendChild(headingTH);
headingTR.appendChild(headingTH2);
table.append(headingTR);

atomObjects.forEach(element=>{
  //create td
  let finalTR = document.createElement("tr");
  
  let TD1 = document.createElement("td");
  let nameElement = document.createTextNode(element.name)
  
  let TD2 = document.createElement("td");
  let weightElement = document.createTextNode(element.weight)

  
  TD1.appendChild(nameElement);
  TD2.appendChild(weightElement);
  
  finalTR.appendChild(TD1);
  finalTR.appendChild(TD2);
  
  finalTR.classList.add(element.weight > 150 ? "heavy" : "light");
  
  table.append(finalTR);
})

part04.append(table);
/*--- end answer part04 ---*/

// Code for part 5 (Extra credit)
/*--- begin answer part05 ---*/
let part05 = document.querySelector("#part05");

let heading = document.createElement("div");
heading.classList.add("grid-heading");
let name = document.createElement("div");
let namename = document.createTextNode("Atom");
name.appendChild(namename);


let weight = document.createElement("div");
let weightweight = document.createTextNode("Weight");

weight.appendChild(weightweight);

name.classList.add("toprow");
weight.classList.add("toprow");

heading.appendChild(name);
heading.appendChild(weight);

atomObjects.forEach(element=>{
  let div = document.createElement("div");
  let div2 = document.createElement("div");
  div.classList.add("grid-rows")
  div2.classList.add("grid-rows2")
  let atomNames = document.createTextNode(element.name);
  let atomWeight = document.createTextNode(element.weight);
  div.appendChild(atomNames);
  div2.appendChild(atomWeight);
  heading.appendChild(div);
  heading.appendChild(div2);
})
part05.append(heading);
/*--- end answer part05 ---*/
