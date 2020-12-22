type Todo = {id: number; title: string; done: boolean } 

let todoItems: Todo[]; // object[]
//todoItems 는 배열이고 이 안에 있는 것들을 정의해준 것입니다.  [] 붙으면 배열. 

/*
타입에 이름을 부여하는 방법
타입 별칭이라고 합니다. 
상세 타입 설명이 길어지면 매번 쓰기 번거로우므로 이 방식을 사용합니다.

type Todo = {id: number; title: string; done: boolean }


*/


// api
function fetchTodoItems(): Todo[]{
  const todos = [
    //각 객체가 어떻게 구성되었는지 더 구체적으로 정의할 수 있다.
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods

function fetchTodos(): Array<object> {
  const todos = fetchTodoItems();
  return todos;
}

//todo 에 오류 뜬것은 구체적으로 정의해서 없애줌.  
function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

//todo 에 오류 뜬것은 구체적으로 정의해서 없애줌. 
function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item: Todo) => item.done
  );
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 ={
    id: 4,
    title: '아이템 4',
    done : false,
  };

  addTodo(item1);
  addTodo({
    id: 5,
    title : '아이템 5',
    done : false
  });

}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

//fetchTodoItems 에 구체적인 반환값을 정의해 주어야 한다. 
todoItems = fetchTodoItems();
addTwoTodoItems();
log();

/*
npm 에 대한 이해도 높이기.

tsconfig.json
compileOptions : 타입스트립트가 프로젝트를 타입스크립트에서 자바스크립트로 변환할 때
줄 세부 사항들을 정의
allowJS
checkJs
noImplicitAny => True 로 바꾸면 index.js 에서 에러가 뜬다
타입스크립트에서 자바스크립트로 변환할 때 제거하지 않으면 컴파일(변환) 이 되지 않는다.
타이핑(typing) : 타입이 정의되지 않은 코드에 타입을 입혀주는 행위 를 해야한다.


package.json
npm 으로 프로젝트를 초기화 하고 ( npm init -y )



*/
