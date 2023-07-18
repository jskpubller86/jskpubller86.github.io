---
title : 오라클 유저 생성하기
categories : db oracle
---


## 1. 유저 생성



CREATE USER [유저 이름] IDENTIFIED BY [비밀번호];

```sql
CREATE USER oracleuser IDENTIFIED BY "1234";
```

여기서 주의할 점은 비밀번호는 쌍따옴표로 작성해야한다는 것

<br>

## 2. 유저 확인
```sql
SELECT * FROM all_users;
```



