---
title : oracle sequence  생성 및 관리
category : sql
---

## 1. 시퀀스 생성 (Create sequence)

시퀀스의 생성하는 기본 쿼리는 다음과 같다.

~~~sql
	CREATE SEQUENCE customers_seq
		[START WITH (INTEGER)]
		[INCREMENT BY (INTEGER)]
		[MINVALUE (INTEGER) OR NOMINVALUE]
		[MAXVALUE (INTEGER) OR NOMAXVALUE]
		[CACHE (INTEGER) OR NOCACHE]
		[CYCLE OR NOCYCLE]
~~~

* __start with__ : 시퀀스(sequence)가 생성된 후 시작하는 값이다.<br>
			시작 값은 최소 값과 최대 값 사이 있으며 만약 start with를 명시하지 않으면 기본 값은 최소 값이다.<br>
			최대 28자리를 표현할 수 있다.

* __INCREMENT BY__ : 시퀀스(sequence)의 증가 값이다. <br>
    		증가 값은 음수 양수를 허용하지만 0 값은 될 수 없다. 기본 값은 1이다.<br>
			최대 28자리 숫자를 표현할 수 있다.

* __MINVALUE__ : 시퀀스(sequence)의 최소 값이다. <br>
			최소 값은 시작 값보다 작거나 같아야 하며 최대 값보다 작아야 한다.<br>
			최대 28자리 숫자를 표현할 수 있다.

* __MAXVALUE__ : 시퀀스(sequence)의 최대 값이다.<br>
			최대 값은 시작 값과 같거나 커야하며 최소 값보다 커야한다.<br>
			최대 28자리 숫자를 표현할 수 있다.

* __CASHE__ : 메모리에 적재될 시퀀스(sequence)의 크기이다.<br>
			시퀀스를 빠르게 접근하기 위해서 메모리에 미리 시퀀스를 생성하여 할당 할 수 있다. CASHE 옵션은 메모리에 할당할 시퀀스(sequence)의 개수이다.<br>
			CASH를 너무 크게 설정하면 DB에 과부하가 생길 수 있으므로 다음의 공식으로 계산한 값을 최대 값으로 하고 이 범위 안에서 지정한다.<br>
			`(CEIL (MAXVALUE - MINVALUE)) / ABS (INCREMENT)`<br>
			최대 28자리 숫자를 표현할 수 있다.
			
* __CYCLE__ : 시퀀스(sequence)가 최대 값 또는 최소 값이 되었을 경우 반복 여부이다.<br>
			cycle 옵션은 시퀀스(sequence)가 점점 증가 또는 증감되어 최소 값이나 최대 값이 되었을 경우 반복여부를 설정하는 것이다.<br>
			만약 점점 증감되어 최소 값이 되었을 경우 최대 값에서 다시 시작하고 증가하여 최대 값이 되었을 경우 최소 값에서 다시 시작한다.

<br>

## 2. 실습

<br>

## 2.1. sequence 생성

sequence 이름 seq_user, 시작값 10, 증가 값 1, 최소 값 1, 최대 값 20, CACHE 10, 반복

~~~ sql
	CREATE SEQUENCE seq_user
		START WITH 10
		INCREMENT BY 1
		MINVALUE 1
		MAXVALUE 20
		CACHE 10
		CYCLE;
~~~

<br>

## 2.2. sequence 증가

~~~ sql
	SELECT seq_user.NEXTVAL FROM dual;
	--  결과 : 10

	SELECT seq_user.NEXTVAL FROM dual;
	--  결과 : 11
~~~

<br>

## 2.3. 현재 sequence 확인 

oracle에서 현재 sequence의 번호를 알고 싶을 경우 다음과 같은 query를 사용한다. 

~~~sql 
	SELECT seq_user.CURRVAL FROM dual;
	-- 결과 : 11
~~~

`[! 주의] seq_user.CURRVAL은 현재 session에서 증가한 sequence 값을 보여준다. 즉 다른 session에서 sequence를 증가시켜 12로 만들고 현재 session 사용자가 seq_user.CURRVAL을 통해 확인을 하면 12가 아닌 11을 보게 된다.`

<br>

## 2.4. sequence 마지막 값 확인

~~~sql
	SELECT 
		LAST_NUMBER 
	FROM 
		USER_SEQUENCES 
	WHERE 
		SEQUENCE_NAME = 'SEQ_USER'; 
		
	-- sequence 이름을 대문자로 작성
	-- 결과 : 21
~~~

LAST_NUMBER의 예상되는 결과는 11이지만 실제 결과는 21이다. LAST_NUMBER는 현재 증가된 값이 아닌 메모리에 적재되어 있는  마지막 값의 다음 값을 가져온다.

위 같은 상황은 처음 sequnece의 시작 값이 10이므로 10이 시작되고 cache 크기를 10으로 지정하였기에 동시에 메모리에는 1~10까지가 적재된다.

이후 sequnece의 값을 증가시켜 11을 만들면 메모리에는 11부터 20이 적재된다. LAST_NUMBER column은 이 마지막 20의 다음 값인 21을 보여주는 것이다.