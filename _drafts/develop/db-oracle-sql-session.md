## 1. processes, sessions, transactions 확인 
~~~sql
SELECT * FROM v$resource_limit WHERE resource_name IN ( 'processes', 'sessions', 'transactions');
~~~

* __CURRENT_UTILIZATION__ : 현재 SESSION 접속 수
* __MAX_UTILZATION__ : MAX SESSION 수 (최대 접속했던 SESSION를 의미)

* __INITIAL_ALLOCATION__ : PROCESS에 따라 책정된 SESSION 수

* __LIMIT_VALUE__ : 최대 허용 가능한 SESSION 수 (기본은 INITIAL_ALLOCATION)
