---
title : es6 옵션 연결자 (optional-chaining)
category : language javascript
---

옵션 연결자는 `?`로 옵션을 표시하고 뒤에 chaining 연산자로 연결한다.

다음 예문을 보자

```js
const name = data?.name;
```

여기서 data 객체 뒤에 옵션 표현자를 넣었다.

만약 데이터가 없다면 name에는 어떤 값이 들어갈까?

옵션 연산자는 기본적으로 선행된 객체가 null이거나 undefined일 경우  undefined를 리턴한다.

그러므로 값이 없을 경우 name에는 undefined 값이 할당 된다.


