import "./styles.css";

// 여기에 코드를 작성해주세요.
// 콘솔 결과는 하단의 Console에서 확인하실 수 있습니다.
/**
 * 1. let과 const를 활용해 숫자 10, 20을 할당하는 2가지 변수를 선언하기
 * 2. 두 숫자의 합을 반환하는 함수를 const와 arrow function을 활용해 구현
 
 // const sum = (x+y) => x+y;
 const sum = (x, y) => x + y;
 // console.log(sum(a,b));
 console.log(sum(a, b));

 * 3. c 속성으로 10을, d 속성으로 20을 가지는 객체를 const를 활용해 선언
 const object = {c : 10, d : 20} ;
 const object = { c: 10, d: 20 };
console.log(object);



 * 4. 3번의 객체에 객체 구조분해 할당과 const를 통해 c, d 변수를 선언
  // const obj = {c:10, d:20};
 // const {c,d} = obj;
**/

// 1번
//let a = 10;
//const b = 20;

let a = 10;
const b = 20;

// 2번
const sum = (x, y) => x + y;
const sum2 = (x, y) => {
  console.log("sum2");
  return x + y;
};

console.log(sum(a, b));
console.log(sum2(a, b));

// 3번
const object = { c: 10, d: 20 };
console.log(object);

// 4번
const { c, d } = object;
console.log(c, d);
