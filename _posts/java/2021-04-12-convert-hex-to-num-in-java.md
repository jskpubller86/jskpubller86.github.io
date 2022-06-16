---
title : JAVA에서 HEX를 숫자 값으로 변경하기
categories : java convert hex
---

자바에서는 HEX 값을 변경하는 방법을 여러가지 지원한다.

그 중 몇가지를 알아보자.

## 1. Integer class를 이용한 방법

Integer class의 decode 메서드를 이용하여 16진수 문자열을 integer 값으로 변환할 수 있다. 

변환할 수 있는 값의 범위는 int 형의 값 범위이며 16진수 문자열에는 반드시 "0x"가 포함되어야 한다. 

~~~java 
	String hex = "0xfa" // 250에 대한 16진수 값
	int num = Integer.decode(hex);

	System.out.println(num); // 250
~~~

<br>

## 2. Long class를 이용한 방법

int 형의 값 범위보다 큰 숫자의 경우 Long class의 parseLong을 이용할 수 있다. 

첫번째 인자는 16진수 문자열, 두번째 인자는 진수를 명시한다. 

이때 첫번째 인자의 16진수 문자열에는 "0x" 문자가 필요없다.

~~~java
	String hex = "fa"; // 250에 대한 16진수 값
	long num = Long.parseLong(hex, 16); // 250

	System.out.println(num); // 250
~~~

<br>

## 3. BigInteger class를 이용한 방법

큰 Hex문자열의 경우에는 BigInteger class의 생성자를 이용할 수 있다. 

첫번째 인자는 16진수 문자열, 두번째 인자는 진수를 명시한다.

16진수 문자열에는 "0x" 문자가 필요없다.

~~~java
	String hex = "112210F4C023B6D3"; // 1234567891234567891에 대한 16진수 값
	BigInteger num = new BigInteger(hex, 16); // 1234567891234567891

	System.out.println(num); // 1234567891234567891
~~~