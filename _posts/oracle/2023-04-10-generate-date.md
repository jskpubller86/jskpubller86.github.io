---
title : Oracle 날짜 출력
categories : orcle date
---

오라클에서 날짜를 출력하는 방법은 다음과 같다. 

```sql
SELECT (TO_DATE('20210101', 'YYYYMMDD') + (LEVEL*7)) AS PRINT_FRIDAY FROM DUAL
CONNECT BY LEVEL <= 12;
```

위 방법은 LEVEL을 이용한 방법으로 일주일 간격으로 날짜를 출력하다.