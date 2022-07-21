---
title : ORACLE 컬럼 정보 조회
categories : db oracle column
---

오라클에서 컬럼을 조회하고 싶을 때가 있다. 

그럴때는 ALL_TAB_COLUMNS 테이블에서 해당 테이블 정보를 조회한다. 


~~~sql
SELECT * FROM ALL_TAB_COLUMNS
WHERE TABLE_NAME = 'ETL_WLI_GDS_MST_INF'
ORDER BY COLUMN_ID ASC;
~~~

COLUMN_ID는 컬럼이 생성된 순서를 의미한다.






























