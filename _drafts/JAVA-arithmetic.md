---
title : 산술 연산
categories : java
---

산술연산을 살표보겠다.

## 0으로 나눌 경우 ArithmeticException

0으로 나누면 ArithmeticException이 발생한다.

```java
try {
    System.out.println(5/0);
} catch(ArithmeticException e) {
    System.out.println("출력1");
} finally {
    System.out.println("출력5");
}

// 0을 나누면 0이 나옴
System.out.println(0/5); // 0

```

## 2. 실수와 정수의 산술연산

실수와 정수로 산술 연산을 할 경우 정수를 실수 타입으로 변경한다. 결과도 실수 타입으로 반환한다.

연산 상대의 형이 double이면 double로 float이면 float으로 변환 후 반환한다.

```java
System.out.println(5.5/1); // double형 연산, 5.5
System.out.println(5.5f/1); // float형 연산, 5.5f

float f = 5.5/1; // double형의 연산 결과를 더 작은 자료형인 float에 넣을 때 오류 발생
double d = 5.5f/1; // float형의 연션 결과를 더 큰 자료형인 double에 넣을 때 자동형 변환
```

## 3. char형과 산술연산

문자형과 산술연산을 하면 문자의 유니코드값을 연산 상대의 형으로 변환 후 연산한다.

정수는 int형보다 작을 경우 모두 int형으로 변환한다. 

```java
System.out.println('A'+1); // 유니코드를 int형으로 변환, 66
System.out.println('A'+1L); // 유니코드를 long형으로 변환, 66L
System.out.println('A'+5.5); // 유니코드를 double형으로 변환, 70.5
System.out.println('A'+5.5f); // 유니코드를 float형으로 변환, 70.5f

byte b = 127;
System.out.println('A'+b);  // 유니코드를 int로 변환 byte 변수 b도 int형으로 변환, 192
```

## 4. 양수와 음수의 산술연산

```java
System.out.println(-1-1); // -2
System.out.println(-1+-1); // -2
System.out.println(-1+1); // 0
System.out.println(-1.1+1); // -0.10000000000000009
System.out.println(-'A'-1); // -66
```

## 5. 전위 연산자

```java
int num = 1;
System.out.println(--num+1); // 0 + 1 => 1 
System.out.println(num+++1); // 0 + 1 => 1, num = 1
System.out.println(num+1); // 1 + 1 => 2

```
