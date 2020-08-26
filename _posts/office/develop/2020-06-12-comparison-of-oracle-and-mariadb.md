# Oracle와 Mariadb 비교

## 1. 날짜 비교 
### 1.1. 문자열을 날짜로 변환

~~~sql
  # oracle
  tod_date('20/04/26 13:24:00','RR/MM/DD HH24:MI:SS') 
  # mariadb
  str_to_date('20/04/26 13:24:00','%Y%m%d %H:%i:%s')
~~~

## 1.2. 문자열 날짜로 변환2
~~~sql
  # oracle
  tod_date('20200428000000','yyyymmddhh24miss') 
  # mariadb
  str_to_date('20200428000000','%Y%m%d%H%i%s')
~~~

## 1.3. 오늘 일자

~~~sql
  # oracle
  sysdate
  # mariadb
  NOW(), SYSDATE()
~~~

## 1.4. 날짜를 문자열로 변환

~~~sql
  # oracle
  to_char(sysdate,'yyyymmdd')
  # mariadb
  date_format(now(),'%Y%m%d')
~~~

## 1.5. 날짜를 문자열로 변환(연도 두자리)

~~~sql
  # oracle
  to_char(sysdate,'yymm')
  # mariadb
  date_format(now(),'%y%m')
~~~

## 1.6. 날짜를 문자열로 변환(초 단위 까지 표시)

~~~sql
  # oracle

  # mariadb
  date_format(now(),'%Y%m%d%f')
~~~

## 1.7. miliseconds 표현

~~~sql
  # oracle
  to_timestamp('initime','yyyymmddhh24missFF33')
  # mariadb
  str_to_date('20200509101010999','%Y%m%d%H%i%s%f')
  # 열의 dateType이 시간을 지원해야 함. 
~~~

## 1.8. 오늘 시간 milliseconds 까지 표현

~~~sql
  # oracle
  systimestamp
  # mariadb
  NOW(6)
~~~

## 1.9. 하루 감소

~~~sql
  # oracle
  sysdate-1
  # mariadb
  DATE_SUB(NOW(), INTERVAL 1 DAY)
~~~

## 1.10. 하루 증가

~~~sql
	# oracle
	sysdate+1
	# mariadb
	DATE_ADD(NOW(), INTERVAL 1 DAY)
~~~

## 1.11. 한 달 감소

~~~sql
	# oracle
	ADD_MONTHS(SYSDATE,-1)
	# mariadb
	DATE_SUB(NOW(), INTERVAL 1 MONTH)
~~~

## 1.12. 한 달 증가

~~~sql
	# oracle
	ADD_MONTHS(SYSDATE,+1)
	# mariadb
	DATE_ADD(NOW(), INTERVAL 1 MONTH)
~~~

## 1.13. 일년 감소

~~~sql
	# oracle
	ADD_MONTHS(SYSDATE,-12)
	or 
	SYSDATE-(INTERVAL '1' YEAR)
	# mariadb
	DATE_SUB(NOW(), INTERVAL 1 YEAR)
~~~

## 1.14. 일년 증가

~~~sql
	# oracle
	ADD_MONTHS(SYSDATE,+12)
	or 
	SYSDATE+(INTERVAL '1' YEAR)
	# mariadb
	DATE_ADD(NOW(), INTERVAL 1 YEAR)
~~~

## 1.15. 일 단위 미만 버림 (시, 분, 초 00으로 만듬)

~~~sql
	# oracle
	TRUNC(ADD_MONTHS(SYSDATE,-1),'dd')
	# mariadb
	DATE(DATE_SUB(NOW(), INTERVAL 1 YEAR))
~~~

## 1.16. 한달 이전을 하고 하루 추가 그리고 일단위 미만 버림

~~~sql
	# oracle
	TRUNC(ADD_MONTHS(SYSDATE,-1),'dd')+1
	# mariadb
	DATE(DATE_ADD(DATE_SUB(NOW(), INTERVAL 1 MONTH), INTERVAL 1 DAY))
~~~

## 1.17. 문자를 숫자로 변환

~~~sql
	# oracle
	TO_NUMBER('11')
	# mariadb
	CAST('11' AS SIGNED)
~~~

## 1.18. 패팅 문자열

~~~sql
	# oracle
	LPAD(10,10,'0')
	# mariadb
	LPAD(10,10,'0')
~~~

## 1.19. 문자열 결합

~~~sql
	# oracle
	'브'||2||'피'
	# mariadb
	CONCAT('브',2,'피')
~~~

## 1.20. 16진수 10진수로 변환

~~~sql
	# oracle
	TO_NUMBER(HEXTORAW('aabbbbbb'))
	# mariadb
	CONV('aabbbbbb', 16, 10)
~~~


## 1.21. 조건문

~~~sql
	# oracle
	DECODE(amt, NULL, 0, amt)
	# mariadb
	CASE WHEN amt IS NULL THEN 0
		ELSE amt
	END
~~~

## 1.22. NULL 조건

~~~sql
	# oracle
	NVL(a.curtask, 0)
	# mariadb
	IFNULL(a.curtask, 0)
~~~

## 1.22. 시퀀스 증가

~~~sql
	# oracle
	sequence_name.NEXTVAL
	# mariadb
	NEXTVAL(sequence_name)
~~~
