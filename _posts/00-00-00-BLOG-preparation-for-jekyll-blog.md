---
title : Jekyll 블로그를 위한 준비
date : 2025-07-16
categories : blog
tags : install jekyll blog
--- 

## 1. Ruby 설치

<br>

jekyll은 Ruby 기반에서 설치된다. 그러므로 Ruby를 설치해야 한다.

아래의 링크로 이동하면 일반 루비와 개발툴을 포함한 루비가 있는데 그 중에서 개발툴을 포함한 루비를 받아 설치한다. 

나와 같은 경우는 `Ruby + Devkit 2.7.6-1 (x64)`를 받았다.

다운로드 받은 파일을 실행하면 라이센스 동의여부를 구하는 화면이 첫 번째로 나오는데 거기에서  `I accept the License`를 선택한다.

다음 화면은 옵션을 선택하는 화면이 나오며 기본적으로 옵션이 전부 선택되어 있다.

아무것도 건들지 말고 `Install`을 선택한다.

그냥 `Next`를 선택한다.

설치가 끝나면 `Finish` 버튼이 나온다. `Finish` 버튼을 클릭하고 종료하면 다음화면이 나온다.

3 번을 선택하고 엔터를 눌러 설치를 진행한다.

설치 완료 후 실행하면 옵션 선택 창이 보이는데 기본 값으로 설치를 진행하고 완료한다.

이제 윈도우의 경우 cmd 창을 열고 ruby와 gem 제대로 설치되었는지 확인한다.

```
> ruby -v
>>> ruby 2.7.6p219 (2022-04-12 revision c9c2245c0a) [x64-mingw32]

> gem -v
>>> 3.1.6
```

<br>
<br>

## 2. gem 명령어를 이용한 bundler와 jekyll 설치

<br>

윈도우에서 cmd창을 열고 gem 명령어를 이용하여 bundler와 jekyll 패키지를 설치한다. 

~~~
> gem install bundler jekyll
~~~

<br>
<br>

설치가 완료된 후 버전확인 명령어를 통해 잘 설치되었는지 확인한다. 

~~~
> jekyll -v
>>>> jekyll 4.1.1

> bundle -v 
>>>> Bundler version 1.17.2
~~~

<br>
<br>
 
이제 jekyll blog를 생성할 수 있게 되었고 블로그 생성에 대한 내용은 아래 링크로 이동하여 확인한다.

[Jekyll Blog 만들기](/jekyll/blog/creating-jekyll-blog/)




=끝=




















