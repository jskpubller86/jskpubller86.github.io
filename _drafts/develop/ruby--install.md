---
title : Ruby Install
category : ruby
--- 

## 1. Window에서 Ruby 설치 (2.4 버전 이상 기준)

<br>

### 1.1. Ruby installer download

(Ruby 사이트)[https://rubyinstaller.org/] 이동한다.

Ruby 메인 화면에서 download 버튼을 클릭한다.

![Ruby 사이트 다운로드 화면](/assets/images/develop/ruby-install-0.png)

2.4 버전 이상으로 컴퓨터 아키텍처와 해당하는 installer를 다운받는다.

이때 가급적이면 Devkit이 포함된 installer를 다운로드 받는다.

![Ruby installer download list](/assets/images/develop/ruby-install-1.png)

<br>

### 1.2. Ruby installer 실행하여 설치

Ruby installer를 실행한다.

![executed Ruby installer](/assets/images/develop/ruby-install-2.png)

설치 단계의 기본 값을 변경하지 않고 설치를 진행한다. 

![installing Ruby](/assets/images/develop/ruby-install-3.png)

설치가 완료되면 `msys2` 을 설치해야한다. 다음 그림에 보이는 옵션을 선택하고 `finish` 버튼을 클릭한다.

![installing Ruby](/assets/images/develop/ruby-install-4.png)

MSYS2 설치 화면에서 기본 설치인 1번을 입력하고 `Enter`를 입력한다.

![installing msys2](/assets/images/develop/ruby-install-5.png)

설치가 완료되면 `Enter` 입력하여 console 창을 종료한다.

<br>

### 1.3. Ruby 설치 확인

설치 완료 후 window command 창을 열어 `ruby -v` 명령어를 입력하여 ruby 버전을 확인한다. 

![cheking Ruby version](/assets/images/develop/ruby-install-6.png)

`gem -v` 명령어를 입력하여 gem 버전을 확인한다.

![cheking gem version](/assets/images/develop/ruby-install-7.png)



