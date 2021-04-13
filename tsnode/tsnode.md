tsc --init
npm i @types/node
타입스크립트 전호
@types 가 붙어있는 패키지는 JavaScript features 를 타입스크립트 번역을 가능하게 해준다

라이브러리, 커맨드 등등

Node.js 문법을 타입스크립트로 사용할 수 있게된다 
타입스크립트에게 자바스크립트 번역을 제공하므로

타입스크립트가 listen 메소드를 감지하지 않기 때문에 컴파일 에러가 나지 않는다 

타입스크립트가 express 패키지를 인식하게 한다

npm i @types/express

타입스크립트는 body 에 어떤 데이터가 담겨오는지 잘 모른다
타입 단언을 이용하자

interface RequestBody {
    text: string; 
}

type RequestParams = { todoId : string};

const body = req.body as RequestBody;
const params = req.params as RequestParams; 

// 컴파일된 파일들이 다른 위치에 있기를 바란다면
tsconfig.json

    "outDir": "./",   :where the generated javascript files will be stored in 

nodemon app.ts 로 typescript 상태로 실행시키고 싶다면 ts-node 설치 
ts-node 는 메모리 상에서 티입스크립트를 transpile 하여 바로 실행할 수 있게 해준다. 


@types/node : Node.js 를 위한 타입 지원 패키지
https://www.npmjs.com/package/@types/node 



npm i ts-node nodemon 


해당 라이브러리와그에대한 @types 설치해야함 


