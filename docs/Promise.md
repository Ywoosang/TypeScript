
## Promise 를 이용한 API 함수 타입 정의

실제 서비스 코드에서는 `axios` 와 같은 `Promise` 를 반환해주는 API를 많이 사용한다  

`Promise` 에서 `resolve` 된 값이 `Promise` 안 반환 타입이 된다  
여기서는 `resolve` 한 `['a','b','c']` 가 `string[]` 타입이기 때문에 `Promise<string[]>` 과 같이 사용한다 
```typescript
function fetchItems(): Promise<string[]> {
    let items:string[] = ['a','b','c'];
    return new Promise(function(resolve) {
        resolve(items);
    })
}
fetchItems();
``` 
`then` 으로 받았을 때 `response` 의 타입은 `Promise<string[]>` 에서 `resolve` 한 `string[]` 이다  
```typescript
fetchData = () => {
    fetchItems().then(response => {
        // 
    });
}

``` 


```typescript


``` 



```typescript


```  