---
title : MARIADB SEQUENCE
categories : db mariadb sql
---


## 1. 시퀀스 생성 (TO CREATE SEQUENCE), MIN VERSION 10.3

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


## 2. 시퀀스 확인 (CHECK SEQUENCE), MIN VERSION 10.3 

~~~ 
SELECT * FROM my_seq
~~~

| next_not_cached_value | minimum_value | maximum_value | start_value | increment | cache_size | cycle_option | cycle_count |
|---|---|---|---|----|----|---|---|
| 1 | 1 | 999,999 | 1 | 1 | 100 | 1 | 0 |

1. next_not_cached_value  : 메모리에 캐시된 값의 다음 값.
2. minimum_value :  최소 값
3. maximum_value : 최대 값
4. start_value : 시작 값
5. increment : 증가 값
6. cache_size : 메모리에 캐시된 값
7. cycle_option : 반복 여부
8. cycle_count : 반복 횟수

### 2.1. next_not_cached_value 설명  (TO EXPLAIN next_not_cached_value)

next_not_cached_value 옵션(option)은  메모리에 캐시된 값의 다음 값을 의미한다.

~~~
SELECT NEXTVAL(my_seq) FROM dual; //  1
// cache_size에 의하여 100만큼 숫자가 미리 만들어지고 next_not_cached_value의 값은 100 + 1이 되어 101이 된다.
SELECT NEXTVAL(my_seq) FROM dual; //  2, 캐시된 값에서 가져와 출력하기 때문에 next_not_cached_value의 값은 101이다.
SELECT NEXTVAL(my_seq) FROM dual; //  3, 마찬가지로 캐시된 값에서 가져와 출력하기 때문에 next_not_cached_value의 값은 101이다.

...  // 100까지 반복 수행

SELECT NEXTVAL(my_seq) FROM dual; // 101, 101 값은 캐시된 값을 넘어간 값이기 때문에 다시 100만큼 캐시되고 next_not_cached_value 갑은 201이 된다.
~~~

mariadb 서버가 종료되고 다시 시작할 경우 next_not_cached_value의 값은 sequence의 시작 값이 된다.
~~~
SELECT NEXTVAL(my_seq) FROM dual; //  1
// cache_size에 의하여 100만큼 숫자가 미리 만들어지고 next_not_cached_value의 값은 100 + 1이 되어 101이 된다.
SELECT NEXTVAL(my_seq) FROM dual; // 2

mariadb SHUTDOWN!!
mariadb START!!
SELECT NEXTVAL(my_seq) FROM dual; // 101, 서버가 종료되고 다시 시작되면 next_not_cached_value의 값이 sequence의 시작 값이 된다.
~~~
<br><br>

### 2.2. start_value 설명  (TO EXPLAIN start_value)

start_value는 서버가 시작되고 처음 sequence 값이 생성될 때 적용하는 옵션이다. 

처음 sequence를 생성하면 start_value 값을 기준으로 생성한다.  이후 반복을 할 경우 시작되는 값은 minimum_value를 기준으로 한다.

start_value가 5이고  minimum_value가 1일 경우 시나리오

~~~
// 맨 처음 시작
SELECT NEXTVAL(my_seq) FROM dual; // 5
SELECT NEXTVAL(my_seq) FROM dual; // 6
...

// CYCLE 옵션으로 처음부터 반복 
SELECT NEXTVAL(my_seq) FROM dual; // 1
SELECT NEXTVAL(my_seq) FROM dual; // 2
~~~


