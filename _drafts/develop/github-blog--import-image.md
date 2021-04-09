---
title : jekyll에서 이미지 가져오기
categories : github blog
---

jekyll 테플릿에서 이미지를 가져오려면 경로를 맞춰야 한다. 

먼저 프로젝트 루트에서 `assets > images`에 이미지가 있을 경우 

마크다운 프리뷰에서 확인할 경우 현재 디렉터리의 위치를 기준으로 상대 경로를 적어준다.

~~~
![ALT](../../assets/images/sample.PNG)
~~~

<br>

빌드하고 배포한 상태에서 브라우저에서 이미지를 확인할 경우 `_site` 디렉터리가 root가 되기 때문에 경로는 절대경로로 다음과 같이 변경된다. 

참고로 빌드하게 되면 `_site` 디렉터리 안으로 콘텐츠가 배포된다.

~~~
![ALT](/assets/images/sample.PNG)
~~~

<br>

![이미지 가져오기](/assets/images/develop/github-blog-import-image1.png)

위 두가지 방법 중 절대경로를 지정하여 배포 후 브라우저에서 확인하는 방법 추천한다.