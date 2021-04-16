---
title : oracle user 생성
categories : db oracle sql
---

사용자를 생성하려면 우선 사용자 생성 권한이 있어야 한다.

<br>

## 1. 사용자 생성

오라클에서 사용자를 생성하는 쿼리는 다음과 같다.

~~~sql
	CREATE USER [user_name] IDENTIFIED BY [password];
~~~

<br>

예를들어 이름이 `guest`이고 비밀번호가 `1234`인 사용자를 추가한다면 다음과 같이 작성해야 한다. 

~~~sql
	CREATE USER guest IDENTIFIED BY 1234;
~~~

`[! 주의] oracle 12c 이상부터는 사용자 이름에 c##을 붙여야 한다.`

~~~sql
	CREATE USER c##guest IDENTIFIED BY 1234;
~~~

<br>

다음 쿼리로 생성이 되었는지 확인할 수 있다. 

~~~sql
	SELECT * FROM all_users WHERE username='GUEST'; 
	-- SELECT * FROM all_users WHERE username='C##GUEST'; // after oracle 12c
~~~

사용자 이름은 대문자로 저장되기 때문에 조건에 사용될 사용자 이름도 대문자이어야 한다.

<br>

## 2. 사용자 삭제

사용자를 삭제하는 쿼리는 다음과 같다.

~~~sql
	DROP USER GUEST CASCADE;
~~~

<br>

CASCADE 옵션은 사용자와 사용자에 연결된 객체 모두 삭제한다.

`![주의] 삭제하려는 사용자가 다른 곳에 접속하고 있다면 삭제되지 않는다.`






