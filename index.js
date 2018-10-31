const subscriptions = [
    {name: "erik", age: 30, gender: "male"},
    {name: "wendy", age: 29, gender: "female"},
    {name: "jack", age: 29, gender: "male"},
    {name: "kelly", age: 26, gender: "female"}
];
var personNames = subscriptions.map(function (subscription) {
    return subscription.name;
});

var myNamesUpperFunc = function(subscription) {
    return subscription.name.toUpperCase();
};

const upperCaseNames = subscriptions.map(myNamesUpperFunc);

// console.log(upperCaseNames);

var strings = ["erik", "wendy", "jack", "kelly"];

var filtered = strings.filter(function (str) {
    return str.includes("e");
});

// console.log(filtered);

var genderType = subscriptions.filter(function (subscription) {
    return subscription.gender === "female";
});

// console.log(genderType);

const allAges = [30, 29, 29, 26];

var sumAge = allAges.reduce(function (acc, currValue) {
    return acc + currValue;
}, 0);

var avgAge = sumAge / allAges.length;

// console.log(avgAge);

var legalCheck = subscriptions.every(function (subscription) {
    return subscription.age >= 21;
});

// console.log(legalCheck);

var findErik = subscriptions.some(function (subscription) {
    return subscription.name == "erik";
});

// console.log(findErik);

function compare(a, b){
    const ageA = a.age;
    const ageB = b.age;

    let comparison = 0;
  
    if (ageA > ageB) {
      comparison = 1;
    } else if (ageB > ageA) {
      comparison = -1;
    }
    return comparison;
  };

var sortSubscriptionsAge = subscriptions.sort(compare);
// ANOTHER WAY TO DO IT:
// people.sort(function(currentItem, nextItem){
    
//     if (currentItem.age < nextItem.age) {
//         return -1;
//     }

//     return 1;
// }

// console.log(sortSubscriptionsAge);

// let givenName= {};
// let howOldAreThey = [];

// subscriptions.forEach(function(subscription){
//     if  (givenName[subscription.name] = subscription.name);
//         return howOldAreThey.push(subscription.age)
// });

// console.log(howOldAreThey["jack"]);

let result = {};
let sameAges = [];

subscriptions.forEach(function(subscription){
    if (result[subscription.age] == undefined) {
        result[subscription.age] = subscription.name;
        return;
    };
    let previousResult = result[subscription.age];
    if (!sameAges.includes(previousResult)) {
        sameAges.push(previousResult);
    };
    sameAges.push(subscription.name);
});

// console.log(sameAges);

// var howOldAreThey = function() {
//     if (result)
// };

// console.log("age: ", subscriptions.age);

var myNumberList = [1, 2, 3, 4, 5, 6, 7];

for (i=0; i<4; i++) {
//    console.log(myNumberList[i]);
};

var mySubscriptionsTest = ['apple', 'bananas', 'celery', 'donuts', 'ear of corn', 'fetticini', 'gravy'];

for (i=[0]; i<[4]; i++) {
//    console.log(mySubscriptionsTest[i]);
};


// WHY IS IT NOT PERFORMING THE ACTION TO EACH ELEMENT IN THE ARRAY????
let resultFemale = {};
var femaleFind = [];

subscriptions.forEach(function(subscription){
    if (resultFemale[subscription.gender] === "female"){
        resultFemale[subscription.gender] = subscription.name;
        return;
    };
    let previousResultFemale = resultFemale[subscription.gender];
    if (!femaleFind.includes(previousResultFemale)) {
        femaleFind.push(previousResultFemale);
    };
    femaleFind.push(subscription.name);
});

console.log(femaleFind);



