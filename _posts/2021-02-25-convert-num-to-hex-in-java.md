---
title : JAVA에서 숫자를 HEX값으로 변경하기
category : java
---

## 1. String.format을 이용한 방법

String.format()에서 %x 표현은 두번째 인자의 숫자 값을 HEX 문자 출력한다.

~~~java
	// int type
	String.format("%x", 10); // print : a
	
	// long type
	String.format("%x", 10000000000L); // print : 2540be400 

	// byte type
	byte b = 127;
	String.format("%x", b); // print : 7f

	// short type
	short s = 32766;
	String.format("%x", b); // print : 7ffe
~~~

<br>

대문자 %x에서 x는 대소문자를 구별하지 않는다. 

~~~java
	String.format("%x", 10); // print : a
	String.format("%X", 10); // print : a
~~~

<br>

만약 HEX 문자열을 "0000a" 와 같이 지정한 자리 수에서 앞 부분을 0으로 채워 출력하고 싶다면 다음과 같이 한다. 

~~~java
	String.format("%05x", 10); // print : 0000a
~~~

<br>

## 2. Integer를 이용한 방법

Integer 클래스를 이용하여 HEX 값으로 변경할 수 있다. 

첫번째 인자는 int 형을 두번째 인자는 표현할 진수이다.

~~~java
	Integer.toHexString(10) // print : a
~~~

<br>

# 3. Long을 이용한 방법

int 값의 범위를 넘어가는 숫자는 Long 클래스를 이용하여 변환할 수 있다. 

~~~java
	Long.toHexString(12345678912345L); // print : b3a73ce5b59
~~~

