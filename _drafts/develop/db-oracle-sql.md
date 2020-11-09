# ORACLE SQL

## 1. processes, sessions, transactions 확인 
~~~sql
SELECT * FROM v$resource_limit WHERE resource_name IN ( 'processes', 'sessions', 'transactions');
~~~

* __CURRENT_UTILIZATION__ : 현재 SESSION 접속 수
* __MAX_UTILZATION__ : MAX SESSION 수 (최대 접속했던 SESSION를 의미)

* __INITIAL_ALLOCATION__ : PROCESS에 따라 책정된 SESSION 수

* __LIMIT_VALUE__ : 최대 허용 가능한 SESSION 수 (기본은 INITIAL_ALLOCATION)
<br><br>

# 2. 문자로 된 숫자 합계, 평균 구하기 
oracle에서 문자로 된 숫자의 합계를 구할 때는 문자형을 숫자형으로 바꿔준 후 집계함수를 적용해야 정확한 값을 구할 수 있다.

~~~sql 
SELECT SUM(TO_NUMBER(str_number_column))
FROM tablename
~~~

