function logMessage(value: any): void {
    console.log(value);
}

logMessage('hello');
logMessage(100);
logMessage(false);

// any 를 쓰면 타입스크립트의 장접이 사라진다.
// union type 하나의 타입 이살을 쓸 수 있다.
var seho: string | number | boolean
function logMessage1(value: string | number): void {
    console.log(value);
    // 타입가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage1('hello');
logMessage1(100);

// union type 의 장점
// 1. api를 사용 할 수 있다.
// 타입가드
//

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// union Type 은 공통 타입만 취급
function askSomeone(someone: Developer | Person) {
    someone.name = ''; // 타입스트립트 관점에선 공통으로 들어온 공통(보장된 속성만 제공) name
    // someone.skill; // [주석처리]
    // someone.age; // [주석처리]
}

var capt: string & number & boolean;
// intersaction type(&): 타입가드가 필요없이 Developer 와 Person 모든 속성의 타입을 사용 할 수 있음
function askSomeone1(someone: Developer & Person) {
    someone.name = ''; // 타입스트립트 관점에선 공통으로 들어온 공통(보장된 속성만 제공) name
    someone.skill = '';
    someone.age;
}

/**
 * 핵심
 * 유니온 타입과 인터섹션 타입의 차이점
 *
 */
askSomeone({ name: '디펠로터', skill: '웹개발' });
askSomeone({ name: '캡틴', age: 100 });

// 타입에러 발생
// 인터섹션은 개발자의 속성과 사람의 속성이 모두 필요함
// askSomeone1({ name: '디펠로터', skill: '웹개발' }); [에러 주석처리]
// askSomeone1({ name: '캡틴', age: 100 }); [에러 주석처리]
askSomeone1({ name: '캡틴', age: 100, skill: '웹개발' });
