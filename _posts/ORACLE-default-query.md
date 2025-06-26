---
title : Oracle의 기본 명령어
categories : oracle
---


## 1. 테이블 조작

```sql
DESC team; -- 테이블 컬럼 정보 확인
ALTER TABLE app_user RENAME COLUMN nm TO user_name; -- nm 컬럼명을 user_name으로 변경
ALTER TABLE app_user RENAME COLUMN nm TO user_name; -- nm 컬럼명을 user_name으로 변경
```

## 2. 시퀀스 조작

```sql
SELECT * FROM USER_SEQUENCES; -- 사용자가 설정한 시퀀스 확인
SELECT * FROM ALL_SEQUENCES; -- 사용자 볼 수 있는 모든 시퀀스 확인
DROP SEQUENCE app_file_seq; -- 지정한 시퀀스(app_file_seq) 삭제
```

## 3. 제약조건 조작

```sql
SELECT * FROM USER_CONSTRAINTS; -- 사용자가 생성한 모든 제약조건 확인
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='P'; -- Primary Key 제약조건 조회
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='C'; -- CHECK 제약조건(not null, 도메인 등)
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='R'; -- 외래키 제약조건 조회
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='P' AND table_name = 'APP_FILE'; -- 특정 테이블의 기본키 제약조건 조회
```

### 4.1. 인텍스 조작

```sql
CREATE INDEX 인덱스이름 ON 테이블이름(컬럼이름);
```

## 4. 테이블 스페이스 조작



### 4.2. 인덱스의 테이블스페이스 수정

오라클은 테이블 생성시 테이블스페이스를 지정할 수 있다. 

보통 테이블이 사용하는 테이블스페이스와 인덱스가 사용하는 테이블 스페이스를 구분하는데

생성시 인덱스가 사용하는 테이블스페이스를 잘못 지정할 때가 있다. 
 
다행히도 이러한 잘못 지정된 테이블스페이스를 수정할 수 있는  DDL이 있다. 


```sql
ALTER INDEX 인덱스명 REBUILD TABLESPACE 테이블스페이스;
```

위 ALTER 문을 사용하면 테이블스페이스를 수정할 수 있다.








