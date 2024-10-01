//Arrays part 2

const flowers=["Rose", "Tulip", "Lilly"]

const flowers2=["Lavender", "Marigold", "Sunflower"] 

// flowers.push(flowers2); //Arrsy itself is pushed as a single data type and not its individual elements

// console.log(flowers);
// console.log(flowers[3][1]);

// const allflowers= flowers.concat(flowers2);
// console.log(allflowers);

const allNewFlowers=[...flowers, ...flowers2]
// console.log(allNewFlowers);

const another_arr=[1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const usable_aa=another_arr.flat(Infinity)
// console.log(usable_aa);

console.log(Array.isArray("Sakshi"));
console.log(Array.isArray(Array.from("Sakshi")));
console.log(Array.from({name: "Sakshi"})) //Interesting

let score1=100, score2=200, score3=300;

console.log(Array.of(score1, score2, score3));
