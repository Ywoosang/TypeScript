/* 
연산자를 이용한 타입 정의

가능한 타입을 추가하고 싶다면   유니온 타입 | 사용  (or 의 개념임)
하나의 타입 이상을 쓸 수 있도록 만듭니다. 
*/

var ywoosang: string | number | boolean;

function logMessage(value: string | number){
    console.log(value);
    // 타입스크립트가 string, number 에 대한 api 를 추적해서 사용할 수 있게 한다(자동완성에 뜬다.)
    // any 로 지정하면 이렇게 안뜬다. 
    if(typeof value == 'number'){
        value.toLocaleString();
    }
    if(typeof value == 'string'){
        value.toString();
    }
    throw new TypeError('value must bo string or number')
    //타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정 
}
logMessage('GitHub');
logMessage(100) // 타입과 다르므로 오류

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

//man 파라미터는 checkPerson 함수 안에서 접근할 수 있는 속성이 name 밖에 없음(자동완성도 하나밖에 안뜸)
//union 타입 처음 배웠을 때 헷갈릴 수 있는 부분
// 공통속성만 접근할 수 있게 엔진에서 작성되어 있습니다. 
// man 이 어떤 속성이 들어올 지 모르기 때문에 skill 과 age 를 타입 검증 없이 써버리게 되면
// 코드상으로 에러가 발생할 수 있다고 판단을 하기 때문에 인터페이스나 구조체를 여러개를 유니온타입으로 썼을 때는
// 공통된 속성으로만 제공합니다. 
// 타입가드 
function checkPerson(man: Developer | Person){
    man.name;
    man.skill = 'js,ts,py,go'  
    man.age = 21

}


/*
and 연산자 & 를 이용한 인터섹션 타입
and 연산자에서 쓰이는 부호 & 를 이용해 타입을 연결해 주는 것이 인터섹션입니다. 
*/
var personName: string & number; // never  라고 하는 불가능한 타입으로 나온다. 
//string 이면서 number 일 수 없다. 


function checkPerson2(man: Developer & Person){ //유니온이 아니라 인터섹션으로 하면 아래 age,skill 오류 표시가 사라짐. 
    //Developer가 가지고 있는 name 과 skill
    //Person 이 가지고 있는 name 과 age 를 모두 포함한 세 개의 속성을 가지는 타입이 인터섹션이라는 것 
    //유니온 타입과 같은 경우에는 skill 과 age를 보장할 수 없기 때문에 타입 가드에 대한 
    // 추가적인 처리가 필요한 반면에, 인터섹션으로 정의한 코드 같은 경우는 타입 가드가 별도로 필요가 없이
    // someone 은 Developer 과 Person 이 가지고 있는 모든 타입을 포함한 하나의 타입으로 정의한 것이기 떄문에
    // 바로 접근할 수 있습니다. 
    // 유니온과 인터섹션의 차이
    man.name;
    man.skill = 'js,ts,py,go'  
    man.age = 21

}

/*
실무에서 유니온과 인터섹션중 유니온이 많이 쓰이는 이유
*/ 




// 유니온을 사용했을때는 Developer 의 name, skill 혹은 Person 의 name,age 를 넣어주면된다. 
function checkPerson(man: Developer | Person){
    man.name;
    man.skill = 'js,ts,py,go'  
    man.age = 21

} 
// 서비스 개발할때 데이터 따라서 넘기는 방식
checkPerson({name: 'Ywoosang',skill : 'backend'});

// Developer 와 Person 을 합친 하나의 type 이기 때문에 
// name, skill , age 을 모두 합한 오브젝트를 넘겨야 한다. 
// 인터섹션은 하나의 타입을 만드는 것입니다. 이것이 유니온과 인터섹션의 가장 큰 차이입니다. 
checkPerson2({name:'ywoosang', age:21});  //에러 
checkPerson2({name:'Ywoosang',skill : 'backgend', age :21}); 