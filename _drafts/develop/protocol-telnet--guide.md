---
title : telnet 사용하기
categories : protocol telnet
---

리눅스는 기본적으로 활성화되어 있고 윈도우에서는 보안을 위해 기본저긍로 텔넷이 비활성화 되어 있다. 

`제어판 > 프로그램`으로 이동한 후 `windows 기능 켜기/끄기` 선택한 후 옵션 선택 화면에서 `Telnet Client`를 활성화 한다. 

<br>

## 1. 텔넷(telnet)으로 네트워크 확인

~~~
    # telnet <ip> [port]
    telnet www.naver.com 80
~~~

<br>

## 2. 텔넷(telnet) 빠져나오기 

연결된 텔넷 창에서 빠져나오는 방법은 리눅스(linux)와 윈도우(window)가 다르다.

### 2.1. 윈도우(window)에서 빠져나오기 

`ctrl + ]`를 눌러 빠져나온 후  `q`를 입력하여 종료 한다. 

### 2.2. 리눅스(linux)에서 빠져나오기 

`close` 명령어를 입력 후 엔터를 입력하여 빠져나온 후  `q`를 입력하여 종료한다.
