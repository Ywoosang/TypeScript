// Ts 문자열 선언 
// 변수 이름 : 타입 으로 선언합니다. 
// 문자열 타입으로 간주하겠다라는 의미입니다. 
var str : string = '123'; 

// Ts 숫자 선언 
let num : number = 123;

//Ts 배열 선언
//arr 라고 하는 변수는  Array 타입이고 그 배열 안에 Number 만 들어갈 수 있다는 의미입니다.
let strArr : Array<string> = ['1','2','3'];

//두 개는 동알한 의미입니다.
// Array 타입이고 그 배열 안에 Number 만 들어갈 수 있습니다. = number 에 배열리터럴 
let numArr : Array<number> = [1,2,3];
let items : number[] = [1,2,3]; 


// Ts 튜플
// 모든 인덱스에 타입이 정의되어 있는 배열
// 배열의 특정 순서에 타입까지 정의하는 것을 튜플이라고 합니다. 
let tuple : [string,number,Array<number>] = ['1',1,[1]];


// Ts 오브젝트
// 오브젝트 안에 어떤 속성이 들어가도 상관이 없습니다. 
// 오브젝트 형태만 유지하면 타입 검사가 끝납니다. 
let obj : object = {};

let person : object = {
    name : 'Ywoosang',
    job : 'programmer',
    age : 21
}; 
// 구체적으로 작성하기 원한다면 아래와 같이 타입을 지정할 수도 있습니다. 
let newPerson : { name : string,job : string, age: number} = {
    name : "Ywoosang",
    job : 'programmer',
    age : 21 
};

// Ts 진위값
// 타입을 boolean 으로 넣어주면 됩니다. 
let bool : boolean = true ; 


// 함수

// 파라미터에 타입을 지정하는 것이 함수에 타입을 지정하는 방식이빈다. 
function sum(a : number,b: number){
    return a + b; 
}; 

sum(10,20);

// 함수의 반환 값에 타입을 정의할 수 있습니다. 
// 함수의 반환값을 지정하면 반환을 해야하며, 반환값이 없다면 오류로 표시합니다. 
function sum1() : number {
    return 10; 
};

// 함수에 타입을 정의하는 방식입니다. 
function sum2(a : number , b: number) : number {
    return a + b;
};

// Ts가  함수에 대한 모습을 이해해서 인자를 더 받으면 오류로 표시합니다. 
// sum(10,20,30,40); // 30 


// 함수에 선택적 파라미터 (옵셔널 파라미터) 를 살펴봅시다 
// 옵셔널 파라미터 
// 파라미터 개수가 유동적일 때 처리하는 방법에 대해 알아봅니다.
// b 와 c 그러니까 추가적으로 들어올 수 있는 파라미터에 대해서 
// 이 값은 써도 되고 쓰지 않아도 된다는 선택적 파라미터 옵션인 (?) 를 넣어주면 됩니다. 
function log(a :string , b:string, c?:string){


}
// 옵셔널 파라미터로 세 번째 파라미터는 작성해도, 안해도 상관이 없습니다. 
log('hello','world');
log('hello','world','tutorial'); 


// any 는 string number array 등 모든 타입을 통칭해서 부르는 말입니다. 
// any 라고 했을 때 자바스크립트의 원래 성질인 실행하는 시점에 타입을 구분해서 할당해주는 
// 관점에서 any가  있습니다. 
// 처음 any 를 지정해나가고 그 다음 구체적인 타입들을 지정해 나가는게 정상적인 방식입니다. 

let todo : any ; 

// void 는 반환값이 없다는 것을 명시적으로 정의해 주는 것입니다. 

function consoleLog(item: string): void{
    console.log(item);
}; 

