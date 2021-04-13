## 타입 단언 

개발자가 선언한 타입을 타입스크립트가 무조건적으로 받아드리는 것을 타입단언이라 한다   

a 타입이 any 이기 때문에 b 타입도 any 가 된다 
```typescript
let a;
const b = a;
```
a 의 값이 바뀌어 버리면 타입스크립트는 바뀐 타입을 추론하지 못하고 여전히 a 타입을 any 로 추론한다 
```typescript
let a; // any
a = 20; // number
a = 'abc'; // string
const b = a; // any
```
이때 타입 단언을 이용해 string 으로 타입을 단언한다  

```typescript
let a; // any
a = 20; // number
a = 'abc'; // string
const b = a as string; // string
```
타입 단언은 `DOM API` 를 조작할 때 가장 많이 사용한다  

다음은 div 태그를 가져오는 예제다  
div 태그가 존재하는지 보장할 수 없다  
if 문을 통해 null 값을 방지하면 정상적으로 추론된다  

```typescript
let div = document.querySelector('div'); 
if(div){
    div.innerText =  
}
```
as 를 사용한다는 것은 코드가 돌아가는 시점에 document 에 div 요소가 무조건 있을것임을 개발자가 보장하는 것이다  
따라서 바로 값에 접근할 수 있다  
```typescript 
let div = document.querySelector('div') as HTMLDivElement;
div.innerText;  
```
