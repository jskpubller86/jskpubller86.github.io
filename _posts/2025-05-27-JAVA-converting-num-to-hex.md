---
title : JAVA에서 숫자를 HEX값으로 변경
categories : java
---

자바에서는 숫자를 HEX 값 또는 HEX를 숫자로 변경하는 여러가지 방법이 있다. 
그 중 몇 가지를 알아보자.

## 1. 숫자를 HEX값으로 변경하기

### 1.1. String.format을 이용한 방법

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

### 1.2. Integer를 이용한 방법

Integer 클래스를 이용하여 HEX 값으로 변경할 수 있다. 

첫번째 인자는 int 형을 두번째 인자는 표현할 진수이다.

~~~java
	Integer.toHexString(10) // print : a
~~~

<br>

### 1.3. Long을 이용한 방법

int 값의 범위를 넘어가는 숫자는 Long 클래스를 이용하여 변환할 수 있다. 

~~~java
	Long.toHexString(12345678912345L); // print : b3a73ce5b59
~~~

## 2. Hex값을 숫자로 변경하기

자바에서는 HEX 값을 변경하는 방법을 여러가지 지원한다.

그 중 몇가지를 알아보자.

### 2.1. Integer class를 이용한 방법

Integer class의 decode 메서드를 이용하여 16진수 문자열을 integer 값으로 변환할 수 있다. 

변환할 수 있는 값의 범위는 int 형의 값 범위이며 16진수 문자열에는 반드시 "0x"가 포함되어야 한다. 

~~~java 
	String hex = "0xfa" // 250에 대한 16진수 값
	int num = Integer.decode(hex);

	System.out.println(num); // 250
~~~

<br>

### 2.2. Long class를 이용한 방법

int 형의 값 범위보다 큰 숫자의 경우 Long class의 parseLong을 이용할 수 있다. 

첫번째 인자는 16진수 문자열, 두번째 인자는 진수를 명시한다. 

이때 첫번째 인자의 16진수 문자열에는 "0x" 문자가 필요없다.

~~~java
	String hex = "fa"; // 250에 대한 16진수 값
	long num = Long.parseLong(hex, 16); // 250

	System.out.println(num); // 250
~~~

<br>

### 2.3. BigInteger class를 이용한 방법

큰 Hex문자열의 경우에는 BigInteger class의 생성자를 이용할 수 있다. 

첫번째 인자는 16진수 문자열, 두번째 인자는 진수를 명시한다.

16진수 문자열에는 "0x" 문자가 필요없다.

~~~java
	String hex = "112210F4C023B6D3"; // 1234567891234567891에 대한 16진수 값
	BigInteger num = new BigInteger(hex, 16); // 1234567891234567891

	System.out.println(num); // 1234567891234567891
~~~

끝.