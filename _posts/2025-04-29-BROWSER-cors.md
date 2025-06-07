---
title : cors 정책
categories : browser
---

cors는 Cross Origin Resource Sharing(교차 출처 리소스 공유)의 약자로 브라우저 정책이다.

이것은 http 통신으로 다른 리소스를 요청할 때 출처가 다를 경우 허용하지 않는 거을 말한다.

브라우저는 서버의 응답에 있는 cors를 보고 정책을 적용할지 말지를 결정한다.

https 통신일 경우 정책을 적용하지 않는다.

헤더의 속성으로 `Access-Control-Allow-Origin`을 이용한다.

모든 리소스에 대한 허용은 다음과 같이 한다.

```
Access-Control-Allow-Origin : *
```

자세한 정보는 아래 링크를 참고한다.

<https://namu.wiki/w/CORS>

<https://developer.mozilla.org/ko/docs/Web/HTTP/Guides/CORS>

끝.