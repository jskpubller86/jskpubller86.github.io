---
title : Oracle 실행계획 확인해보기
categories : oracle
---

오라클에서 쿼리의 실행계획을 볼 수 있다. 

먼저 실행계획은 dbms_xplan.display에 저장해야 한다. 

`explain plan for' 키워드를 통해 dbms_xplan.display에 저장한다.

```sql
    EXPLAIN PLAN FOR
    SELECT
        EAKMI.*
    FROM ETL_APP_KBF_MST_INF EAKMI
    JOIN ETL_WLI_GDS_MST_INF EWGMI
        ON EAKMI.PLU_CD = EWGMI.PLU_CD;
```

<br>

저장 후 확인을 위해서 아래와 같이 한다.

```sql
  select * from table(dbms_xplan.display);
```

자세한 설명은 아래 링크를 확인한다.

<https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/EXPLAIN-PLAN.html>


끝.






