

// Exercise 1 Section
function plus(number){
    return function (plusNumber){
return number + plusNumber;
    };
    
}
const plus2 = plus(2); 

console.log(plus2(2));
console.log(plus2(5));

const plus100 = plus(100);

console.log(plus100(100));
console.log(plus100(5));
// Exercise 1 Secction

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
   users.forEach(users => console.log(users.name));

     //Map

    let newUsers = users.map((user) =>{
        return { name: users.name, score: user.score}
    })
   console.log(newUsers)

  // filetr

  let activeUsers = users.filter((user) => 
    user.isActive);
  console.log(activeUsers);

  //sort 

  users.sort((a, b) => {
    if (a.score < b.score) return 1;
    else return -1;
  })
  console.log(users);

  //reduce
  let avgScore = users.reduce((sum, user) => sum +user.score, 0);
  console.log(avgScore)