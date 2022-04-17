---
title : window 운영체제에서 프로세스 찾고 제거하기 
categories : window cmd
---

## 1. 프로세스 PID 포함 확인

~~~
	netstat -ano  // 맨 마지막 숫자가 PID
~~~

<br>

## 2. 특정 포트로 실행하는 프로세스 PID 확인

~~~
	netstat -ano | find "80"
~~~

<br>

## 3. 찾은 프로세스 종료하기

~~~
	taskkill /f /pid [찾은 pid 번호]
~~~