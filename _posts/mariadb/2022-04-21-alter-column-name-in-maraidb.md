---
title : MariaDB에서 컬럼 이름 수정하기
categories : db mariadb alter column
---

MariaDB에서 컬럼의 이름을 수정하는 DDL 문은 다음과 같다.

~~~sql
ALTER TABLE files CHANGE (column name) (chagne column name) (DataType) (Constraints);
~~~

위를 실제 쿼리문으로 작성하면 다음과 같다.

~~~sql
ALTER TABLE files CHANGE f_id file_id BIGINT;
~~~

여기서 주의해야 할 점은 이전에 적용된 데이터 타입이 변경 이후에도 유지되면 생략하지 않고 입력해야 한다는 것이다.

즉 컬럼 이름만 변경하겠다고 이름만 명시하는게 아니라 데이터 타입도 같이 입력해줘야 한다.

이를 지키지 않으면 오류가 발생한다.

~~~sql
ALTER TABLE files CHANGE f_id file_id; -- 오류 구문
~~~