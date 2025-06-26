---
title : 타입스크립트 컴파일러의  noEmitOnError 옵션션
categories : typescript
---

tsc(type script compiler)는 타입의 오류가 있더라도 ts파일을 해석해서 js 파일을 생성한다.
만약 이러한 것을 막고 싶다면  `--noEmitOnError`을 추가한다.

```sh
tsc --noEmitOnError hello.ts
```

끝.
