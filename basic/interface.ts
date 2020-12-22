// interface 정의할 이름 {} 식으로 작성합니다. 
interface User {
    age : number;
    name : string; 
}
/*
interface 라고 하는 것은 이후에 User 라고 하는 것들을 
반복되는 타입들에 대해서 하나의 인터페이스를 정의하고 그 인터페이스를 모두 사용합니다. 
그렇게 했을 때 좋은 점은 중간에 오탈자가 나더라도 다른 사람이 보더라도 
User 라고 하는 인터페이스의 규칙이 동일합니다. 

동일한 규칙으로 쓰겠다고 하는 일종의 약속입니다. 
ex) User 인터페이스를 사용하는 변수라면 age 와 name 을 반드시 작성해야 합니다. 

타입스크립트에서 가장 많이활용하는 인터페이스 구조 
 
ts 의 장점은 api를 호출해와서 그 api 의 스펙이 어떻다라는 것을
인터페이스를 정의한 다음에 활용할 수 있다는 것입니다. 
*/


//변수에 활용한 인터페이스 
var seho: User = {
    age : 21, 
    name : 'Ywoosang'
}

// 함수 인자에 인터페이스를 정의해서 활용
function getUser(user: User): void {
    console.log(user);
}
getUser({age:22, name:'nextYearYwoosang'}); 

// 함수의 스펙(구조)에 인터페이스를 활용 

interface SumFunction {
    // 받는 인자에 대해 정의 반환 타입까지 정의 
    (a: number, b: number): number 
};

var add: SumFunction;
add = function(a: number,b: number){
    return a+b; 
}

/*
인덱싱 방식을 정의하는 인터페이스
기존에 속성하나 주고 타입을 정의했었던 
interface User {
    age : number;
    name : string; 
}
위 방식과 달리 

속성 이름이 정해져 있지 않고 임의로 그때그때마다 속성 이름을 부여해서 사용할 수 있는 
방식이 인덱싱입니다. 
[index : number] 로 

인터페이스 딕셔너리 패턴 
*/
interface StringArray {
    //arr[0] == index[number]  값은 string 
    [index:number] :string;
}

//아래와 같은 배열을 그대로 인터페이스로 정의한다고 하면 
var arr = ['a','b','c'];
//arr[0]; //  'a' 

//딕셔너리 패턴 

interface StringRegexDictionary {
    // 들어오는 객체의 이름을 key 라고 정의합니다. 그리고 그 타입을 string 으로 정의했습니다. 
    [key: string]: RegExp // 정규표현식 생성자 타입 

}



let obj3 : StringRegexDictionary = {
    // sth :/abc/,
    cssFile : /\.css$/, //css 확장자를 가진 모든 파일을 들고오는 정규식
    jsfile : /\.js$/ 
} 


// 타입스트립트가 value 의 타입까지 
Object.keys(obj3).forEach(function(value) {

})


// 인터페이스 확장
/*
하나의 인터페이스에 있는 내용을 다른 인터페이스가 가지고 있다고 한다면 
공통된 속성과 타입에 대해서 
상속받아 확장 가능하다. 

*/
interface Preson {
    name : string;
    age : number;

}

//Person 에 있는 두 개의 속성을 그대로 가져옵니다. 
interface Developer extends Preson{
    //name : string;
    // age : number;
    language : string; 
}

var woosang: Developer = {
    name : "Ywoosang",
    age : 21,
    language: 'js,ts,go,python'
}
