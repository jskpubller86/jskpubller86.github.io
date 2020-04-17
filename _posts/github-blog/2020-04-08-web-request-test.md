

# 웹프로젝트에서 request 파라미터 테스트 

테스트 환경 : 스프링 

## 1. Controller 에서 request에 없는 파라미터를 선택시 반환값 확인 

~~~java
request.getParameter("test");
// null 값 반환
~~~


## 2. Controller 에서받는 request의 데이터 타입 확인 

### 2.1. 숫자로 보낼 경우 
~~~javascript
// javascript
$.ajax({
     url : "http://localhost:8080/testurl",
     data: {
          test : 1
     }
})   
~~~

~~~java
// java 
// @Controller
request.getParameter("test") == 1; // error 
~~~
request로 받아오는 값은 특정 필터를 지정하지 않는 이상 모두 문자열임. 

