---
title : 쿼리문에서 ORACLE 변수 사용 방법
categories : db oracle
---


## 1. 변수 선언

쿼리문에서 변수를 선언할 때는 DECLARE 키워드를 사용하고  변수명과 타입을 설정한다. 

~~~sql
-- DECLARE {변수명} {타입};
DECLARE IN_VAR_CD VARCHAR2(16);
~~~

<br>

## 1.1. 초기 값을 포함한 변수 선언

초기 값을 포함한 변수 선언은 `:=` 키워드를 사용합니다.

~~~sql
-- DECLARE {변수명} {타입} := {초기값};
DECLARE IN_VAR_CD VARCHAR2(16) := '홍길동';
~~~

<br>

## 2. 변수 사용

변수를 사용하기 위해서는  BEGIN  ~  END 문에서 작성한다. 

~~~sql
BEGIN
	DBMS_OUTPUT.PUT_LINE(IN_VAR_CD);
END;
~~~

변수를 확인하기 위해서 출력할 때는 DBMS_OUTPUT의 PUT_LINE 함수를 사용한다.

~~~sql
DECLARE IN_VAR_CD VARCHAR2(16) := '홍길동';
BEGIN
	DBMS_OUTPUT.PUT_LINE(IN_VAR_CD);
END;
~~~




























