---
title : Downleveling
categories : typescript
---

최신 버전에서 하위 버전으로 변경하는 것을 dowonleveling이라고 한다. 

타입스크립트로 es6형식으로 작성하고 tsc 컴파일하면 es5로 형식으로 변경하고 js파일을 생성한다. 

만약 es6형식을 유지하려고 한다면 --target을 이용할 수 있다.

```sh
tsc --target es2015 hello.ts

```

끝.