## 타입 추론 (Type Inference) 

몇 가지 예를 통해 타입스크립트의 타입추론에 대해 간략이 알아본다  
###  변수의 선언과 할당에 의한 타입추론
a 는 any, b 는 number 로 추론한다  
코드의 타입이 무엇인지 자동으로 추론한다
```ts
let a;
const b = 1;
``` 

### 함수 타입 추론

별도의 타입을 넘기지 않으면 파라미터와 반환값 모두 any 로 취급한다
```typescript
function setNum(num) {
   return num 
}
```
기본값을 할당하면 해당 값의 타입에 맞게 추론한다
```typescript{
function setNum(num = 10){
    return num 
}
``` 

### 제네릭 타입 추론
제네릭을 정의했을 때 제네릭의 값을 타입스크립트 내부적으로 추론해서 변수의 필요한 속성들의 타입을 보장해준다  
```typescript
interface Dropdown<T> {
    value: T; 
    title: string; 
}

const Item: Dropdown<string> {
    value : 'abcd', // string
    title : 'test',
}
```

다음은 제네릭들이 extends 로 엮여있는 상황이다    
넘긴 string타입이 Dropdown 의 제네릭타입에도 넘어가 추론된다  
```typescript
interface Dropdown<T> {
    value: T; 
    title: string; 
}
// 들어온 타입을  value 에도 전달
interface DetailedDropdown<T> extends Dropdown<T> {
    message : T;
    description : string;
}
const detailedItem: DetailedDropdown<string> {
    description : 'testItem',
    message : 'hello', 
    value : 'abcd', // string
    title : 'test',
}
``` 