// TS 함수
// 1. 함수의 파라미터 타입을 정의하는 방식
function sum(a: number, b: number): number {
    return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정하는 방식
function add(): number {
    return 10;
}

// 함수의 스펙(규칙)을 정확하게 이해 필요: 파라미터를 제한하는 특성을 가짐
// sum(10, 20, 30, 40); // 2개의 인자가 필요한테 4개의 인자가 있음

// 함수의 옵션널 파라미터
// ?를 이용해서 필요에 따라서 선택적으로 인자 규칙을 정함
function log(a: string, b?: string) {
}
log('hello world');
log('hello world', 'ts');
// log('hello world', 123);


