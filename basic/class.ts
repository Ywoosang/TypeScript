class Person{
    // 최상단에 선언부터 해주어야 합니다. 
    // 변수의 유효범위를 지정할 수 있습니다. 
    //클래스 안에서만  private, 기본적: public 
    // readonly : 읽기만 할 수 있고 값을 변경할 수 없다. 
    private name: string;
    public age : number; 
    readonly log :string; 
    // 들어오는 파라미터 
    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }
}

