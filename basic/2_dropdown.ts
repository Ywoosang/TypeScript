interface DropdownItem<T>{
    value : T;
    selected: boolean;
  };
  /*
하나의 인터페이스로 제네릭을 사용해서 여러가지 타입을 커버하는 것이 제네릭의 장점입니다. 
DropdownItem쓸 때 마다 
DropdownItem<string>
DropdownItem<number> 
처럼 어떤 타입으로 쓸 것인지 정의해주기.
  */
  
  const emails: DropdownItem<string>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
  ];
  
  const numberOfProducts: DropdownItem<number>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
  ];
  
  // 
  function createDropdownItem<T>(item: DropdownItem<T>) { // 제네릭
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
  emails.forEach(function (email : DropdownItem<string>) {
    const item = createDropdownItem<string>(email); // 제네릭
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
  });
  
  numberOfProducts.forEach(function(product){
    const item = createDropdownItem(product);
  });

 