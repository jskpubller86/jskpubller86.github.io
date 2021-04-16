---
title : oracle user 권한 부여
categories : db oracle sql
---

사용자가 DB에 접근하고 관리하기 위해서는 권한이 있어야 한다.

오라클은 시스템 권한과 객체 권한으로 분류한다.

<br>

## 권한 확인 

오라클에서는 권한을 관리하는 테이블을 role, system, table 세가지로 분류하며 권한을 확인하는 쿼리는 다음과 같다. 

~~~sql 
	select * from dba_role_privs where grantee='username';
	select * from dba_sys_privs where grantee='username';
	select * from dba_tabl_privs where grantee='username';
~~~

`![주의] 사용자 이름은 대문자로 작성한다.`

<br>

## ROLE

롤이란 여러 권한을 하나의 이름으로 묶어 놓은 것을 말한다.

<br>

## 1. 시스템 권한

시스템 권한은 데이터베이스 관리 권한이 있는 사용자가 부여할 수 있는 권한이며, 사용자 생성과 정보 수정 및 삭제, 데이터베이스 접근, 오라클 데이터베이스의 여러 자원과 객체 생성 및 관리 등의 권한을 포함한다.

TABLE 관련 권한에 ANY가 붙으면 모든 스키마 테이블에 접근이 가능하다.

|시스템 권한 분류 | 시스템 권한 | 설명 |
|----------------|------------|------|
| USER | CREATE USER | 사용자 생성 권한 |
|| ALTER USER | 생성된 사용자의 정보 수정 권한 |
|| DROP USER | 생성된 사용자의 삭제 권한 |
| SESSION | CREATE SESSION | 데이터베이스 접속 권한 |
|| ALTER SESSION | 데이터 베이스 접속 상태에서 환경 값 변경 권한 |
| TABLE | CREATE TABLE | 자신의 테이블 생성 권한 |
|| CREATE ANY TABLE | 임의의 스키마 소유 테이블 생성 권한 |
|| ALTER ANY TABLE | 임의의 스키마 소유 테이블 수정 권한 |
|| DROP ANY TABLE | 임의의 스키마 소유 테이블 삭제 권한 |
|| INSERT ANY TABLE | 임의의 스키마 소유 테이블 데이터 삽입 권한 |
|| UPDATE ANY TABLE | 임의의 스키마 소유 테이블 데이터 수정 권한 | 
|| DELETE ANY TABLE | 임의의 스키마 소유 테이블 데이터 삭제 권한 | 
|| SELECT ANY TABLE | 임의의 스키마 소유 테이블 데이터 조회 권한 |
| INDEX | CREATE ANY INDEX | 임의의 스키마 소유 테이블의 인덱스 생성권한 |
|| ALTER ANY INDEX | 임의의 스키마 소유 테이블의 인덱스 수정 권한 |
|| DROP ANY INDEX | 임의의 스키마 소유 테이블의 인덱스 삭제 권한 |
| VIEW |  | 뷰와 관련된 여러 권한 |
| SEQUENCE |  | 뷰와 관련된 여러 권한 |
| SYNONYM |  | 동의어와 관련된 여러 권한 |
| PROFILE |  | 사용자 접속 조건 지정과 관련된 여러 권한 |
| ROLE |  | 권한을 묶은 그룹과 관련된 여러 권한 |

<br>

### 1.1. 시스템 권한 부여

오라클에서 사용자에게 권한을 부여하는 쿼리는 다음과 같다.

~~~sql
	GRANT <시스템 권한> TO <사용자 이름|ROLE|PUBLIC> [WITH ADMIN OPTION];
~~~

- `<시스템 권한>` : 필수이며 여러 권한을 나열할 경우 쉼표로 구분한다.
- `<사용자 이름\|ROLE\|PUBLIC>` : 필수이며 여러 사용자나 또는 ROLE을 나열할 경우 쉼표로 구분한다.
- `[WITH ADMIN OPTION]` : 선택이며 현재 부여받은 권한을 다른 사용자에게 부여 할수 있게 된다. 

<br>

### 1.2. 시스템 권한 삭제

권한 삭제는 REVOKE 명령어를 사용한다. 

~~~sql
	REVOKE [시스템 권한] FROM [사용자 이름 | ROLE | PUBLIC]
~~~

<br>

## 2. 객체 권한

특정 사용자가 생성한 테이블·인덱스·뷰·시퀀스 등과 관련된 권한이다.

| 객체 권한 분류 | 객체 권한 | 설명 |
|---------------|-----------|------|
| TABLE | ALTER | 테이블 변경 권한 |
|| DELETE | 테이블 데이터 삭제 권한 |
|| INDEX | 테이블 데이터 생성 권한 |
|| INSERT | 테이블 데이터 삽입 권한 |
|| REFERENCES | 참조 데이터 생성 권한 |
|| SELECT | 테이블 조회 권한 |
|| UPDATE | 테이블 데이터 수정 권한 |
|  VIEW | DELETE | 뷰 데이터 삭제 권한 |
|| INSERT | 뷰 데이터 삽입 권한 |
|| REFERNCES | 참조 데이터 생성 권한 |
|| SELECT | 뷰 조회 권한 |
|| UPDATE | 뷰 데이터 수정 권한 |
| SEQUENCE | ALTER | 시퀀스 수정 권한 |
|| SELECT | 시퀀스의 CURRVAL과 NEXTVAL 사용 권한 |
| PROCEDURE |  | 프로시저 관련 권한 |
| FUNCTION |  | 함수 관련 권한 |
| PACKAGE |  | 패키지 관련 권한 |

<br>

### 2.1. 객체 권한 부여

객체 권한 쿼리 형식은 다음과 같다. 

~~~sql
	GRANT <객체 권한 | ALL PRIVILEGES>
		ON <스키마.객체 이름>
	TO <사용자 이름 | ROLE | PUBLIC>
	[WITH GRANT OPTION];
~~~

- `<객체 권한 | ALL PRIVILEGES>` : 필수이며 여러 종류의 권한을 나열할 경우 쉼표(,)로 구분하여 나열한다.
- `<스키마.객체 이름>` : 필수이며 권한을 부여할 객체를 명시한다.
- `<사용자 이름 \| ROLE \| PUBLIC>` : 권한을 부여할 대상이며 필수 요건이다. 여러 사용자를 나열할 경우 쉼표(,)로 구분하여 나열한다.
- `WITH GRANT OPTION` : 현재 부여받은 권한을 다른 사용자엑 부여할 수 있는 권한도 함께 부여한다.
