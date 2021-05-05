---
title : JSP에서 제공하는 EL 기본 객체
categories : java, web, jsp
---

| 객체 | 설명 | 코드 |
|------|-----|------|
|pageContext|jsp의 PageContext 객체| |
|servletContext|ServletContext 객체|${pageContext.servletContext.객체명}|
|session|HttpSession 객체|${pageContext.session.객체명}|
|request|ServletRequest 객체|${pageContext.request.객체명}|
|response|ServletResponse 객체| |
|param|요청 매개변수의 값 조회|${param.매개변수명}|
|paramValues|요청 매개변수의 값 배열 조회|${paramValues.매개변수명}|
|header|HTTP 헤더의 값 조회|${header.헤더명}|
|cookie|쿠키 값 조회|${cookie.쿠키명}|
|initParam|컨텍스트 초기화 매개변수의 값 조회|${initParam.매개변수명}|
|pageScope|page 보관소의 값 조회|${pageScope.객체명}|
|requestScope|page 보관소의 값 조회|${requestScope.객체명}|
|sessionScope|session 보관소의 값 조회|${sessionScope.객체명}|
|applicationScope|application 보관소의 값 조회|${applicationScope.객체명}|




