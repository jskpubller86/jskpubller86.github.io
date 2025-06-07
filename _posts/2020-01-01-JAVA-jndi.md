---
title : JNDI 안내서
categories : java
---

JNDI는 java Naming and Directory Interface API의 약자이다.

이 API를 이용하면 외부 자원을 찾을 수 있다.

그 중 웹 프로젝트를 진행하면서 빈번하게 많이 사용하는 것은 톰캣에서 생성한 데이터 소스를 찾는 것이다. 

먼저 톰캣 설정 폴더에서 context.xml을 열어서 다음과 같이 데이터 소스를 추가한다.

```xml
<Resource name="jdbc/TestDB" auth="Container" type="javax.sql.DataSource"
               maxTotal="100" maxIdle="30" maxWaitMillis="10000"
               username="javauser" password="javadude" driverClassName="com.mysql.jdbc.Driver"
               url="jdbc:mysql://localhost:3306/javatest"/>
```

name 속성에는 JNDI에서 리소스를 찾을 때 사용할 이름을 사용자 임의로 작성한다.

auth 속성에는 서버에서 관리할 경우 Container, 애플리케이션에서 관리할 경우 Application으로 작성한다. 일반적으로 Container를 지정한다.

type 속성에는 데이터 소스를 생성할 클래스를 지정한다. 

나머지는 구글링을 통해서 속성의 정보를 확인할 수 있다.

<br>

이제 리소스를 등록한 후에는 WEB-INF > web.xml 파일에 다음과 같이 추가한다. web.xml 파일은 웹 배포 파일이다.

```xml
<resource-ref>
  <description>Applications</description>
  <res-ref-name>jdbc/TestDB</res-ref-name>
  <res-ref-type>javax.sql.DataSource</res-ref-type>
  <res-auth>Container</res-auth>
</resource-ref>
```

추가되면 배포된 이후에 jdbc/TestDB 이름의 데이터 소스를 참고할 수 있게 된다.

<br>

이제 자바 웹 프로젝트에서 해당 리소스를 다음과 같이 가져온다.

```java
InitialContext initialContext = new InitialContext();
DataSource ds = (DataSource)initialContext.lookup("java:comp/env/jdbc/TestDB");
```

InitialContext를 이용하면 서버의 자원을 찾을 수 있다.

자원의 이름 앞에 붙은 "java:comp/env"는 JNDI에서 사용하는 자원 유형을 식별하는 식별자이다.

아래는 JNDI에서 사용하는 자원 유형 식별자 목록이다.

| 식별자 | 설명 |
| ------------ | ------------- |
| java:comp/env | 응용 프로그램 환경 항목  |
| java:comp/env/jdbc | JDBC 데이터 소스  |
| java:comp/ejb | EJB 컴포넌트  |
| java:comp/UserTransaction | UserTransaction 객체 |
| java:comp/env/mail | javaMail 연결 객체 |
| java:comp/env/url | URL 정보 |
| java:comp/env/jms | JMS 연결 객체 |



=끝=





































