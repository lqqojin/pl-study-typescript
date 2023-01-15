// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let a: Developer;
let b: Person;
// a = b; // X
b = a; // O

// 함수
const add = function (a: number) {
  // ...
};
const sum = function (a: number, b: number) {
  // ...
};
// sum = add; // X
// add = sum; // O

// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;
