---
title : 그루비 기본 가이드
categories : groovy
---

## 1. 기본 import

---

<br>

그루비는 기본적으로 모든 클래스와 패키지를 import한다. 그러므로 사용자가 import문을 작성할 필요가 없다.

<br><br>

## 2. 메서드 다형성 

---

<br>

Java와 Groovy 모두 동일한 이름의 메서드를 파라미터에 따라 분리해서 호출할 수 있다. 

하지만 Java는 컴파일때 호출할 메서드를 선택하는 반면 Groovy는 실행할 때 호출한다. 

아래 코드에서  Groovy는 1을 반환하고 Java는 2를 반환한다.

```java 
int method(String arg) {
    return 1;
}
int method(Object arg) {
    return 2;
}
Object o = "Object";
int result = method(o);
```

즉 런타임 때 기계코드 입장에서 실제 타입을 기준으로 선택됨을 확인 할 수 있다.

<br><br>


## 3. 배열 초기화

---

<br>

Java에성 배열을 초기화할 때 짧은 표현으로 아래와 같이 선언할 수 있다. 

```
int[] array = {1, 2, 3};
```

그런데 Groovy에서는 {} 기호가 크로저로 예약되어 있어 사용할 수 없다. 

그러므로 아래와 같이 표현해야 한다.

```java
int[] array = [1, 2, 3];
```

Groovy 버전 3 이상에서는 옵션적으로 Java의 배열 초기화의 긴 표현을 제공한다.

```java
def array2 = new int[] {1, 2, 3};
```

<br><br>

## 4. Package scope visibility
---

<br>

다음 코드는 Groovy에서는 변수 String name은 package-priavte하지 않다. 

```java
class Person {
    String name
}
```

그래서 Groovy에서는 @PackageScope 어노테이션을 사용하여 package-priavte 하게 만들 수 있다.

```java
class Person {
    @PackageScope String name
}
```

<br><br>

## 5. ARM
---

<br>

<br><br>

## 6. Inner Class
---

<br><br>

### 6.1. Static inner classes
---

<br>

static inner class를 사용하여 내부 클래스를 사용할 수 있다. 

```java
class A {
    static class B {}
}

new A.B()
```

<br><br>


### 6.2. Anonymous Inner Classes
---

<br>


아래와 같이  파라미터로 익명의 클래스를 만들어 제공할 수 있다.

```java
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

CountDownLatch called = new CountDownLatch(1)

Timer timer = new Timer()
timer.schedule(new TimerTask() {
    void run() {
        called.countDown()
    }
}, 0)

assert called.await(10, TimeUnit.SECONDS)
```

<br><br>

### 6.3. Creating Instances of Non-Static Inner Classes
---

<br>

non-static inner class를 만들 수 있다.

단, 그러기 위해서는 static 메서드를 제공해야 한다.

자바에서는 다음과 같다. 

```java
public class Y {
    public class X {}
    public X foo() {
        return new X();
    }
    public static X createX(Y y) {
        return y.new X();
    }
}
```

3.0.0, Groovy 이전에서는 y.new X() 방식을 지원하지 않는다.

대신에 다음과 같이 사용할 수 있다. 

```java
public class Y {
    public class X {}
    public X foo() {
        return new X()
    }
    public static X createX(Y y) {
        return new X(y)
    }
}
```

<br><br>

## 7. Lambda expressions and the method reference operator
---

<br>

java 8+에서는 lambda의 method reference operator (::)를 제공한다.

```java
Runnable run = () -> System.out.println("Run");  // Java
list.forEach(System.out::println);
```

Groovy 3이상부터는 위 방식을 허용하지만  이전 버전은 클로저를 사용하여 다음과 같이 표현해야 한다.

```java
Runnable run = { println 'run' }
list.each { println it } // or list.each(this.&println)
```

<br><br>

## 8. GStrings
---

<br>

$ 키워드가 있는 문자열을 GString, 없는 문자열을 String이라고 한다. 

자바에서는 $를 포함한 문자열을 컴파일시 오류가 발생하지만 Groovy는 자동형 변환을 한다.

<br><br>

## 9. String and Character literals
---

<br>

Groovy에서는 홀따옴표는 String을 따옴표는 String 또는 GString을 의미한다.

```java
assert 'c'.getClass()==String
assert "c".getClass()==String
assert "c${1}".getClass() in GString
```







































