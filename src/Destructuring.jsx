import React from 'react'


function Destructuring() {

const person = { name: 'John', age: 25, place:"knr" }

//  const Name=person.name;
//  const Age=person.age;
//  const Place=person.place;
//  console.log(Name);
//  console.log(Age);



// destructuring

// const { name, age,place } = person;
// console.log(name);
// console.log(age);
// console.log(place);



const numbers = [1,2,3,4];

const [first, second, third,four] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(four);//4


// 






  return (
    <div>


    </div>
  )
}


export default Destructuring
