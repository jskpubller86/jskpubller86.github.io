# MARIADB SQL
## 1. SEQUENCE 생성 

~~~sql
    CREATE [OR REPLACE] [TEMPORARY] SEQUENCE [IF NOT EXISTS] sequence_name
    [ INCREMENT [ BY | = ] increment ]
    [ MINVALUE [=] minvalue | NO MINVALUE | NOMINVALUE ]
    [ MAXVALUE [=] maxvalue | NO MAXVALUE | NOMAXVALUE ]
    [ START [ WITH | = ] start ] 
    [ CACHE [=] cache | NOCACHE ] [ CYCLE | NOCYCLE] 
    [table_options]
~~~

~~~sql
    -- INCREMENT
    CREATE SEQUENCE my_seq INCREMENT BY 10;
    CREATE SEQUENCE my_seq INCREMENT = 10;
    CREATE SEQUENCE my_seq INCREMENT 10;
    
    -- MINVALUE
    CREATE SEQUENCE my_seq MINVALUE = 10;
    CREATE SEQUENCE my_seq MINVALUE 10; 
    CREATE SEQUENCE my_seq NO MINVALUE; -- 1
    CREATE SEQUENCE my_seq NOMINVALUE; -- 1

    -- MAXVALUE
    CREATE SEQUENCE my_seq MAXVALUE = 10;
    CREATE SEQUENCE my_seq MAXVALUE 10;
    CREATE SEQUENCE my_seq NO MAXVALUE; -- BIGINT(20) 
    CREATE SEQUENCE my_seq NO MAXVALUE; -- BIGINT(20)

    -- START
    CREATE SEQUENCE my_seq START WITH 1;
    CREATE SEQUENCE my_seq START = 1;
    CREATE SEQUENCE my_seq START 1;

    -- START
    CREATE SEQUENCE my_seq CACHE = 1;
    CREATE SEQUENCE my_seq CACHE 1;

    -- CYCLE
    CREATE SEQUENCE my_seq CYCLE;
    CREATE SEQUENCE my_seq NOCYCLE;

    -- INCREMENT AND MINVALUE AND MAXVALUE 
    CREATE SEQUENCE my_seq INCREMENT 10 MINVALUE 10 MAXVALUE 10;
~~~
<br>

## 2. 세션 확인
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
