---
title : Class 클래스
categories : java
---


## 1. Class 클래스란?

Class 클래스란 클래스의 정보를 가져오기 위한 클래스이다.


## 2. Class 생성하기

Class 클래스를 이용해서 클래스의 정보를 가져오는 방법은 세 가지가 있다.

`Object 클래스의 getClass()메서드를 사용하는 방법`

```java
String s = new String();
Class c = s.getClass();
```

`클래스 파일 이름을 Class변수에 직접 대입하는 방법`

```java
Class c = String.Class;
```

`Class.forName("클래스 이름") 메서드를 사용하는 방법`

```java
Class c = Class.forName("java.lang.String");
```

## 3. 클래스 정보 가져오기

Class 클래스는 클래스에 대한 여러 정보를 제공한다. 그중에서 대표적으로 생성자와 변수 그리고 메서드를 정보를 가져오는 방법은 다음과 같다.

```java
Class strCls = Class.forName("java.lang.String");

// 생성자 가져오기
Constructor[] cons = strCls.getConstructors();

//모든 인스턴스 변수 가져오기
Field[] fields = strCls.getFields();

// 모든 메서드 가져오기
Method[] methods = strCls.getMethods();

```

## 4. Class 클래스로 인스턴스 생성하기

Class 클래스로 인스턴스를 생성할 수 있다.

```java
Class cls = String.Class;
String str = (String)cls.newInstance();
```

그러나 이 방법은 9버전부터 아래와 같은 방법으로 변경되었다.

```java 
Class cls = String.Class;
String str = (String)cls.getDeclaredConstructor().newInstance()
```


## 5. 클래스를 동적으로 메모리에 로딩하기

프로그램이 실행되면 클래스는 메모리에 로딩된다. 만약 실행 후 추가적으로 클래스가 필요하다면 동적으로 로딩해야 한다. 이때 Class의 forName을 사용한다.

```java
Class strCls = Class.forName("Sample"); // 프로그램이 실행 된 후에  Sample 클래스를 메모리에 로딩할 수 있다.
```

끝.
