---
title : 가변인자
categories : java
---

가변인자는 함수는 메서드 오버로딩을 유연하게 할 수 있도록 도와준다.

아래는 메서드 오버로딩으로 여러 개의 매개변수를 받을 경우이다.

```java
public void print(String arg) {
    System.out.println(arg);
}

public void print(String arg, String arg2) {
    System.out.println(arg);
    System.out.println(arg2);
}

public void print(String arg, String arg2, String arg3) {
    System.out.println(arg);
    System.out.println(arg2);
    System.out.println(arg3);
}

public static void main(String[] args) {
    print("문자");
    print("문자", "문자2");
    print("문자", "문자2");
    // 인자를 추가할 때마다 추가적으로 메서드를 선언해야 함.
}
```

배열을 사용하면 위 문제점을 하나의 메서드로 해결할 수 있다.

```java
public static void print(String[] arg) {
    for (String s : arg) {
        System.out.println(s);
    }
}

public static void main(String[] args) {
    print(new String[] {"문자"});
    print(new String[] {"문자", "문자2"});
    print(new String[] {"문자", "문자2", "문자3"});
}
```

그런데 가변인자를 사용하면 더욱 간략하게 표현할 수 있다.

````java
public static void print(String... arg) {
    for (String s : arg) {
        System.out.println(s);
    } 
}

public static void main(String[] args) {
    print("문자");
    print("문자", "문자2");
    print("문자", "문자2", "문자3");
    print("문자", "문자2", "문자3", "문자4");
}
```

가변인자를 다른 타입의 변수와 같이 사용할 경우 항상 마지막에 위치해야 한다.

```java
public static void print(int num, String... arg) {
    for (String s : arg) {
        System.out.println(s);
    }
}

/* 오류
public static void print2(String... arg, int num) {
    for (String s : arg) {
        System.out.println(s);
    }
}
*/

public static void main(String[] args) {
    print(4, "문자");
    print(4, "문자", "문자2");
}
```

Object를 가변인자로 사용하면 모든 유형을 받을 수 있다.

```java
public static void print(Object... arg) {
    for (Object o : arg) {
        if(o instanceof String) {
            System.out.println("문자열");
        } else if(o instanceof Integer) {
            System.out.println("숫자");
        } else if(o instanceof List) {
            System.out.println("리스트");
        } else if(o instanceof String[]) {
            System.out.println("배열");
        }
    }
}

public static void main(String[] args) {
    print(4, "홍길동", new String[]{"테슬라", "아마존"}, new ArrayList<String>());
}
```

제네릭을 통해서 제한을 설정할 수 있다.

```java
class A {
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "A";
	}
}
class B extends A {
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "B";
	}
}
class C {
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "C";
	}
}


public class Main {
	// A 또는 A의 서브클래스로 제한
	public <T extends A> void print(T... args) {
		for (T t : args) {
			System.out.println(t);
		}
	}
	
	public static void main(String[] args) {
		A a = new A();
		B b = new B();
		C c = new C();
		new Main().print(a,b);
		// new Ex1_Varges().print(a,b, c); 오류 
	}
}
```

끝.






