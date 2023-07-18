---
title : google OAuth2 사용자 정보 인증 사용 설정하기
categories : api google
---

구글 OAuth2.0을 사용하려면 먼저 [구글 클라우드 콘솔](https://console.cloud.google.com/)로 이동한다. 

이동 후 상단의 프로젝트 활성화 부분을 선택 후 나오는 팝업에서 `새 프로젝트` 버튼을 클릭한다.

![구글 새 프로젝트 클릭화면](/assets/images/google/google-authentication/01.png)

<br>
<br>

클릭 후 나오는 화면에서 프로젝트 이름을 입력한다.

![새 프로젝트 이름 입력란](/assets/images/google/google-authentication/02.png)

<br>
<br>

입력 후 생성을 완료하면 다음과 같이 생성된 프로젝트를 확인할 수 있다. 

![생성된 새 프로젝트 확인하는 화면](/assets/images/google/google-authentication/03.png)

<br>
<br>
 
위 화면에서 생성된 프로젝트를 선택하면 프로젝트에 대한 시작하기 화면이 보인다. 

혹시 시작하기 화면에서 빠른 액세스 섹션 부분에 `사용자 인증정보 - API 및 서..` 링크가 보인다면 선택하고 안보인다면 상단의 탐색 메뉴에서  `API 및 서비스 > 사용자 인증 정보` 메뉴를 선택한다.

![생성된 새 프로젝트 확인하는 화면](/assets/images/google/google-authentication/04.png)

<br>
<br>

사용자 인증정보 화면에서 상단의 사용자 인증 정보 만들기를 선택하고 `OAuth 클라이언트 ID`를 선택한다.

![사용자 인증정보 화면](/assets/images/google/google-authentication/05.png)

<br>
<br>

선택 후에 `동의 화면 구성` 버튼이 보인다.

버튼을 클릭하면 `User Type` 선택화면이 나오는데 여기서 외부를 선택한다.

선택 후에 동의 구성 화면으로 이동하며 다음과 같은 화면을 볼 수 있다.

입력 정보는 툴팁을 보면 알 수 있으므로 어렵지 않다.

![동의 구성 화면](/assets/images/google/google-authentication/06.png)

<br>
<br>

`동의 구성 화면`을 완료하면 `범위`를 선택하는 화면이 나온다.

일반적으로 민감하지 않은 email과 profile 정보를 선택한다.

![범위 화면](/assets/images/google/google-authentication/07.png)

<br>
<br>

`테스트 사용자` 화면에서 테스터를 등록한다. 

보통 본인 구글 이메일 정보를 입력한다.

<br>
<br>

요약 화면에서 최종적으로 입력정보를 확인한다.

![요약 화면](/assets/images/google/google-authentication/08.png)

<br>
<br>

그러면 다시 `사용자 인증정보` 대시보드로 돌아와서 클라이언트 아이디 만들기를 한다.

![요약 화면](/assets/images/google/google-authentication/09.png)

<br>
<br>

그러면 클라이언트 ID 만들기 화면이 나온다.

여기서 클라이언트는 `google resource`를 사용하는 서버를 의미한다.

즉 자신이 만든 웹 애플리케이션 서버를 의미한다.

자신이 만든 애플리케이션이 웹이면 애플리케이션 유형을 `웹 애플리케이션`으로 선택한다.

![클라이언트 아이디 만들기 화면](/assets/images/google/google-authentication/10.png)

<br>
<br>

`웹 애플리케이션` 유형을 선택하면 `승인된 자바스크립트 원본 [브라우저 요청에 사용]`과 
`승인된 리디렉션 URI[웹 서버의 요청에 사용]` 부분이 보인다.

`승인된 자바스크립트 원본 [브라우저 요청에 사용]`에는 자신의 서버 주소를 입력하고

`승인된 리디렉션 URI[웹 서버의 요청에 사용]`에는 사용자의 브라우저에서 리디렉션을 받을 서버의 주소(자신의 웹서버)를 입력하면 된다.

나의 경우에는 `localhost`에서 진행하기 때문에 `localhost`를 기준으로 설정했다.

![클라이언트 아이디 만들기 화면](/assets/images/google/google-authentication/11.png)

<br>
<br>

아이디 생성을 완료하면 다음과 같은 화면이 생성된다.

![클라이언트 아이디 생성 완료 화면](/assets/images/google/google-authentication/12.png)

<br>
<br>

위 화면에서 `클라이언트 ID`와 `클라이언트 보안 비밀번호`가 OAuth 2.0에서 요구하는 `client_id`와 `client_secret` 부분이다.

이제 위 정보를 가지고 OAuth 2.0을 테스트할 수 있다.

<!-- Spring boot에서 OAuth2를 테스트하기는 아래 링크로 이동한다.

['시큐리티 OAuth2 사용하기'](/spring/security/oauth2/security-oauth2) -->























