interface Email {
    value : string;
    selected: boolean;
  }
// 타입 두 개가 모두 포함되기 때문에 유니온 사용
 
  
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
  // language 속성이 있을 때 Project 타입으로 취급
  return (target as Project).language !== undefined; 
} 
const tsProject = start();

if(isProject(tsProject)) {
  //
  console.log(tsProject.language);  
} else {
  // Project 타입이 아닐 경우 유니온에 설정된 Book 타입이 자동으로 적용
  console.log(tsProject.page);
}

  
  
  const emails: Email[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
  ];
  
  interface ProductNumber {
    value : number;
    selected:boolean; 
  }
  
const a:number | string = 'a';

  const numberOfProducts: ProductNumber[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
  ];
  
  // 
  function createDropdownItem(item: Email | ProductNumber) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
  }
  
  // NOTE: 이메일 드롭 다운 아이템 추가
  /*
  emails 와 numberOfProducts 두 개를 모두 수용할 수 있는 타입을 정의해야한다. 
  
  여기서 values 의 형식이 number, string 모두 있으므로 
  */
  emails.forEach(function (email) {
    const item = createDropdownItem(email); //
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
  });
  
  numberOfProducts.forEach(function(product){
    const item = createDropdownItem(product);
  })
  
   