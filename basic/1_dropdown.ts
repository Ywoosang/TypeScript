interface Email {
    value : string;
    selected: boolean;
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
  
   