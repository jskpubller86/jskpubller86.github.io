---
title : Oracle의 기본 명령어
categories : oracle
---


## 1. 테이블 조작 쿼리

```sql
DESC team; -- 테이블 컬럼 정보 확인
ALTER TABLE app_user RENAME COLUMN nm TO user_name; -- nm 컬럼명을 user_name으로 변경
ALTER TABLE app_user RENAME COLUMN nm TO user_name; -- nm 컬럼명을 user_name으로 변경
```

## 2. 시퀀스 관련 쿼리

```sql
SELECT * FROM USER_SEQUENCES; -- 사용자가 설정한 시퀀스 확인
SELECT * FROM ALL_SEQUENCES; -- 사용자 볼 수 있는 모든 시퀀스 확인
DROP SEQUENCE app_file_seq; -- 지정한 시퀀스(app_file_seq) 삭제
```

## 2. 제약조건 관련 쿼리

```sql
SELECT * FROM USER_CONSTRAINTS; -- 사용자가 생성한 모든 제약조건 확인
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='P'; -- Primary Key 제약조건 조회
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='C'; -- CHECK 제약조건(not null, 도메인 등)
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='R'; -- 외래키 제약조건 조회
SELECT * FROM USER_CONSTRAINTS WHERE constraint_type='P' AND table_name = 'APP_FILE'; -- 특정 테이블의 기본키 제약조건 조회
```




