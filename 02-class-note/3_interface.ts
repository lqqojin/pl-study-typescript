// 인터페이스는 상호 간에 정의한 약속 혹은 규칙 의미
// 타입 스크립트에서의 인터페이스는 보통 다음과 같은 범주에 대해 약속을 정의할 수 있다.

// ch.6.1 인터페이스 소개 및 변수를 정의하는 인터페이스
interface User {
    age: number;
    name: string;
}

// ch.6.1 변수에 인터페이스 활용
const seho: User = {
    age: 28,
    name: '세호',
}

// ch.6.2 함수의 인자를 정의하는 인터페이스
// 함수에 인터페이스 활용
// 인터페이스를 사용한단는 건 특정한 타입을 강제한다.
const getUser = (user: User) => {
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 100,
}

getUser(capt);

// ch.6.3 함수 스펙(구조)를 정의하는 인터페이스
// 프론트엔드에서 API 호출에서 인터페이스에서 빛을 발한다.
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = (a:number, b:number ): number => {
    return a + b;
}

// ch.6.4 인덱싱 방식을 정의하는 인터페이스
// 속성이 정해지지 않을 때
interface StringArray {
    [index: number]: string;
}

// 배열을 접근 할 때
let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10; // [주석처리] number type 할당으로 에러 발생
arr[0] = 'aa';

// ch.6.4 인터페이스 Dictionary 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
    // sth: /abc/,
    // cssFile: 'css', // [주석처리]
    cssFile: /\.css$/, // 확장자가 .css 끝나는 파일
    jsFile: /\.js$/, // 확장자가 .js 끝나는 파일
}

// 객체의 key 접근
// obj['jsFile'] = 'a'; // [주석처리 오류]
obj['htmlFile'] = /\.html/

Object.keys(obj).forEach((value) => {

})

// ch.6.5 인터페이스 확장(상속)
interface Person {
    name: string;
    age: number;
}

// 확장을 받아서 처리
//  Person 을 상속 받아서 필드 "name"과 "age"가 필요하지 않음a
interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}
// Person interface 상속을 받은 Developer interface 사용 예시
const captain: Developer = {
    language: 'ts',
    name: 'JJ',
    age: 28,
}
