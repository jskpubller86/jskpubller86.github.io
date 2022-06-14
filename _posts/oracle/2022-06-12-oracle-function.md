---
title : oracle 함수
categories : db oracle function 함수
---

오라클 함수에 대해 알아보자

## 1. LISTAGG() 함수

LISTAGG() 함수는 여러 행에 있는 동일한 컬럼을 문자로 연결할 때 사용한다. 

예를 들어 다음과 같은 조회 결과가 나왔을 때 

| USER_NAME |
|---|
| 홍길동 |
| 강호동 |

홍길동과 강호동을 하나의 문자열로 연결하고 싶다면 다음과 같이 사용할 수 있다. 

```sql
SELECT 
    LISTAGG(USER_NAME, ',') WITHIN GROUP(ORDER BY USER_NAME) AS USER_NAMES
FROM USERS;
```

결과는 다음과 같다.

| USER_NAMES |
|---|
| 홍길동,강호동 |

추가 WITHIN 키워드로 추가 조건을 명시해야한다.

또한 결합되는 문자열이 길어질 경우 문자열이 너무 길다는 오류가 발생할 수 있으므로 조건을 통해 조절해야한다.




















