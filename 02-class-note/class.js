function Developer(name, age) {
	this.name = name;
	this.age = age;
}

var capt = new Developer('캡틴', 100);

console.log(capt);

class Person {
	// 클랙스 로직
	constructor(name, age) {
		console.log('생성 되었습니다.')
		this.name = name;
		this.age = age;
	}
}

var seho = new Person('jj', 29);

console.log(seho);
