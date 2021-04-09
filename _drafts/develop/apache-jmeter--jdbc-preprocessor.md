---
title : jdbc PreProcessor
categories : apache jmeter
---

preprocessor는 sampler가 수행되기 전에 사용자가 정의한 로직을 처리한다.

![jdbc preprocessor](/assets/jdbc-preprocessor-1.PNG)

<br>

## 1. Name 속성

preprocessor의 이름을 입력한다. 

아무 이름이나 상관 없다. 

<br>

## 2. Comments 속성

preprocessor의 설명을 입력한다. 

<br>

## 3. Variable Name 속성

DB connection의 Pool 이름을 입력한다.

<br>

## 4. SQL Query

<br>

### 4.1. Query type 속성

Query를 실행할 유형을 선택한다. 

- Callable Statement
- Prepared Select Statement
- Prepared Update Statement
- Commit
- Rollback
- AutoCommit(false)
- AutoCommit(true)
- Edit

<br>

#### 4.1.1 Prepared Select Statement

Prepared 단어가 들어간 Query 유형은 Query문에 변수를 사용할 수 있다. 

변수가 사용될 곳은 물음표(?)로 지정한다.

~~~sql
	select  num from student where name=?;
~~~

<br>

### 4.2. Parameter Values 속성

Query문에 사용될 변수 값을 설정한다. 

변수값이 여러개일 경우 쉼표(,)로 나열한다.

Query문에 변수 사용을 표시한 물음표(?)의 순서와 동일해야 한다. 

~~~sql
	select num from student where name=? and age=?;
~~~

~~~
	Parameter values : '홍길동',14 
~~~

이때 쉼표(,) 앞뒤로 공백이 있어서는 안된다.

Parameter values에는 변수를 사용할 수 있다. 

~~~
	Parameter values : ${name},${age} 
~~~

<br>

### 4.3. Parameter types 속성

Parameter types는 Parameter values의 자료형을 지정한다. 

자료형은 java.sql.Types에 명시된 type을 허용한다.

<br>

### 4.4. Variable names 속성

조회된 결과를 다음 처리기에 넘겨 줄 경우 사용할 변수를 지정한다. 

변수의 이름은 조회할 때 사용할 별칭과 일치하지 않아도 된다. 

단, 순서는 일치해야 한다.

~~~ 
	select num, age from student where name=? and age=?;
~~~

~~~
	Variable names : stdNo, stdAge
~~~

num -> stdNo, age -> stdAge

조회 후 결과를 변수에 담을 때는 Row 별로 구분된다.  

즉, 조회 후 1개의 Row가 나왔다면 stdNo_1, stdAge_1 형식으로 생성되고 2개일 경우 각각 stdNo_1, stdNo_2, stdAge_1, stdAge_2가 생성된다. 

생성된 변수는 다음 처리기에서 다음과 같이 사용할 수 있다. 

~~~
	${stdNo_1}, ${stdAge_1} 
~~~

