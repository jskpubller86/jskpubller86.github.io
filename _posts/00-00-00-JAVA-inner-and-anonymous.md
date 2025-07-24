---
title : Inner and Anonymous Class
date: 2025-07-16
categories : java
---

내부 클래스는 클래스 내부에 선언하는 클래스를 말한다.

내부 클래스를 사용하는 이유는 상위 클래스와 굉장히 밀접환 관계를 가지며 외부의 다른 클래스와 협력할 일이 드물 경우 사용한다.

## 1. 선언 방법

내부 클래스 선언 방식은 인스턴스, static, 지역, 익명 내부 클래스로 분리할 수 있다.

### 1.1. 인스턴스 방식

다른 클래스에서 이너 클래스를 인스턴스로 만들기 위해서는 반드시 상위(외부) 클래스 인스턴스를 먼저 생성해야 한다.

```java
class Outer {
    // 내부 클래스
    class Inner {

    }
}
public class Main {
    ... main (String args[]){
        Outer outer = new Outer(); // 외부 클래스 인스턴스 생성
        Outer.Inner inner = outer.new Inner(); // 내부 클래스 생성
    }
}

```

### 1.2. static 방식

내부 클래스를 static으로 선언하면 외부 클래스 인스턴스 없이 생성할 수 있다.

```java
class Outer {
    // 내부 클래스
    static class Inner {

    }
}

public class Main {
    ... main (String args[]){
        Outer.Inner inner = new Outer.Inner(); // 내부 클래스 생성
    }
}
```

자바 16부터는 내부 클래스가 static 선언이 아니더라도 내부 클래스의 static 변수나 메서드에 접근할 수 있다.

```java
class Outer {
    // 내부 클래스
    class Inner {
        static void test(){}
    }
}

public class Main {
    ... main (String args[]){
        Outer.Inner.test(); // Inner 클래스가 static이 아니더라도 접근 가능.
    }
}
```

### 1.3. 지역 방식

또한 메서드 내부에 지역 내부 클래스로 선언도 가능하다.

```java
class Outer {
    public void doPrint(){
        class Inner {

        }
    }
}
```

지역 내부 클래스는 외부에서 접근 가능한 클래스를 상속 받거나 인터페이를 구현해서 메서드의 반환 값으로 지정할 수 있다.

```java
class Outer {
    Runnable get(){
        return class MyRunnable implements Runnable {
                    @Override
                    public void run(){
                        System.out.println("실행");
                    }
                }
    }
}

public class Man(){
    ... main (String args[]){
        Outer outer = new Outer();
        Runnable r = outer.get(); // Runnable을 구현한 MyRunnable 클래스를 반환
        r.run();
    }
}
```

### 1.4. 익명 방식

익명 방식는 추상클래스나 인터페이스를 바로 생성할 수 있는 방식이다.

`new` 키워드를 사용하여 생성과 함께 몸체를 구현한다.

```java

 class Outer {

    // r 변수에 익명의 클래스 생성 인스턴스 대입
    Runnable r = new Runnable() {
                    @Override
                    public void run(){
                        System.out.println("실행");
                    }
                };
                
    // 익명의 클래스 생성 인스턴스 반환
    Runnable get(){
        return  new Runnable() {
                    @Override
                    public void run(){
                        System.out.println("실행");
                    }
                };
    }
}

```

끝.







