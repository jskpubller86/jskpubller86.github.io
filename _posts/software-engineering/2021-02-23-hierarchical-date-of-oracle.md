---
title : 계층적인 날짜 구조 생성
categories : sql oracle
---

## 오라클에서 원하는 달의 일자를 생성하는 쿼리

~~~sql
	SELECT TO_CHAR(first_day + LEVEL -1, 'YYYYMMDD') days
	FROM 
		(SELECT 
			TRUNC(SYSDATE, 'MM') first_day
		FROM DUAL
		)
	CONNECT BY first_day + LEVEL -1 <= TRUNC(last_day(sysdate));
~~~

__예)__

~~~sql
	SELECT TO_CHAR(first_day + LEVEL -1, 'YYYYMMDD') days
	FROM 
		(SELECT 
			TRUNC(TO_DATE('20200131235959','yyyymmddHH24miss'), 'MM') first_day
		FROM DUAL
		)
	CONNECT BY first_day + LEVEL -1 <= TRUNC(last_day(TO_DATE('20200131235959','yyyymmddHH24miss')));
~~~
