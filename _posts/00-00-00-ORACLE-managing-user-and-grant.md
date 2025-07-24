---
title : 오라클 사용자 생성하고 권한 부여하기
date: 2025-07-16
categories : oracle
---

## 1. 관리자 계정으로 접속

Oracle에서 사용자를 생성하려면 DBA 권한을 가진 계정으로 접속해야 한다. 일반적으로는 sys 또는 system 계정을 사용한다.

```bash
sqlplus sys as sysdba
# 또는 
sqlplus system/password@ORCL
```

## 1. 사용자 생성

이제 새로운 사용자 계정을 만들어보자. 사용자 계정은 이름과 비밀번호, 그리고 사용할 기본 테이블스페이스가 필요하다.

```sql
-- 기본틀 : CREATE USER [사용자 이름] IDENTIFIED BY [비밀번호];
CREATE USER ict IDENTIFIED BY mypassword -- 비밀번호는 쌍따옴표로 작성
DEFAULT TABLESPACE users TEMPORARY TABLESPACE temp;
```

- ict: 사용자 이름
- mypassword: 사용자 비밀번호
- users: 사용자 데이터가 저장될 테이블스페이스
- temp: 정렬 등 임시 연산에 사용할 테이블스페이스

⚠️ 테이블스페이스가 없는 경우에는 DBA가 먼저 생성해야 한다.

<br>

## 2. 권한 부여

사용자가 Oracle에 접속하고 기본적인 작업(테이블 생성 등)을 할 수 있으려면 다음과 같은 권한을 부여해야 한다.

### 2.1. 접속 권한

```sql 
GRANT CONNECT TO ict; -- CONNECT 롤은 최소한의 로그인 권한을 제공
```

### 2.2. 리소스 권한 (테이블 등 생성 가능)

```sql 
GRANT RESOURCE TO ict; -- RESOURCE 롤은 테이블, 시퀀스 등 객체 생성 가능
```
### 2.3. 필요 시 DBA 권한도 가능 (⚠️ 권장되지 않음)

```sql
GRANT DBA TO ict; -- DBA 권한은 모든 권한을 포함하므로 개발자나 일반 사용자에게는 부여하지 않는 것이 원칙
```

## 3. 권한 확인

사용자가 어떤 권한을 갖고 있는지 확인하려면 아래와 같은 뷰를 조회하면 된다.

```sql
SELECT * FROM dba_sys_privs WHERE grantee = 'ICT';
SELECT * FROM dba_role_privs WHERE grantee = 'ICT';
```

## 4. 사용자 확인

```sql
SELECT * FROM all_users;
```

## 5. 사용자 접속

이제 사용자 계정으로 실제 접속이 가능한지 확인해보자.

```bash
sqlplus ict/mypassword@ORCL
```

접속이 성공하면 SQL> 프롬프트가 나타나고, 이후 CREATE TABLE, INSERT, SELECT 등의 명령이 정상적으로 실행된다.

## 6. 사용자 전환

사용자를 전환하기 위해서 다음과 connect 명령어를 사용한다.

```sql
CONNECT 사용자명/비밀번호 -- 기본틀
CONNECT scott/tiger  -- 예시
-----------------
CONNECT 사용자명/비밀번호@호스트:포트/서비스명 -- 원격 접속일 경우
CONNECT hr/hr123@localhost:1521/orcl -- 원격 접속 예시
----------------
CONNECT / AS SYSDBA  --  sysdba 권한으로 전환
CONNECT sys/비밀번호 AS SYSDBA -- sysdba 권한으로 전환하는 다른 방법
```

## 7. 리눅스에서 오라클 설치시 OS 계정

리눅스에서 Oracle Database를 설치하면 일반적으로 oracle이라는 OS 계정이 생성된다. 이 계정은 DB를 관리하는 데 사용된다.

```sh
su - oracle  # 오라클 계정으로 변경
```

끝.



