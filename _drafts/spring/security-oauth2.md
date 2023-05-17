---
title : 시큐리티 OAuth2 사용하기
categories : spring security oauth2
---

spring으로 프로젝트를 진행하면 대부분 security를 이용하여 회원가입 및 로그인 기능을 구현한다.

그중 OAuth2를 처음 진행할 때 어려워하는 부분이 많다.

그래서 이번에 정리를 하려고 한다.

먼저 구글의 OAuth2를 사용하기 위해서 구글의 사용자 인증정보를 사용해야 한다. 

설정 방법은 아래 링크를 참고한다. 

[google OAuth2 사용자 정보 인증 설정하기](/google/authentication/oauth2/google-authentication/)


구글 사용자 인증정보 설정을 하였다면 스프링에서 security-oauth2 사용하기 위해서 의존파일이 있어야 한다.

아래와 같이 먼저 의존 파일을 정의한다.

여기서는 gradle을 사용한다.

```gradle
    implementation 'org.springframework.boot:spring-boot-starter-security'
    implementation 'org.springframework.boot:spring-boot-starter-oauth2-client'
```

<br>
<br>

의존 파일을 받은 후에는 환경 설정을 한다.

먼저 Application 설정 파일에 client_id와 client_secret을 설정해야 한다.

여기서는 자신이 소유한 google 사용자 인증 정보의 client_id와 client_secret을 사용한다.


```yml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: {google-client-id}
            client-secret: {google-secret-id}
```


그리고 spring boot에서 다음과 같이 환경설정을 한다.

```java
@Configuration
@EnableWebSecurity
public class SecurityConfigure {

	...

	/**
	 * 세션 비활성화
	 * @param http
	 * @return SecurityFilterChain
	 */
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests(config ->
					config
						.anyRequest().authenticated()
			)
			.oauth2Login()
		;

		return http.build();
	}
}
```

<br>
<br>

위 설정을 살표보면

`.authorizeRequests()` 메서드를 통해서 어떤 요청이든 권한이 있어야 접근할 수 있도록 설정했다.

`.oauth2Login()` 메서드를 통해서 OAuth2 로그인을 사용하겠다고 선언했다. 아무런 설정을 하지 않으면 기본 설정이 적용된다.

설정 후 해당 `http://localhost:8080/login`에 접속하면 시큐리티에서 기본으로 제공하는 로그인 화면을 확인할 수 있다.

![로그인 화면](/assets/images/spring/security-oauth2/01.png)

<br>
<br>

위 화면에서 `Google` 링크 버튼을 개발자 도구를 보면 링크의 경로가 `http://localhost:8080/oauth2/authorization/google`를 가리킨다. 

그리고 링크를 클릭하면 아래 그림처럼 구글의 인증화면을 볼 수 있다.

![구글 인증 화면](/assets/images/spring/security-oauth2/02.png)

<br>
<br>

이상하다 분명 링크는 서버를 향해 링크를 가리켰는데 어떻게 인증화면이 나온 것일까?

그건 시큐리티의 필터에서 내부 구조를 보면 이해가 된다. 

잠깐 시큐리티의 내부 필터 구조를 보면 아래의 그림처럼 `OAuth2AuthorizationRequestRedirectFilter` 필터를 확인할 수 있다.

![구글 인증 화면](/assets/images/spring/security-oauth2/04.png)

<br>
<br>

아래의 링크로 이동하면 이 필터에 대한 설명을 볼 수 있는데

https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/oauth2/client/web/OAuth2AuthorizationRequestRedirectFilter.html

거기에서 아래 내용을 보면  user-agent와 Authorization Endpoint 포인트를 연결하도록 리다이렉팅을 초기화한다는 것을 볼 수 있다.

`This Filter initiates the authorization code grant flow by redirecting the End-User's user-agent to the Authorization Server's Authorization Endpoint.` 

결론적으로 `http://localhost:8080/oauth2/authorization/google` 요청에 대하여 `OAuth2AuthorizationRequestRedirectFilter`에서 `Authorization Endpoint`의 리다이렉트를 `user-agent`에 응답하기 때문에 우리가 위에서 구글 로그인 화면을 볼 수 있는 것이다.

구글 로그인 화면은 구글 사용자 인증 정보에서 설정한 정보를 보여준다.

여기서 우리가 계정을 선택하게 되면 구글 인증서버는 인증을하고 인증 후에 

아래의 URI로 리다이렉트 응답을 하게 된다.

`http://localhost:8080/api/v1/login/oauth2/code/google?state={상태}&code={인증 코드}&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&prompt=consent`

<br>
<br>

브라우저(user-agent)는 리다이렉트를 통해 서버에 위 주소로 요청을 하고 서버쪽의  `OAuth2LoginAuthenticationFilter`에서 `/login/oauth2/code/*` uri에 대해 토큰을 받는 작업을 수행한다. 






















































































