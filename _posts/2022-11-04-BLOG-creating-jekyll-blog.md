---
title : Jekyll Blog 만들기
categories : blog
tags: jekyll blog create
--- 

## Jekyll이란

기본적으로 데이터베이스와 웹애플리케이션 연동없이는 정적 페이지를 유연하게 생성하기가 어렵다.

Jekyll은 데이터베이스와 웹애플리케이션 연동없이 정적 페이지를 유연하게 만들고 이를 웹사이트나 블로그에 적용할 수 있게 프레임워크이다.

## 준비사항

jekyll을 통한 블로그를 생성하기 위해서는 `ruby`와 `gem`이 설치되어야 하며 추가로 `bundler`와 `jeykyll`이 설치되어야 한다.

아직 설치가 안되었다면 아래 `jekyll 설치` 링크로 이동하여 설치 방법을 확인한다. 

[jekyll 설치](/jekyll/installation/jekyll-blog-installation/)

설치가 되었다면 블로그를 생성할 위치로 이동한다. 

윈도운 cmd 창을 열고 `C:`로 이동한다.

```
> cd C:\>
```

다음 명령어를 입력한다.

```
> jekyll new my-awesom-site
```

정상적으로 실행이되면 `my-awesom-site`폴더가 생서된다.

프로젝트 이름인 `my-awesom-site`는 사용자가 원하는 대로 변경할 수 있다.

생성된 폴더로 이동하고 `bundle exec jekyll serve` 명령어로 서버를 실행한다.

```
> cd my-awesom-site
> bundle exec jekyll serve

>>>>
...
 Server address: http://127.0.0.1:4000/
...
```

브라우저의 주소 입력란에 `http://127.0.0.1:4000` 입력하고 접속해본다.

별다른 오류 메시지가 없다면 정상적으로 jekyll이 설치되고 실행된 것이다.

끝.




