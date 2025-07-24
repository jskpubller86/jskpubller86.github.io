---
title : 자바 기초
date : 2025-07-16
categories : java
---

## 1. 변수

## 2. 타입

## 3. 클래스

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


## 5. Class 클래스란?

Class 클래스란 클래스의 정보를 가져오기 위한 클래스이다.


### 5.1. Class 생성하기

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

### 5.2. 클래스 정보 가져오기

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

### 5.3. Class 클래스로 인스턴스 생성하기

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


### 5.4. 클래스를 동적으로 메모리에 로딩하기

프로그램이 실행되면 클래스는 메모리에 로딩된다. 만약 실행 후 추가적으로 클래스가 필요하다면 동적으로 로딩해야 한다. 이때 Class의 forName을 사용한다.

```java
Class strCls = Class.forName("Sample"); // 프로그램이 실행 된 후에  Sample 클래스를 메모리에 로딩할 수 있다.
```


## 6. 메모리 구조 설명

자바는 JVM에서 실행된다. 

JVM이 실행되면 시스템에서 메모리를 할당받고 관리하며 구조로 메모리를 관리한다.

`| 메소드 | 스택 | 힙 | 레지스터 | 네이티브 메서드 |`

힙은 내부적으로 다음과 같이 세부적인 영역으로 나눈다.

힙 `[ Permanent Generation | Young Generation | Old Generation ]`


### 6.1. 메소드 영역

로딩된 클래스의 메타 정보를 저장한다.

클래스를 이용해 인스턴스를 생성시 메소드 영역에 있는 클래스 정보를 복사하여 힙 영역에 저장한다. JVM 메모리 영역 중 가장 먼저 데이터가 저장되는 곳이다.

### 6.2. 스택 영역

메소드가 호출될 때 메소드 정보를 저장하는 영역이다. 

메소드 실행이 끝나면 저장된 정보는 삭제되며 저장되는 메소드 정보에는 매개 변수, 지역 변수,  복귀 주소 등이 있다. 

스택은 LIFO(Last In First Out) 방식을 가진다.

### 6.3. 힙 영역

클래스를 통한 인스턴스 생성시 저장되는 영역이다.

힙 영역은 여러 개의 영역으로 나누어져 있는데 이유는 메모리를 효율적으로 관리하기 위해서이다. 

#### 6.3.1. Young Generation

새롭게 생성된 인스턴스가 저장되는 영역이다.

빈번하게 사용되는 데이터(인스턴스)는 Young 영역에서 Old 영역으로 보낸다.

Young Generation에서는 빈번하게 GC가 발생하는데 이를 Minor GC라고 한다.

#### 6.3.2. Old Generation

Young 영역에서 빈번하게 사용되는 데이터(인스턴스)가 저장되는 영역이다.

Young 보다는 GC가 발생하는 횟수가 적다. 

Old 영역에서 발생하는 GC를 Major GC라고 한다.

#### 6.3.3. Permanent 영역

애플리케이션에서 사용되는 클래스의 정보를 저장하는 영역이다. 

메서드 영역의 클래스를 복사한 정보를 저장한다.

### 6.4. 레지스터 영역

현재 JVM이 수행할 명령어의 주소를 저장하는 메모리 공간이다.

### 6.5. 네이티브 메소드 스택 영역

OS의 시스템 정보, 리소스를 사용하거나 접근하기 위한 코드를 저장하는 영역으로 보통 C, C++로 작성한다.

JNI API를 통해서 실행된다.


예외를 던지는 방법은 throws와 throw 두가지가 있다.

## 7. Exception

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

### 7.1. throws

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


## 8. 스트림
### 8.1. 바이트 단위 스트림

기본이 되는 스트림은 추상클래스로 정의되어 있고 하위 클래스에서 이를 구현하도록 유도하고 있다.

바이트 단위 스트림은 기본적으로 1바이트씩 처리한다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        System.out.println((char)fis.read()); // 한 바이트 씩 읽음. a 출력
    } catch (Exception e) {
        // TODO: handle exception
    }
}
```

만약 demo1.txt파일에 한글이 있다면 한글은 2byte를 사용하기 때문에 글자가 깨져서 나온다.

#### 8.1.1. 입력 스트림과 배열을 이용한 읽기

배열을 이용하면 한 번에 지정한 배열의 크기만큼 읽어 올 수 있다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
        fis.read(arr); // 한 바이트씩 읽고 배열에 담음
        System.out.println((char)arr[0]); // 'a' 출력
        System.out.println((char)arr[1]); // 'b' 출력
    } catch (Exception e) {
        // TODO: handle exception
    } finally {
        try {
            // 스트림 해제
            fis.close();
        } catch (IOException e) {
            // 해제시 IOException 발생
            e.printStackTrace();
        }
    }
}
```

배열로 읽어오는 방법은 만약 읽어온 데이터 보다 배열의 크기가 클 경우 이전에 읽어온 데이터가 아직 남아 있을 수 있다. 

예를 들면 다음과 같은 상황이다.

```
// abcde
// 3크기 배열 바구니
첫번째 read -> [a][b][c]
두번째 read -> [d][e][c]
```

위 상황에서 첫번째 read에서 읽어온 c가 남아있다. 그래서 배열 바구니 전체를 반복해서 읽으면 안되고 읽어온 데이터 수만큼 반복해야 한다.

```java
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
        int total = fis.read(arr); // 읽은 배열의 크기를 반환
        for (int j = 0; j < total; j++) { // 읽은 배열의 크기만큼 반복해서 출력
            System.out.println((char)arr[j]); 
        }	        
    } catch (Exception e) {
        // TODO: handle exception
    } finally {
        // TODO: call close()
    }
}
```


#### 8.1.2. 스트림 해제

스트림으로 데이터를 모두 읽었다면 다른 시스템에서 사용할 수 있도록 `close()` 메서드를 이용하여 스트림을 해제해야 한다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        System.out.println((char)fis.read()); // 한 바이트 씩 읽음. 읽은 바이트를 char형으로 변환해서 문자 출력
    } catch (Exception e) {
        // TODO: handle exception
    } finally {
        try {
            // 스트림 해제
            fis.close();
        } catch (IOException e) {
            // 해제시 IOException 발생
            e.printStackTrace();
        }
    }
}

```

위 리소스를 try-with-resources 구문으로 표현하면 자동으로 `close()`한다.

```java
// try-with-resources, 자동으로 리소스를 해제
try(FileInputStream fis = new FileInputStream("src/demo1.txt")){
    byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
    fis.read(arr); // 한 바이트씩 읽고 배열에 담음
    System.out.println((char)arr[0]); // 'a' 출력
    System.out.println((char)arr[1]); // 'b' 출력
} catch (Exception e) {
    
}
```

#### 8.1.3. 출력 스트림

출력 스트림도 입력 스트림과 방식이 동일하다. 다만 write메서드를 호출하는 것이 다르다.

다음은 출력 스트림으로 파일에 1바이트씩 출력하는 예이다.

```java

// 1바이트씩 출력 

public static void main(String[] args) {
    try(FileOutputStream fos = new FileOutputStream("src/demo1.txt")){
        fos.write(65); // A출력
        fos.write(66); // B출력
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// src/demo1.txt 파일에 다음 내용이 작성됨.
// AB

```

다음은 배열을 이용하여 한번에 작성하는 예이다.

```java
public static void main(String[] args) {
    try(FileOutputStream fos = new FileOutputStream("src/demo1.txt")){
        byte[] arr = {65, 66}; // 입력할 배열 데이터 생성
        fos.write(arr); // 배열 데이터들 한번에 작성
    } catch (Exception e) {
        // TODO: handle exception
    }
}
```

### 8.2. 문자 단위 스트림

위의 스트림은 1바이트 단위로 읽는 스트림이어서 한글을 읽는데 문제가 있었다.

그래서 JAVA에서 문자 단위로 읽을 수 있는 스트림을 제공하는 데 그게 Reader 클래스이다.

리더클래스는 char형을 다루는 데 즉 데이터를 2바이트씩 처리한다.

```java
// 파일 : src/sample.txt
// 내용 : 한글 

public static void main(String[] args) {
    try(FileReader fr = new FileReader("src/sample.txt")){
        int i;
        // 반환한 값이 -1이 나올 때까지 데이터를 읽음.
        while ((i=fr.read()) != -1) {
            System.out.println((char)i); // 문자 출력
        }
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// 출력 내용
// 한
// 글
```

#### 8.2.1. 배열을 이용한 입력

처리단위가 char형이라는 것 외에는 바이트 단위 스트림과 크게 다르지 않다.

```java
// 파일 : src/sample.txt
// 내용 : 한글

public static void main(String[] args) {
    try(FileReader fr = new FileReader("src/sample.txt")){
        char[] arr = new char[2]; // 한번에 읽은 배열 바구니 선언
        int total = 0;
        // 반환한 값이 -1이 나올 때까지 데이터를 읽음.
        while ((total=fr.read(arr)) != -1) { // 읽어온 데이터 크기만큼 반복
            for (int j = 0; j < total; j++) {
                System.out.println(arr[j]);// 문자 출력
            }
        }
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// 출력 내용
// 한
// 글
```

#### 8.2.2. 배열을 이용한 출력

마찬가지로 char형이라는 것 외에 바이트 단위 스트림과 크게 다르지 않다.

```java
// 파일 : src/sample.txt
public static void main(String[] args) {
    try (FileWriter fw = new FileWriter("src/sample.txt")){
        char[] arr = {'영','어'}; // 작성할 char형 배열 생성
        fw.write(arr); // 작성
    } catch(Exception e) {
        
    }
}

// 작성한 내용
// 영어
```

끝.
