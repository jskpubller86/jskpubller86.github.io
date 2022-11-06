---
title : Creating Jekyll Blog Project
categories : jekyll blog
--- 

## 1. 블로그 프로젝트 생성

<br>

jekyll을 통한 블로그를 생성하기 위해서는 `ruby`와 `gem`이 설치되어야 하며 추가로 `bundler`와 `jeykyll`이 설치되어야 한다.

아직 설치가 안되었다면 아래 링크로 이동하여 설치 방법을 확인한다. 

[나만의 블로그 생성](./jekyll-blog-installation.md)

설치가 되었다면 블로그를 생성할 위치로 이동한다. 

윈도운 cmd 창을 열고 `C:`로 이동한다.

<br>

```
> cd C:\>
```

<br>

다음 명령어를 입력한다.

<br>

```
> jekyll new my-awesom-site
```
<br>

정상적으로 실행이되면 `my-awesom-site` 폴더가 생성되어 있을 것이다.

생성된 폴더로 이동하고 `bundle exec jekyll serve` 명령어로 서버를 실행한다. 

<br>

```
> cd my-awesom-site
> bundle exec jekyll serve

>>>>
...
 Server address: http://127.0.0.1:4000/
...
```

<br>

`http://127.0.0.1:4000` 주소로 접속해본다.

<br>

![블로그 화면](/assets/images/jekyll-blog/creating-jekyll-blog/1.png)

위 화면이 보인다면 정상적으로 블로그 생성이 완료된 것이다.

이제 앞으로 블로그를 열심히 작성하면 된다.








