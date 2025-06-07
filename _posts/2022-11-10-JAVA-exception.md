---
title : Exception에 대한 생각
categories : java
---

예외를 던지는 방법은 throws와 throw 두가지가 있다.

## thow

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

## throws

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

=끝=
 


































