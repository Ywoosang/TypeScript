/* 
이넘(Enums)
이넘은 특정 값들의 집합을 의미하는 자료형입니다.

드랍다운이나 정해져 있는 목록의 값들을 지정할 때 사용

숫자형 이넘
*/

enum lang {
    Python, // 0
    Go, // 1 
    Java // 2 
}

var myLang = lang.Python;
console.log(myLang); // 0  별도의 값을 지정하지 않으면 일단 숫자형 이넘으로 취급

// 값을 지정한 문자형 이넘 
enum hub {
    Git= '깃', 
    Hub ='허브',  
}

var myHub = hub.Git;
console.log(myHub); // '깃' 별도로 값을 지정했으므로 지정한 값이 나온다. 


function askQuestion(answer: Answer) {
    if(answer == Answer.Yes){
        console.log('correct');
    }
    if (answer == Answer.No){
        console.log('false');
    }
}
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
enum Answer {
    Yes = 'Y',
    No = 'N'
}

askQuestion(Answer.Yes);
askQuestion("Y"); // 오류 발생 Answer.Yes = "Y" 이지만 자료형이 이넘이기때문에 Answer.Yes 로 해주어야 한다.
//드롭다운에서 구현


