

## 설치 및 환경설정

타입스크립트는 자바스크립트를 기반으로 한 언어이며 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효하다. 

타입스크립트를 설치한다. 
```
npm install -g typescript
``` 
타입스크립트는 프로그래밍 언어임과 동시에 컴파일러 (Compiler) 이다  
tsc 명령어를 이용해서 타입스크립트를 자바스크립트로 변환후 html 에 링크한다  

```
tsc 변환할 타입스크립트 파일명
``` 
VScode 터미널에서 실행시켜 볼 수 있다  
``` 
node 파일명
``` 

변환 후 오류가 발생한다면 `tsc --init` 으로 `tsconfig.json` 파일을 생성해준다  

컴파일 결과는 실시간으로 반영되지 않으므로 매번 컴파일하기 번거롭다  
따라서 다음 명령어로 타입스크립트 파일의 변화를 실시간 컴파일할 수 있도록 만들어준다  

```
tsc -w 타입스크립트 파일명
``` 
`-w` 옵션은 `watch` 의 줄임말로 해당 파일의 변경을 감지한다  


## 타입 표기(Type Annotation) 
`:` 을 이용해 자바스크립트 코드에 다음과 같은 타입을 정의하는 방식을 타입 표기(Type Annotation)라고 한다  
``` 
Number
String
Object
Array
Tuple
Boolean
Void 
Any
Enum        
Null
Undefined
Never
``` 

## 1.변수에 타입 지정

### 문자열
변수 이름 : 타입 으로 선언한다  
문자열 타입으로 간주하겠다라는 의미다

```javascript
let str: string = '123'; 
```

### 숫 
숫자는 number 을 사용한다 
```javascript
let num: number = 123;
```

### 배열

strArr 변수는 Array 타입이고 그 배열 안에 string 만 들어갈 수 있다   
```javascript
let strArr: Array<string> = ['1','2','3'];
``` 
아래 두 개는 동일하다  
```javascript
let numArr: Array<number> = [1,2,3];
let numArr: number[] = [1,2,3];  // number 에 배열리터럴 사용  
``` 

### 튜플

모든 인덱스에 타입이 정의되어 있는 배열을 튜플이라 한다  
배열의 특정 순서에 타입까지 정의한다   
```javascript
let tuple: [string,number,Array<number>] = ['1',1,[1]];
```

### 오브젝트

오브젝트 안에 어떤 속성이 들어가도 상관없다  
오브젝트 형태만 유지하면 타입 검사가 끝난다  
```javascript 
let obj : object = {};

let person : object = {
    name: 'Ywoosang',
    job: 'programmer',
    age: 21
}; 
```
구체적으로 작성하기 원한다면 아래와 같이 속성과 해당 타입을 지정할 수 있다  
```javascript
let newPerson : { name : string,job : string, age: number} = {
    name: "Ywoosang",
    job: 'programmer',
    age: 21 
};
```

### bool 값

타입을 boolean 으로 넣어준다  
```javascript
let bool: boolean = true ; 
```

## 2.함수에 타입 지정

### 파라미터 타입 지정
입력 파라미터에 타입을 지정한다   
```javascript
function sum(a: number,b: number){
    return a + b; 
}; 

sum(10,20);
```
함수의 반환 값에 타입을 정의할 수 있다  
반환값을 지정하면 반드시 반환을 해야하며 반환값이 없다면 오류로 표시한다 (void제외)
```javascript
function sum1(): number {
    return 10; 
};

function sum2(a: number , b: number) : number {
    return a + b;
};
``` 

### 옵셔널 파라미터 사용

함수에사용하는 선택적 파라미터를 의미한다   
파라미터 개수가 유동적일 때 처리할 수 있다  
옵셔널 파라미터가 쓰인 값은 써도 되고 쓰지 않아도 된다  
```javascript
function log(a :string , b:string, c?:string){
};
// 옵셔널 파라미터로 세 번째 파라미터는 작성해도, 안해도 상관이 없음  
log('hello','world');
log('hello','world','tutorial'); 

```
### 화살표 함수에 타입 지정

화살표 함수는 아래와 같이 사용한다   

```typescript
// ES5 함수 선언문 
function add(a,b){
  return a+b;
};
// ES5 함수 표현식 
var add = function(a,b){
  return a+b; 
};
// 화살표 함수
var add = (a,b) => a+b; 

var add = (a,b) => {
  return a+b;
}
``` 
여기에 타입을 도입하면 아래와 같다  
```typescript
var add = (a:number,b:number): number => {
  return a+b;
}
``` 

## 3. any 와 void
### any
any 는 string number array ... 등 모든 타입을 통칭해서 부르는 단어다  
실행하는 시점에 타입을 구분해서 할당해주는 바닐라 자바스크립트 성질과 비슷하다  
처음 any 를 지정하고 그 다음 구체적인 타입으로 지정해 나가면 편리하다   
```javascript
let todo : any ; 
``` 

### void 

void 를 사용해 함수에서 반환값이 없다는 것을 명시적으로 표시해주자  
```javascript
function consoleLog(item: string): void{
    console.log(item);
}; 
```
 
## 4. 인터페이스

### 변수에 인터페이스 활용 

반복되는 타입에 대해 하나의 인터페이스로 정의하고 사용한다  

```typescript
interface User {
  name : string;
  id : number;
  password : string; 
}

const man : User = {
  name : 'man',
  id : 3,
  password: 'test1234'
}

``` 

### 함수에 인터페이스 활용

특정 형식을 만족하는 데이터를 함수의 인자로 받기를 원할 때 파라미터에 인터페이스를 사용한다  

```typescript
const signUp = (user: User) => {
  console.log(user);
}

const man : User = {
  age : 48,
  name : 'man'
}

setUser(man)
``` 

### 함수의 스펙에 인터페이스 활용

```typescript
interface AddFunction {
  (a :number, b: number ) : number;
}

const  add: AddFunction = (a: number,b:number ): number => {
  return a+b;
}
``` 
### 인덱싱 방식을 정의하는 인터페이스

```typescript
interface NumberArray{
    // Array[:number]  [number,number ... ]
    [index : number] : number
  }
const numbers:NumberArray = [1,2,3,4];
``` 

### 인터페이스 딕셔너리 패턴

오브젝트의 인덱스를 접근할 때

```typescript
interface StringRegexDictionary{
  // Object[:string] { string:RegExp }
  [key : string] : RegExp;
}
const obj:StringRegexDictionary = {
  sth : /abc/,
  cssFile: /\.css/, 
  jsFile: /\.js$/, 
}
// value 타입을 string 으로 추론
Object.keys(obj).forEach(function(value) {
  // 
})
```
### 인터페이스 확장

인터페이스를 확장하면 기존에 정의되어 있던 타입들이 그대로 따라온다

```typescript
interface Preson {
    name : string;
    age : number;
}

//Person 에 있는 두 개의 속성을 그대로 가져옴
interface Developer extends Preson{
    //name : string;
    // age : number;
    language : string; 
}
``` 
기존에 있던 타입까지 모두 작성해야 오류가 나지 않는다
```typescript
var dev: Developer = {
    name : "dev",
    age : 21,
    language: 'js,ts,go,python'
}
``` 

## 5. 타입 별칭  

 
타입 별칭은 특정 **타입**이나 **인터페이스**를 참조할 수 있는 타입변수를 의미한다

### 변수와 파라미터에 타입별칭 사용
```typescript 
// string 타입을 사용할 때
const dog: string = 'dog';

// 타입 별칭을 사용할 때
type dogType = string;
var dog: dogType = 'dog'

//파라미터에 타입을 정의할 때
function setDog(todo: { id: number; name: string; sex: string }){
}

// 타입 별칭을 사용할 때 
type dogType = { id: number; name: string; sex: string };
function setDog(dog: dogType){
}
``` 

### 인터페이스처럼 사용
인터페이스와 같이 복잡한 구조로도 타입 별칭을 사용할 수 있다  

```typescript 
// 타입 별칭을 사용할 때 
type Person = {
	name :string;
    age: number;
};
//인터페이스를 사용할 때
interface Person {
    name: string;
    age: number;
};
```
### 인터페이스와 차이점

타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 이미 정의한 타입에 대해 나중에 쉽게 참고할 수 있도록 이름을 부여하는 것이다  

**VSCode 프리뷰 차이**  
인터페이스는 마우스를 올려보면 해당 인터페이스를 가리킨다  
타입은 마우스를 올려 보면 타입별칭을 보여준다  

**타입의 확장 /불가능 여부**  
인터페이스는 확장이 가능한데 비해 타입 별칭은 확장이 불가능하다  
가능한 한 type 보다 interface 로 선언해서 확장이 가능하게 사용하는 것이 좋다  





