---
title : Exception에 대한 생각
categories : java exception throw throws
---

스프링 프로젝트를 진행하다 보면 Exception을 처리해야 할 경우가 있다. 

그런데 문득 Exception에 대해 내가 올바르게 사용안하고 있다는 생각이 들었다. 

다음 코드를 보자.

<br>

```java
public boolean setValue(String param) throws CustomException {
    if(param == null){
        throw new CustomException();
    }
}
```

<br>

자바를 공부한 사람이라면 throws 호출한 곳으로 예외 책임을 전가하는 것이고 

throw는 개발자가 고의적으로 던지는 예외라는 것은 기본적으로 알고 있지만 

`과연 저 위의 표현이 올바르게 작성한 것일까?' 에 대한 대답은 쉽게 할 수 없다.

그럼 먼저 저렇게 표현한 의미에 대해서 생각해보자 

위의 코드는 `param`의 값이 null일 경우 `throw` 키워드를 통해서 `CustomException`을 던지고 `throws` 키워드를 통해 `CustomException`의 책임을 전가하고 있다. 

그런데 저렇게 표현하는게 과연 맞을까?

이미 `throw new CustomeException`로 예외를 던진다는 표현을 하였는데 `throws CustomException` 표현을 통해 책임전가를 알려줄 필요가 있을까?

먼저 `throws CustomException`이 없어도 호출한 곳이 예외를 받는지 알아보자.

<br>

```java
// Sample Class
public boolean setValue(String param) {
    if(param == null){
        throw new CustomException();
    }
}

// Main Class
public void main(String[] args) {
    try{
        Sampe sample = new Sampel();
        sample.setValue(null);
    } catch(CustomException e){
        System.out.println("잡았다 요놈");
    }
}

// console.
//잡았다 요놈
```

<br>

위 코드로 실행시 `throws CustomException`은 호출한 곳으로 예외를 던진다.

즉 기본적으로 `throws` 키워드가 없어도 호출한 곳으로 예외가 던져진다는 것을 알 수 있다.

그럼 다음으로 `throws CustomException`에 명시했을 경우 다른 Exception도 호출한 곳에서 받을 수 있을까?

테스트 해보자 

<br>

```java
// Sample Class
public boolean setValue(String param) throws CustomException{
    if(param == null){
        throw new OtherException();
    }
}

// Main Class
public void main(String[] args) {
    try{
        Sampe sample = new Sampel();
        sample.setValue(null);
    } catch(OtherException e){
        System.out.println("잡았다 요놈");
    }
}

// console.
//잡았다 요놈
```

<br>

위 코드에서 '잡았다 요놈'이 출력되었다.

즉, 모든 예외는 `throws`에 표시를 하던 안하던 호출한 곳으로 던진다.

그렇다면 좀더 깊게 들어가 이번에는 연속된 호출의 경우를 살펴보자.

<br>

<br>


```java
public class Sample2 {
	public boolean setValue(String param){
		if(param == null){
			throw new CustomException();
		}
		return true;
	}
}

public class Sample {
	public void setValue(String param) {
		Sample2 sample2 = new Sample2();
		sample2.setValue(param);
	}
}

public class Main {
    public void main(String[] args) {
        try{
            Sampe sample = new Sample();
            sample.setValue(null);
        } catch(OtherException e){
            System.out.println("잡았다 요놈");
        }
    }
}

// console.
//잡았다 요놈
```

<br>

위 코드는 `Sample2 -> Sample -> Main` 순서로 호출되는 로직이고 `Sample2`에서 `CustomException`이 발생한다.

`Sample` 클래스에서 예외 처리를 하지 않았지만 `Main`에 `CustomException`을 잡은 것을 확인할 수 있다.

이것으로 예외는 호출한 곳의 부모에서 부모로 전파가 이루어진다는 것을 알 수 있다.

이제 마지막으로 고급 개발자들이 어떻게 예외를 표시했는지 확인해보자.

나같은 경우 `Github`에서 `Spring-boot` 프로젝트의 소스 코드를 확인해 봤다. 

그중 예외를 던진 소스 코드의 일부분이다.

<br>

```java
private void performUpload(ClassLoaderFiles classLoaderFiles, byte[] bytes, ClassPathChangedEvent event)
			throws IOException {
		try {
			while (true) {
				try {
					ClientHttpRequest request = this.requestFactory.createRequest(this.uri, HttpMethod.POST);
					HttpHeaders headers = request.getHeaders();
					headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
					headers.setContentLength(bytes.length);
					FileCopyUtils.copy(bytes, request.getBody());
					logUpload(event);
					ClientHttpResponse response = request.execute();
					HttpStatusCode statusCode = response.getStatusCode();
					Assert.state(statusCode == HttpStatus.OK,
							() -> "Unexpected " + statusCode + " response uploading class files");
					return;
				}
				catch (SocketException ex) {
					logger.warn(LogMessage.format(
							"A failure occurred when uploading to %s. Upload will be retried in 2 seconds", this.uri));
					logger.debug("Upload failure", ex);
					Thread.sleep(2000);
				}
			}
		}
		catch (InterruptedException ex) {
			Thread.currentThread().interrupt();
			throw new IllegalStateException(ex);
		}
	}
```

<br>

위 코드에서 `throw new IllegalStateException(ex)`을 하고 있지만 `throws IOException`만 있다. 

스프링 프로젝트에서도 `throw new IllegalStateException(ex)` 던진다고 해서 `throws IllegalStateException`을 하지 않는 것을 알 수 있다.

<br>

결론적으로 모든 Exception은 던져지고 전파되기 때문에 다음과 같이 작성하는 것이 가장 좋을 것이다.



```java
public class Sample2 {
	public boolean setValue(String param){
		if(param == null){
			throw new CustomException(); // 고의적인 CustomException 던짐 
		}
		return true;
	}
}

public class Sample {
	public void setValue(String param) { // 굳이 여기서 throw CustomException을 할 필요가 없음.
		Sample2 sample2 = new Sample2();
		sample2.setValue(param);
	}
}

public class Main {
    public void main(String[] args) {
        try{
            Sampe sample = new Sample();
            sample.setValue(null);
        } catch(OtherException e){
            System.out.println("잡았다 요놈");
        }
    }
}

// console.
//잡았다 요놈
```

<br>

정리하면 예외는 전파는 명시를 안해도 기본적으로 이루어지며 고의적으로 예외를 발생 및 전파하고자 한다면 

`throw` 또는 `throws` 둘 중 하나를 선택해 예외를 던지도록 해야한다.






























