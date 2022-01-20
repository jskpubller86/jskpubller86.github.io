---
title : jstl 선언
categories : java, web, jstl
---

### 1. JSTL는 왜 사용되는가?

jsp에서는 일반적으로 스크립트 코드와 HTML코드가 섞여서 사용된다. 

스크립트 코드를 사용함으로써 자바코드를 쉽게 작성할 수 있다는 장점이 있지만 코드와 HTML이 섞이게 되면 코드의 가독성이 매우 낮아지게 된다.

이러한 문제를 해결하기 위해서 자바코드를 태그처럼 표현할 수 있게 만든 것이 커스텀 태그이다. 

[without custom tag]

```jsp 
<% 
    if(list.size() > 0) {
        for(int i = 0; i < list.size(); i++){
            Data data = (Data) list.get(i);
%>
    <%= data.getTitle() %>
<%
        }
    } else {
%>
    데이터가 없습니다.
<%
    }
%>
```

[with custome tag]

```jsp 
<ctagif test="!empty ${list}">
    <ctag:foreach varName="data" list="${list}">
        ${data.title}
    </ctag:foreach>
</ctag:if>
<ctag:if test="empty ${list}">
    데이터가 없습니다.
</ctag>
```

커스텀 태그 중에서 자주 사용되는 태그들을 모아서 만든 것이 JSTL이다.

그래서 일반적으로 jsp 페이지 개발시 JSTL을 사용하여 개발한다.

### 2. JSTL 사용하기

JSTL을 사용하기 위해서는 라이브러리를 받아야 한다.

다운로드 받는 개발환경에 따라 여러가지 방법이 있으나 일반적으로 메이븐 저장소를 통해서 다운받는다. 

<https://mvnrepository.com/artifact/javax.servlet.jsp.jstl>


다운로드 후  JSTL 라이브러리의 위치가 클래스 패스에 설정되어 있다면 jsp 페이지에서 다음과 같이 jstl을 선언한다.

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
```

위 선언에서 prefix는 태그 라이브러리를 호출할 때 사용할 접두어를 의미한다.  

접두어를 설정하였으면 다음과 같이 사용할 수 있다. 

```jsp
<c:set var="name" value="홍길동" />

${}

```







