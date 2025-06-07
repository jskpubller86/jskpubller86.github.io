---
title : 엄격 모드
categories : typescript
---

타입스크립트에서 엄격한 타입검사를 위해서 두가지 방법이 있다. 

## 1. noImplicitAny

타입스크립는 선언만하고 값을 지정하지 않을 경우 암묵적으로 any형으로 추정한다.

```ts
let m; // 암묵적으로 any타입으로 추정
m = '';
m =1;
```

그러나 이러한 암묵적인 any형은 코드를 파악하는 것을 더 어렵게 할 수 있다. 그래서 이러한 암묵적인  any 타입을 막기 위해서 tsc에서는 noImplicitAny 옵션을 제공한다.

```sh
tsc --noImplicitAny hello.ts
```

## 2. strictNullChecks

기본적으로 어떤 타입들은 `null` 또는 `undefined`를 할당한다.

이러한 기본값들은 코드를 편하게 하지만 예상치 못한 오류를 만나게 한다.

그래서 `strictNullChecks` 옵션을 통해서 이러한 오류를 방지할 수 있다.

```ts
declare const loggedInUsername: string;
 
const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];
 
const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age);
```

