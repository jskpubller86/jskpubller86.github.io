---
title : 오라클(oracle)에서 시퀀스(sequence)
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
* __INCREMENT BY__ : 시퀀스(sequence)의 증가 값이다.<br>
  			증가 값은 음수 양수를 허용하지만 0 값은 될 수 없다. 기본 값은 1이다.<br>
			최대 28자리 숫자를 표현할 수 있다.
* __MINVALUE__ : 시퀀스(sequence)의 최소 값이다.<br>
 			최소 값은 시작 값보다 작거나 같아야 하며 최대 값보다 작아야 한다.<br>
			최대 28자리 숫자를 표현할 수 있다.
* __MAXVALUE__ : 시퀀스(sequence)의 최대 값이다.<br>
			최대 값은 시작 값과 같거나 커야하며 최소 값보다 커야한다.<br>
			최대 28자리 숫자를 표현할 수 있다.
* __CASHE__ : 메모리에 적재될 시퀀스(sequence)의 크기이다.<br>
			시퀀스를 빠르게 접근하기 위해서 메모리에 미리 시퀀스를 생성하여 할당 할 수 있다. CASHE 옵션은 메모리에 할당할 시퀀스(sequence)의 개수이다. <br>
			CASH를 너무 크게 설정하면 DB에 과부하가 생길 수 있으므로 다음의 공식으로 계산한 값을 최대 값으로 하고 이 범위 안에서 지정한다.<br>
			`(CEIL (MAXVALUE - MINVALUE)) / ABS (INCREMENT)`<br>
			최대 28자리 숫자를 표현할 수 있다.
* __CYCLE__ : 시퀀스(sequence)가 최대 값 또는 최소 값이 되었을 경우 반복 여부이다.<br>
			cycle 옵션은 시퀀스(sequence)가 점점 증가 또는 증감되어 최소 값이나 최대 값이 되었을 경우 반복여부를 설정하는 것이다.
			만약 점점 증감되어 최소 값이 되었을 경우 최대 값에서 다시 시작하고 증가하여 최대 값이 되었을 경우 최소 값에서 다시 시작한다.

ex)
~~~ sql
	CREATE SEQUENCE customers_seq
		START WITH 10
		INCREMENT BY 1
		MINVALUE 1
		MAXVALUE 20
		CACHE 10
		CYCLE;
~~~
<br>

## 2. 현재 시퀀스 (current sequence) 확인 

오라클(oracle)에서 현재 시퀀스 (current sequence)의 번호를 알고 싶을 경우 다음과 같은 쿼리를 사용한다. 
~~~sql
	SELECT 
		LAST_NUMBER 
	FROM 
		USER_SEQUENCES 
	WHERE 
		SEQUENCE_NAME = '시퀀스명(대문자)';
~~~

ex)
~~~sql
	SELECT 
		LAST_NUMBER 
	FROM 
		USER_SEQUENCES 
	WHERE 
		SEQUENCE_NAME = 'MY_SEQ';
~~~

결과)

|LAST_NUMBER|
|---------|
| 10 |
