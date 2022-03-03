class Person {
    public name: string;
    private age: number;
    readonly log: string; // 읽기만 가능

    constructor(name , age) {
        this.name = name;
        this.age = age;
    }
}


