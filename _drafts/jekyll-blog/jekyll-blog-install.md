---
title : Jekyll Blog Install
categories : jekyll blog
--- 

## 1. Ruby 설치 

jekyll은 Ruby 기반에서 설치된다. 

먼저 Ruby를 설치해야 한다.

아래의 링크로 이동하여 원하는 루비 버전을 선택하여 다운로드 받고 설치한다.

[루비 설치하기 링크](https://rubyinstaller.org/downloads/)

## 2. gem 명령어를 이용한 bundler와 jekyll 설치

ruby 설치 이후 gem 명령어를 이용하여 bundler와 jekyll 패키지를 설치한다. 

~~~
	$ gem install bundler jekyll
~~~

설치가 완료된 후 버전확인 명령어를 통해 잘 설치되었는지 확인한다. 

~~~bash
	$ jekyll -v
	# jekyll 4.1.1
	
	$ bundle -v 
	# Bundler version 1.17.2
~~~



















