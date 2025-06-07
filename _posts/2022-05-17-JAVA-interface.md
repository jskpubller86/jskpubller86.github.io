---
title : 인터페이스
categories : java
---


## 1. 인터페이스란?

인터페이스는 구현부분 없이 메서드 이름만 제공하여 이를 구현하는 클래스에서 선언된 메서드를 구현하게 제약한다.

선언과 구현을 분리함으로써 공통된 메서드 이름을 통해서 상항에 맞는 기능을 제공할 수 있게 한다.


## 1.1. 작성법

인터페이스를 작성하기 위해서 `interface` 키워드를 사용한다.

```java
public interface Sample {

}
```

인터페이스는 구현부분 없이 메서드 이름만 작성하고 접근제어자는 public으로 제공해야 한다. 만약 public 접근제어자를 선언하지 않으면 암묵적으로 public 접근제어자를 설정한다.

```java
public interface Sample {
    void test();  // 암묵적으로 public 접근제어자 설정
}
```

인터페이스의 변수는 모두 `public static final`로 선언되어 상수처리된다. 그러므로 초기화를 해야 한다.
`public static final`를 선언하지 않아도 암묵적으로 설정한다.

```java
public interface Sample {
    int NUM=0; // 암묵적으로 public static final로 설정
    public static final int NUM2=0; // 초기화는 필수
    void test();  // 암묵적으로 public 접근제어자 설정
}
```

인터페이스에서 구현 가능한 메서드는 default와 static 메서드이다.

```java
public interface Sample {
    static void que(){
        //TODO
    }
    default void print(){
        //TODO
    }
    void test();  // 암묵적으로 public 접근제어자 설정
}
```

## 1.2. 상속과 구현

인터페이스 상속은 `implements` 키워드를 사용한다.

```java
public class SampleImpl implements Sample {
     
}
```

인터페이스를 여러 개를 상속받을 수 있다.

```java
public class SampleImpl implements Sample, Sample2 {
     
}
```

인터페이스를 상속받고 메서드를 구현한다. 인터페이스에 선언된 메서드는 public의 접근제어자를 가지므로 구현 메서드의 접근제어자는 public으로 선언해야 한다.

```java
public class SampleImpl implements Sample {
    public void test(){
       // TODO
    }
}
```

## 1.3. 인터페이스 간의 상속

인터페이스 간에도 상속할 수 있으며 일반 상속처럼 extends 키워드를 사용한다.

```java
public interface Sample2 extends Sample1 {

}
```

끝.
