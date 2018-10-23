var array1 = [
    {
    name:'Erik',
    age:30,
    gender:"male",
    "has children":true
    },
    {
    name:'Jack',
    age:29,
    gender:"male",
    "has children":false
    },
    {
    name:'Kelly',
    age:26,
    gender:"female",
    "has children":false
    },
    {
    name:'Wendy',
    age:29,
    gender:"female",
    "has children":true
    }
];

function sortAge(a,b) {
    var ageA = a.age();
    var ageB = b.age();
    if(ageA>ageB) return 1;
    if(ageA<ageB) return -1;
    if(ageA==ageB) return 0;
}

console.log(array1.sort(sortAge));



// OTHER POSSIBLE METHOD:
// people.sort(function(a,b){
//     return a.age-b.age
// });

// console.log(array1.sort(people.sort(function(a,b));


