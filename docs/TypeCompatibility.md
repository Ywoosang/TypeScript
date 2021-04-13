## 타입 호환

### 인터페이스 타입호환

구조적으로 넓은쪽을 좁은쪽에 할당할 수 있다  
좁은쪽을 넓은 쪽에 할당하면 에러가 난다  
```typescript
interface Developer {
    name : string;
    language : string; 
}
interface Person {
    name : string;
}
// dev 가 person 보다 넓음
let dev: Developer;
let person: Person;

person = developer;
// error
dev = person; 
```

타입호환에서는 구조가 중요하다  
interface,class 등은 의미가 없다  
다음과 같이 사용해도 에러가 발생하지 않는다  
```ts
 class Developer {
    name : string;
    language : string;
}
interface Person {
    name : string;
} 
let person: Person;
person = new Developer();
``` 


### 함수

구조적으로 파라미터가 적은 쪽을 파라미터 가 많은 쪽에 할당할 수 있다  
반대의 경우 에러가 발생하는데 나머지 파라미터를 받을 수 없기 때문이다  
```ts
let add =(a:number)=> {
    //
}
let sum = (a:number, b:number) => {
    // 
}n  
sum = add;
// error
add = sum 
```

