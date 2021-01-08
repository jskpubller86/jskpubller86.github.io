---
title: oracle sql 날짜 계층 출력
---

## 1. 날짜 계층 출력
~~~sql
    SELECT to_char(first_day + level -1, 'YYYY-MM_DD') days
    FROM 
        (SELECT 
            TRUNC(TO_DATE('20201031235959', 'yyyymmddhh24miss'), 'MM') first_day
        FROM dual)
    CONNECT BY first_day + level -1 <= TRUNC(last_day(TO_DATE('20201130235959', 'yyyymmddhh24miss')))
~~~


