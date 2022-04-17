---
title : Naver 검색엔진에 블로그 등록하기
categories : linux tail real-time logs
---

## 네이버 웹마스터 활성화


네이버 검색 어드마이저(<https://searchadvisor.naver.com/>)로 이동한다.


네이버 아이디로 로그인한다.

혹시 `네이버 서치어드바이저 이용 동의` 화면이 나오면 동의한다.

내 사이트가 검색 최적화에 문제가 없는지 확인하기 위해서 웹마스터에 내 사이트를 등록해야한다.

웹마스터 도구 페이지로 이동 후 사이트 등록 양식에서 현재 사용 중인 깃 블로그의 주소를 입력하여 추가한다. 

그 후 빨간색 표시에 있는 버튼을 클릭하여 사이트 소유 확인 페이지로 이동한다.

![사이트 등록 페이지](/assets/images/naver/webmaster.PNG)

사이트 소유 확인 페이지에서 `1. HTML 확인 파일을 다운로드 합니다.` 부분에 있는 `HTML 확인 파일`을 클릭하여 파일 다운로드 받고 블로그의 루트에 파일을 업로드한다.

![사이트 등록 페이지2](/assets/images/naver/webmaster2.PNG)

업로드 후 3번에 있는 링크를 클릭하여 정상적으로 업로드 되었는지 확인한다.

연결이 되면 다음과 비슷한 화면이 나온다.

![사이트 등록 페이지2](/assets/images/naver/webmaster3.PNG)


업로드에 링크까지 확인하였다면 소유확인 버튼을 클릭하여 소유확인을 진행한다.


소유확인이 끝나면 간단체크 페이지로 이동하여 내 블로그를 검사해본다.

![사이트 등록 페이지2](/assets/images/naver/webmaster4.PNG)


검사에서 내 블로그 같은 경우에는 `robots.txt가 존재하지 않습니다.` 경고를 확인할 수 있다. 

이를 해결하기 위해서 옆에 `네이버 로봇 차단 설정/변경` 링크를 클릭한다. 

클릭하면 `robots.txt 설정하기` 페이지로 이동한다. 

robots.txt 파일은 로봇이 내 블로그의 정보를 수집할 때 여러 규칙을 설정할 수 있다. 

일반적으로 규칙이 없다면 내 블로그의 모든 정보를 수집한다.

나의 같은 경우는 다음과 같이 설정했다. 

```
User-agent: *
Allow: /
Sitemap : https://jskpubller86.github.io/sitemap.xml
```

- `User-agent: *` : 모든 로봇을 허용한다.
- `Allow: /` : 모든 페이지 수집을 허용한다.
- `Sitemap: https://jskpubller86.github.io/sitemap.xml` : 로봇에게 사이트 맵의 주소를 알려준다.












