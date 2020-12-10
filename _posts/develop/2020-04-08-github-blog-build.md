
# Github 블로그 만들기

Github에서는 회원에게 웹호스팅과 도메인을 각각 한 개씩 제공한다. 
이를 이용하기 위해서는 먼저 저장소를 만들어야 하는데 웹호스팅을 할 수 있는 저장소의 이름은 회원아이디를 이용하여 생성해야 한다. 

만약 회원아이디가 korea 라면  korea.github.io  로 생성해야한다. 

korea.github.io 로 저장소가 생성이 되면 웹호스팅에 배포되고 도메인 주소 https://korea.github.io/ 로 접근할 수 있게 된다.

## 1. jekyll framwork  이용하기 

일반적으로 html을 이용하여 블로그를 작성할 수 있지만 그렇게하면 글을 꾸미기 위해서 많은 태그들을 사용하게 된다. 

태그를 사용하는 일은 반복적이고 귀찮은 일이다. 

위의 대안으로 markdown을 이용하여 좀더 쉽게 글을 꾸밀 수 있지만 markdown이 지원하는 태그는 몇가지가 안되기 때문에 html을 사용할 수 밖에 없다. 

그래서 이 둘을 간편하게 작성할 수 있도록 도와주는 프레임워크가 나왔는데 바로 jekyll 이라는 프레임워크이다. 

참고로 나는 jekyll을 제길로 읽는다. 

jekyll 은 마크다운과 html을 모두 지원하며 오직 파일로만 블로그 글을 쉽게 작성할 수 있도록 지원해준다. 

jekyll의 사이트 주소는 아래와 같다. 

https://jekyll.com/

사이트에 가면 사용법에 대하여 문서화가 되어있다. 

영어를 잘하면 매번 들어가서 확인하면 되지만 난 그러지 못하기 때문에 어려움을 덜고자 정리글을 쓴다. 

### 1.1. 설치하기 

jekyll을 사용하기 위해서는 먼저 Ruby 개발환경이 구축되어 있어야 한다. 

Ruby개발환경을 구축하는 방법에 대해서는 따로 글을 작성하겠다. 

그럼 Ruby 개발환경이 구축되어 있다고 가정하고 jekyll과 bundler를 설치해야 한다.
터미널을 열고 다음 명령어를 입력한다. 

```bash
gem install jekyll bundler
jekyll -v   # version 확인
```
jekyll 프레임워크에는 구축에 필요한 의존파일들이 있다. 이러한 의존파일들을 설정하기 위해서는 Gemfile을 만들어야 하는데 다음의 명령어로 생성할 수 있다. 
참고로 Gemfile은 사이트의 루트 폴더에 위치해야 한다. 

```
gem "jekyll"
```
만약 위 명령어에서 오류가 발생하면 아래와 같이 한다.
```
gem install jekyll
```
Gemfile과 Gemfile.lock 이 생성되었으면 준비는 끝났다.

### 1.2. 파일 생성

루트 경로에 간단하게 index.html 파일을 생성한다. 

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Home</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```
### 1.3. 빌드

jekll은 빌드를 통해 정적파일을 생성한다.

빌드를 하기 위해서는 다음 두 명령어를 사용한다.

```bash
jekyll build  # 해당 명령어로 빌드를 하게 되면 _site 라는 폴더에 정적파일들을 생성한다.
jekyll serve # http://localhost:4000  서버를 실행한다.
```
현재 index.html 을 위와 같이 생성한 상태에서 터미널을 열고 빌드와 배포를 하면 
http://localhost:4000 주소에서 "Hello World!" 를 확인 할 수 있다.
배포한 상태에서 파일을 수정하게 되면 수정한 내용이 반영된다. 

















