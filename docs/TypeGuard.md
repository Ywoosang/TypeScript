## 타입 가드

다음과 같이 함수의 출력타입으로 Project 와 Book 의 유니온 타입을 지정한다  
ame,language,page 를 모두 포함해 리턴했음에도 불구하고 유니온 타입을 이용했기 때문에 공통속성인 name 만 접근 가능하다  
```typescript
interface Project{  
    name : string,
    language : string,
}
interface Book {
    name : string,
    page : number, 
}

function start(): Project | Book {
    return { name : 'Ts', language :'TypeScript', page: 33 };
} 

const tsProject = start();
console.log(tsProject.name);
// 오류표시
console.log(tsProject.language);
console.log(tsProject.page);
``` 
타입 단언을 통해 해결할 수 있지만 코드 가독성이 많이 떨어진다  
```typescript
if((tsProject as Project).language){
    const language = (tsProject as Project).language;
    console.log(language);
} else if((tsProject as Project).page){
    const page = (tsProject as Project).page;
    console.log(page);
}
``` 
이때 타입가드`is` 를 사용해 실제로 해당 타입인지 구분하는 함수를 만들어 적용할 수 있다
```typescript
// 타입 두 개가 모두 포함되기 때문에 유니온 사용
function isProject(target : Project | Book) : target is Project {
    // language 속성이 있을 때 Project 타입으로 취급
    return (target as Project).language !== undefined; 
} 
if(isProject(tsProject)) {
    //
    console.log(tsProject.skill);  
} else {
    // Project 타입이 아닐 경우 유니온에 설정된 Book 타입이 자동으로 적용
    console.log(tsProject.page);
}
``` 
타입가드는 내부 로직을 통해 인자로 넘겼던 값이 해당 타입인지 `bool` 로 나타내주기 때문에 코드를 간결하게 작성하는데 도움이 된다
  
전체 코드는 다음과 같다
```typescript
interface Project{  
    name : string,
    language : string,
}
interface Book {
    name : string,
    page : number, 
}
function start(): Project | Book {
    return { name : 'Ts', language :'TypeScript', page: 33 };
} 
function isProject(target : Project | Book) : target is Project {
  return (target as Project).language !== undefined; 
} 
const tsProject = start();

if(isProject(tsProject)) {
  console.log(tsProject.language);  
} else {
  console.log(tsProject.page);
}
``` 
 


