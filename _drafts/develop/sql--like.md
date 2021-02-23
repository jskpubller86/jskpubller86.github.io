---
title : like query 사용법
---
## 1. LIKE 쿼리

LIKE 지정한 문자열이 포함된 레코드를 반환한다.

<br>

### 1.1 실습

예시 테이블)

|colname|
|-------|
|aaaafindstr|
|findstrbbbbb|
|aaafindstrbbb|

<br>

#### 1.1.1 colname의 문자열이 findstr로 끝나는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname LIKE '%findstr';
	
	-- 결과 : aaaafindstr
~~~

<br>

#### 1.1.2 colname의 문자열이 findstr로 끝나지 않는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname NOT LIKE '%findstr';	

	-- 결과 : findstrbbbbb, aaafindstrbbb
~~~

<br>

#### 1.1.3 colname의 문자열이 findstr로 시작하는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname LIKE 'findstr%';

	-- 결과 : findstrbbbbb
~~~

<br>

#### 1.1.4 colname의 문자열이 findstr로 시작하지 않는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname NOT LIKE 'findstr%';

	-- 결과 : aaaafindstr, aaafindstrbbb
~~~

<br>

#### 1.1.5 colname의 문자열이 findstr와 일치하는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname LIKE 'findstr';

	-- 결과 : 없음.
~~~

<br>

#### 1.1.6 colname의 문자열이 findstr와 일치하지 않는 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname NOT LIKE 'findstr';

	-- 결과 : aaaafindstr, findstrbbbbb, aaafindstrbbb
~~~

<br>

#### 1.1.7 colname의 문자열이 findstr와 aaa 포함된 Record 찾기

~~~sql 
	SELECT 
		*        
	FROM tablename
	WHERE colname LIKE '%findstr%' AND colname LIKE '%aaa%';

	-- 결과 : aaaafindstr, aaafindstrbbb
~~~

<br>
