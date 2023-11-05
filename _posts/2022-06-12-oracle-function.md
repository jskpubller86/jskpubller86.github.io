---
title : oracle 함수
categories : db oracle
---

오라클 함수에 대해 알아보자

## 1. LISTAGG()

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

추가로 WITHIN 키워드로 추가 조건을 명시해야한다.

또한 결합되는 문자열이 길어질 경우 문자열이 너무 길다는 오류가 발생할 수 있으므로 조건을 통해 조절해야한다.

그러면...WITHIN 말고 다른걸 쓰면 안될까? 안된다!

<br>

## 2. OVER() 함수

일반적으로 집계함수와 컬럼을 사용하기 위해서는 GROUP BY 를 사용해야한다. 

그런데 매번 GROUP BY를 사용하는게 불편할 때가 있다. 

그래서 오라클에서는 OVER() 함수를 제공하여 집계함수를 사용할 수 있도록 하고 있다.

```SQL
SELECT 
	PLU_NAME
	, COUNT(*) OVER(PARTITION BY PLU_NAME) 
FROM GDS
```

여기서 PRATITION BY는 GROUP BY와 같은 역할을 한다.

그냥 OVER()만 사용하면 전체 행의 수를 가져온다.


## 1. Numeric Functions 수에 대한 함수

### 1.1. ABS() 함수 

ABS() 함수는 절대 값을 반환한다.

```SQL
SELECT ABS(-15) FROM DUAL;
```
<br>

### 1.2. ACOS() 함수

코사인 값을 반환한다.

```sql
SELECT ACOS(.3) FROM DUAL;
```

<br>

### 1.3. MOD() 함수

앞에 있는 수를 뒤에 있는 수로 나눈다.

```sql
SELECT MOD(11,4) FROM DUAL;
```

<br>

### 1.4. FLOOR() 함수

소수점을 제외한 정수를 반환한다.

```sql
SELECT FLOOR(15.4) FROM DUAL; // 15
```

<br>

## 2. General Comparison Functions

### 2.1. GREATEST() 함수

가장 큰 값을 반환한다.

```sql
SELECT GREATEST('HARRY', 'HARRIOT', 'HAROLD') Greatest FROM DUAL;

-- HARRY

SELECT GREATEST(1, 2, 3) Greatest FROM DUAL;

-- 3

SELECT GREATEST(1, 'h', 3) Greatest FROM DUAL

-- error
```

SELECT GREATEST() 함수 인자값의 데이터 유형이 다르면 오류가 발생한다.

<br>

### 3.1. LEAST() 함수

가장 최근 값을 반환한다.

```sql
SELECT LEAST('HARRY','HARRIOT','HAROLD') "LEAST"
FROM DUAL;

-- HAROLD
```

SELECT LEAST() 함수 인자값의 데이터 유형이 다르면 오류가 발생한다.

<br>

### 3.1.1. CAST() 함수

```sql
SELECT CAST('22-OCT-1997' AS TIMESTAMP WITH LOCAL TIME ZONE) 
   FROM dual;

SELECT product_id, 
   CAST(ad_sourcetext AS VARCHAR2(30))
   FROM print_media;
```





































