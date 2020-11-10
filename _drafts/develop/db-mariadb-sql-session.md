## 1. 세션 확인

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
* __Threads_connected__ : 현재 오픈된 연결 수
