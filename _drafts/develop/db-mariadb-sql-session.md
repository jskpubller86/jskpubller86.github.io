---
title : 마리아디비 세션 정보 (MARIADB SESSION INFO) 확인
---

마리아디비에서 variables를 이용하면 시스템 변수들 (system variables)을 확인할 수 있다.  

그 중에서 세션의 설정 상태를 확인하려면 다음과 같은 쿼리를 실행한다.

~~~sql 
    show 
        variables 
    where 
        variable_name in ('extra_max_connections','max_connect_errors','max_connections','max_user_connections');
~~~
* __extra_max_connections__ : 
* __max_connect_errors__ : 최대 연결 오류 수
* __max_connections__ : 최대 연결 수
* __max_user_connections__ : 계정당 커넥션 수 


현재 세션의 연결 상태를 확인하려면 다음의 쿼리를 실행한다.
~~~sql 
    show 
        status 
    where 
    variable_name in ('max_used_connections','aborted_clients', 'aborted_connects','threads_connected', 'connections');
~~~

* __Aborted_clients__ : 연결된 상태에서 강제로 연결 해제 된 연결 수
* __Aborted_connects__ : 연결 과정 중 fail된 연결 수
* __Connections__ : 연결 시도된 총 수
* __Max_used_connections__ : 동시 최대 접속자 수
* __Threads_connected__ : 현재 연결 접속자 수
