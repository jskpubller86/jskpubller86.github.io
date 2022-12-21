---
title : oracle 권한 관리
categories : db oracle grant 권한
---

오라클 권한에 대해서 알아보자

## 1. GRANT

### 1.1. INSERT 권한

특정 사용자에게 데이터 삽입 권한을 부여한다. 

```sql
GRANT INSERT ON [TABLE NAME] TO [USER];
```

<br>

### 1.2. SELECT 권한

특정 사용자에게 데이터 조회 권한을 부여한다.

```sql
GRANT SELECT ON [TABLE NAME] TO [USER];
```

<br>

### 1.3. DELETE 권한

특정 사용자에게 데이터 삭제 권한을 부여한다. 

```sql
GRANT DELETE ON [TABLE NAME] TO [USER];
```

<br>

### 1.4. UPDATE 권한 

특정 사용자에게 데이터 수정 권한을 부여한다. 

```sql
GRANT UPDATE ON [TABLE NAME] TO [USER];
```

<br>

### 1.5. SESSION 권한

생성한 계정에 DB에 접근할 수 있는 권한을 생성한다.

```sql
GRANT CREATE SESSION TO [USER];
```

<br>

### 1.6. CREATE USER 권한

사용자를 생성하는 권한

```sql
GRANT CREATE USER TO [USER];
```

<br>

### 1.7. DROP USER 권한

사용자를 삭제하는 권한

```sql
GRANT DROP USER TO [USER];
```

<br>

### 1.8. DROP ANY TABLE 권한

테이블 삭제하는 권한 

```sql
GRANT DROP ANY TABLE TO [USER];
```

<br>

### 1.9. QUERY REWRITE 권한

A라는 사용자가  복잡한 쿼리를 이용하여 VIEW를 만들었는데 B라는 사용자가 똑같은 쿼리를 수행했을 경우 A사용자가 만든 VIEW를 조회하도록 하는 권한

즉 이미 동일한 쿼리로 만들어진 VIEW가 존재할 경우 해당 쿼리 수행시 VIEW를 조회하도록 하는 권한이다.

```sql
GRANT QUERY REWRITE TO [USER];
```

<br>

### 1.10. CREATE TABLE 권한

사용자 스키마에서 테이블을 생성할 수 있는 권한

```sql
GRANT CREATE TABLE TO [USER];
```

<br>

### 1.11. CREATE VIEW 권한

사용자 스키마에서 뷰를 생성할 수 있는 권한

```sql
GRANT CREATE VIEW TO [USER];
```

<br>

### 1.12. CREATE SEQUENCE 권한

사용자 스키마에서 함수를 생성할 수 있는 권한

```sql
GRANT CREATE SEQUENCE TO [USER];
```

<br>

### 1.13. CREATE PROCEDURE 권한

사용자 스키마에서 함수를 생성할 수 있는 권한

```sql
GRANT CREATE PROCEDURE TO [USER];
```

<br>

### 1.14. 여러 개 권한 부여

여러 개의 권한을 부여하고 싶을 경우 다음과 같이 나열한다.

```sql
GRANT SELECT, INSERT, DELETE, UPDATE ON [TABLE NAME] TO [USER];
```

<br>

### 1.15. 사용자에게 부여된 권한 조회

```sql
SELECT * FROM DBA_ROLE_PRIVS WHERE GRANTEE = 'HOYA' ;  
```

<br>

### 1.16. 현재 세션 사용자에게 부여된 ROLE 조회

현재 세션 사용자에게 부여된 ROLE 조회

```sql
SELECT * FROM USER_ROLE_PRIVS;  
```

<br>

## 2. ROLE 역할

여러 개의 권한 묶어 ROLE을 만들고 사용자에게 해당 ROLE을 부여할 수 있다.

<br>

### 2.1. ROLE 생성

ROLE을 생성한다.

```sql
CREATE ROLE user_role;
```

<br>

### 2.2. ROLE에 권한 부여

ROLE에 권한을 부여한다.

```sql
 GRANT CREATE SYNONYM, CREATE VIEW to user_role;
```

<br>

### 2.3. ROLE 부여

생성된 ROLE을 사용자에게 부여한다.

```sql
 GRANT user_role TO [사용자];
```

<br>

## 3. REVOKE 권한 회수

GRANT로 부여된 권한 및 역할을 회수한다.

```sql
REVOKE user_role TO [사용자];

REVOKE CREATE TABLE TO [사용자]; 
```

































