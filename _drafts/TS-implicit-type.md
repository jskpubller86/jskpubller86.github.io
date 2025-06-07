---
title : 암묵적인 형선언
categories : typescript
---

타입스크립트에서 기본타입들은 타입을 명시하지 않아도 처음 대입되는 값을 통해 그 값을 추정한다.

## 1. 변수

```ts
let m = ''; // 문자열형으로 인식
m = 1; // 문자열형에 숫자를 넣는다고 인식해서 오류
```
만약 값을 대입하지 않는다면 any로 추정한다.

```ts
let m; // any로 추정, any형에는 어떠한 값을 넣어도 됨.

m = 1;
m = '나는 문자';
m = {};
```

## 2. 함수

함수도 변수와 마찬가지로 타입을 지정하지 않으면 any로 추정한다.

```ts
// num 파라미터를 any로 추정.
const func = (num)=>{
    console.log(num);
}
func(10);
func('');
```

return 타입을 지정하지 않으면 return 문장을 보고 추정한다.

```ts
function fun() {
    return 26; // return 문의 26을 보고 number로 추정.
}
```


익명의 함수는 그 함수가 어떻게 호출되는 지에 따라 타입스크립트가 타입을 추정한다.

```ts
const names = ["Alice", "Bob", "Eve"];

// names의 forEach메서드로 호출되어 익명함수의 s 파라미터를 문자열로 추정.
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
```

위와 같은 형태를 `contextual typing`이라고 한다.

그 이유는 익명을 호출한 context에서 어떤 타입을 가져야 할 지 알려주기 때문이다.


## 3. 오브젝트

오브젝트에 선언한 속성들도 마찬가지로 타입을 명시하지 않으면 초기값으로 추정하거나 아니면 any로 추정한다.

```ts
const edit = {
    num : 1, // number로 추정
    name, // any로 추정
}
```


continue.