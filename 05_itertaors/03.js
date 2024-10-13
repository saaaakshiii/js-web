const myObject={
    'JS': "Javascript",
    'CPP':"C++",
    'RB':"Ruby",
    'Swift':"Swift by apple"
}

//For in loop

// for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const myArr=["js", "python", "java", "c++"]

// for (const key in myArr) {
//     console.log(myArr[key]);
// }

const map= new Map();
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")

for (const key in map) {
   console.log(key);
}