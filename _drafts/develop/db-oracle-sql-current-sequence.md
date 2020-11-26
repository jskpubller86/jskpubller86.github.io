## 1. 오라클 현재 시퀀스 (oracle current sequence) 확인

~~~
SELECT 
    LAST_NUMBER 
FROM 
	USER_SEQUENCES 
WHERE 
	SEQUENCE_NAME = '시퀀스명(대문자)';
~~~




