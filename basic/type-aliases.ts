/*
타입 별칭

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입변수를 의미합니다.
*/

// string 타입을 사용할 때
const name: string = 'Ywoosang';
// 타입 별칭을 사용할 때
type typeName = string
const name: typeName = 'Ywoosang'


//인터페이스와 같이 복잡한 구조로 타입 별칭을 사용해서 정의할 수 있다.
type Dev = {
    name: string;
    language : string;
}

interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name :string;
//     age: number;
// }

// 인터페이스를 이용한 타입 정의
var woosang: Person ={
    name: 'ws',
    age : 21
}

type MyString = string;
var str: MyString = 'helloworld';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo :Todo){

}

/*
인터페이스와 타입 별칭의 차이

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록
이름을 부여하는 것입니다.

인터페이스는 마우스를 올려보면 해당 인터페이스를 가리킵니다.

타입은 마우스를 올려 보면 타입별칭을 보여주게 됩니다. 

특정 타입에 대해 가리키는 그냥 별칭을 제공한다고 보면 됌
타입은 확장이 되지 않음.

타입의 확장 /불가능 여부 
인터페이스는 확장이 가능한데 비해 타입 별칭은 확장이 불가능합니다.
가능한 한 type 보다 interface 로 선언해서 확장해 사용하는 것이 좋습니다. 
*/

