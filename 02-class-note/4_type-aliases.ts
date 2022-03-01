// ch.7.1
// ch.7.12

// 인터페이스 사용
// interface Person {
//     name: string;
//     age: number;
// }

// 타입 별칭 사용
type Person = {
    name: string;
    age: number;
}

const seho: Person = {
    age: 28,
    name: '세호',
}

type MyString = string;
var str: MyString = 'hello';

// interface Todo = { id: string, title: string; done: boolean };
type Todo = { id: string, title: string; done: boolean };
const getTodo = (todo: Todo) => {
    return {}
}

/** 키워드 type vs interface
 *      타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/ 불가능 여부이다.
 *      인터페이스는 확장이 가능
 *      타입은 별칭은 확장이 불가능
 *      따라서, type 보다는 interface로 선언해서 사용하는 것을 추천한다.
 *
 */
