---
title : 자바 기초
categories : java
---

## 4. 인터페이스란?

인터페이스는 구현부분 없이 메서드 이름만 제공하여 이를 구현하는 클래스에서 선언된 메서드를 구현하게 제약한다.

선언과 구현을 분리함으로써 공통된 메서드 이름을 통해서 상항에 맞는 기능을 제공할 수 있게 한다.


### 4.1. 작성법

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

```java
public interface Sample {
    int NUM=0; // 암묵적으로 public static final
    public static final int NUM2=0; // 초기화는 필수
    void test();  // 암묵적으로 public 접근제어자
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

### 4.2. 상속과 구현

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

### 4.3. 인터페이스 간의 상속

인터페이스 간에도 상속할 수 있으며 일반 상속처럼 extends 키워드를 사용한다.

```java
public interface Sample2 extends Sample1 {

}
```



## 6. Class 클래스란?

Class 클래스란 클래스의 정보를 가져오기 위한 클래스이다.


### 6.1. Class 생성하기

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

### 6.1. 클래스 정보 가져오기

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

### 6.2. Class 클래스로 인스턴스 생성하기

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


### 6.3. 클래스를 동적으로 메모리에 로딩하기

프로그램이 실행되면 클래스는 메모리에 로딩된다. 만약 실행 후 추가적으로 클래스가 필요하다면 동적으로 로딩해야 한다. 이때 Class의 forName을 사용한다.

```java
Class strCls = Class.forName("Sample"); // 프로그램이 실행 된 후에  Sample 클래스를 메모리에 로딩할 수 있다.
```


## 7. 메모리 구조 설명

자바는 JVM에서 실행된다. 

JVM이 실행되면 시스템에서 메모리를 할당받고 관리하며 구조로 메모리를 관리한다.

`| 메소드 | 스택 | 힙 | 레지스터 | 네이티브 메서드 |`

힙은 내부적으로 다음과 같이 세부적인 영역으로 나눈다.

힙 `[ Permanent Generation | Young Generation | Old Generation ]`


### 7.1. 메소드 영역

로딩된 클래스의 메타 정보를 저장한다.

클래스를 이용해 인스턴스를 생성시 메소드 영역에 있는 클래스 정보를 복사하여 힙 영역에 저장한다. JVM 메모리 영역 중 가장 먼저 데이터가 저장되는 곳이다.

### 7.2. 스택 영역

메소드가 호출될 때 메소드 정보를 저장하는 영역이다. 

메소드 실행이 끝나면 저장된 정보는 삭제되며 저장되는 메소드 정보에는 매개 변수, 지역 변수,  복귀 주소 등이 있다. 

스택은 LIFO(Last In First Out) 방식을 가진다.

### 7.3. 힙 영역

클래스를 통한 인스턴스 생성시 저장되는 영역이다.

힙 영역은 여러 개의 영역으로 나누어져 있는데 이유는 메모리를 효율적으로 관리하기 위해서이다. 

#### 7.3.1. Young Generation

새롭게 생성된 인스턴스가 저장되는 영역이다.

빈번하게 사용되는 데이터(인스턴스)는 Young 영역에서 Old 영역으로 보낸다.

Young Generation에서는 빈번하게 GC가 발생하는데 이를 Minor GC라고 한다.

#### 7.3.2. Old Generation

Young 영역에서 빈번하게 사용되는 데이터(인스턴스)가 저장되는 영역이다.

Young 보다는 GC가 발생하는 횟수가 적다. 

Old 영역에서 발생하는 GC를 Major GC라고 한다.

#### 7.3.3. Permanent 영역

애플리케이션에서 사용되는 클래스의 정보를 저장하는 영역이다. 

메서드 영역의 클래스를 복사한 정보를 저장한다.

### 7.4. 레지스터 영역

현재 JVM이 수행할 명령어의 주소를 저장하는 메모리 공간이다.

### 7.5. 네이티브 메소드 스택 영역

OS의 시스템 정보, 리소스를 사용하거나 접근하기 위한 코드를 저장하는 영역으로 보통 C, C++로 작성한다.

JNI API를 통해서 실행된다.


예외를 던지는 방법은 throws와 throw 두가지가 있다.

## 8. Exception

throw는 예외를 던질 경우 상용한다.

```java
public class CHILD {
	public void setMethod()  {
		throw new Exception();
  }
}
```

<br>

부모는 자식이 던진 예외를 처리할 수 있다.

```java
public class PARENT {
  public void setMethod()  {
	  try{
      new CHILD().setMethod();
    }  catch (Exception e){
		   // 처리
    }  
  }
}
```

<br>

자식이 던진 예외를 부모에서 처리안해줘도 컴파일 오류가 발생하지 않는다.

```java
public class PARENT {
  public void setMethod()  {
    new CHILD().setMethod();
  }
}
```

<br>

### 8.1. throws

받은 예외를 호출한 곳으로 위임한다.

여기서 우리는 위임과 던짐의 차이를 확인해야한다.

던진다는 것은 호출한 곳에 에러 처리를 맡기는 것이 아닌 말그대로 예외를 던진다는 의미이고

위임은 호출한 곳에서 예외를 처리하기를 기대하는 것을 말한다.
 
다음 코드에서 자식은 아래와 같이 표현할 수 있다.

```java
public class CHILD throws Exception {
  public void setMethod()  {
    throw new Exception();
  }
}
```

<br>

throws로 명시된 예외는 호출한 곳에서 반드시 처리하기를 기대하는 것이기 때문에 

반드시 처리 또는 호출한 곳으로 책임 전가를 해야합니다.

```java
public class PARENT {
  public void setMethod()  {
	  try{
		  new CHILD().setMethod();
    } catch (Exception e){
		  // 처리
    }
  }
}

OR

public class PARENT {
  public void setMethod() throws Exception  {
    new CHILD().setMethod();
  }
}

```

끝.
