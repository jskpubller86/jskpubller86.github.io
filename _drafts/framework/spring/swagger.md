---
title : 스프링 스웨거 적용
category : framework spring
---

스프링에서는 springFox에서 만든 라이브러리를 사용한다.

의존 파일을 그래들(gradle)에 다음과 같이 선언한다.

```gradle
implementation 'io.springfox:springfox-swagger2:3.0.0'
implementation 'io.springfox:springfox-swagger-ui:2.9.2'
```

<br>

그리고 스웨거 환경을 설정하는 클래스를 만든다. 

```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

}
```

<br>

공식 문서는  아래 사이트를 방문하여 확인한다. 

http://springfox.github.io/springfox/
