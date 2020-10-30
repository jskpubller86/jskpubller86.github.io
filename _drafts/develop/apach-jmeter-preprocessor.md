# jmeter preprocessor
preprocessor는 sampler가 수행되기 전에 사용자가 정의한 로직을 처리한다.
<br><br>

## 1. JSR223 PreProcessor
JSR223 PreProcessor는 JSR 223 API를 이용한 언어들을 사용하여 전처리를 할 수 있는 전처리기이다. 
<br><br>

### 1.1. Groovy 언어
JSR 223 API를 이용한 언어들에는 java, js, groovy 등이 있는데 그 중 groovy 언어는 java언어를 기본적으로 지원하면서 파이썬, 루비 등의 장점을 결합한 언어이다. 

java 언어로 로직을 만들 경우 java 또는 groovy 언어를 선택하면 된다. 

groovy 언어의 경우 기본적으로 java 문법을 포함하기 때문에 groovy를 추천한다. 
<br><br>

### 1.2. 변수 사용 

PreProcessor는 변수 값을 받거나 또는 전달하기 위해 변수 vars를 사용한다. 
변수 vars는 Map 형식으로 이루어져 있다. 
사용법은 Map 인터페이스를 사용하는 방식과 동일하다.

변수 값을 가져오기 위해서는 get 메서드를 사용한다.

~~~
vars.get("param");
~~~

변수 값을 할당하기 위해서는 put 메서드를 사용한다.

~~~
vars.put("param", "value");
~~~
<br><br>

### 1.3. 로그 출력
JSR223 PreProcessor에서 어떤 값을 확인할 경우 log를 사용하여 출력할 수 있다. 

~~~
log.info("출력할 내용");
~~~
<br><br>

## 2. 변수 값 호출 
preprocessor에서 할당한 변수를 사용하기 위해서는 Jmeter에서 기본적으로 변수를 호출하는 방식으로 호출한다.

~~~
${param}
~~~

