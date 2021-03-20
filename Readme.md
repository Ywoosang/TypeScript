

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

### 1.1 Ts 문자열 선언 
변수 이름 : 타입 으로 선언한다  
문자열 타입으로 간주하겠다라는 의미다

```javascript
let str: string = '123'; 
```

### 1.2 Ts 숫자 선언 
숫자는 number 을 사용한다 
```javascript
let num: number = 123;
```

### 1.3 Ts 배열 선언

strArr 변수는 Array 타입이고 그 배열 안에 string 만 들어갈 수 있다는 의미다  
```javascript
let strArr: Array<string> = ['1','2','3'];
``` 
아래 두 개는 동일한 의미입니다.
```javascript
let numArr: Array<number> = [1,2,3];
let numArr: number[] = [1,2,3];  // number 에 배열리터럴 사용  
``` 

### 1.4 Ts 튜플

모든 인덱스에 타입이 정의되어 있는 배열을 의미한다   
배열의 특정 순서에 타입까지 정의한다   
```javascript
let tuple: [string,number,Array<number>] = ['1',1,[1]];
```

### 1.5 Ts 오브젝트

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

### 1.6 Ts 진위값

타입을 boolean 으로 넣어준다  
```javascript
let bool: boolean = true ; 
```

## 2.함수에 타입 지정

### 2.1 기본적인 타입 지정
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

### 2.2 옵셔널 파라미터 사용

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
### 2.3 화살표 함수에 타입 지정

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
### 3.1 any
any 는 string number array ... 등 모든 타입을 통칭해서 부르는 단어다  
실행하는 시점에 타입을 구분해서 할당해주는 바닐라 자바스크립트 성질과 비슷하다  
처음 any 를 지정하고 그 다음 구체적인 타입으로 지정해 나가면 편리하다   
```javascript
let todo : any ; 
``` 

### 3.2 void 

void 를 사용해 함수에서 반환값이 없다는 것을 명시적으로 정의해주자  
```javascript
function consoleLog(item: string): void{
    console.log(item);
}; 
```
 
