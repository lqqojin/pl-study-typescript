/**
 * ch08.06
 */
// 초기화를 하지 않으면 1씩 증가되는 값으로 할당된다.
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
    Yes= 'Y',
    No= 'N'
}
function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다.')
    }
    if (answer === Answer.No) {
        console.log('오답입니다.')
    }
}
// 활용 드롭다운에서 처리
askQuestion(Answer.Yes)
// askQuestion('예스');
// askQuestion('Y');


