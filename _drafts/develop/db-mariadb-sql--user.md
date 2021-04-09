---
title : MARIADB 사용자 관리
categories : db mariadb sql
---

실습환경 :
1. MARIADB 10.3.24 설치 
2. DB TOOL dbvear 설치 


## 1. 계정 목록 확인 

MARIADB에서 접속할 수 있는 계정을 확인하려면 먼저 MYSQL 모드를 사용할 수 있도록 해야한다.

~~~
	USE my_sql;
~~~

mysql 모드를 사용할 수 있게 되면 다음의 쿼리로 계정목록을 확인한다. 

~~~
	SELECT HOST, USER FROM USER;
~~~

쿼리를 실행하면 다음과 같은 형태로 정보를 얻을 수 있다. 

|host|user|
|----|----|
|localhost|root|

<br>

* __host__ : 아이피 주소 또는 도메인
* __user__ : 마리아디비에 접속할 수 있는 계정

## 2. 계정 생성 

계정을 생성하는 쿼리 형태는 다음과 같다. 

~~~sql
	CREATE USER 'user'@'host' IDENTIFIED BY 'password';
~~~

user가 'hong', 호스트가 'localhost', 비밀번호가 '1111'인 계정을 생성하는 쿼리는 다음과 같다. 

~~~sql
	CREATE USER 'hong'@'localhost' IDENTIFIED BY '1111';
~~~

host는 접속자의 (IP 또는 domain)를 구별한다. 


계정 목록을 다시 확인해 본다.

~~~sql
	SELECT HOST, USER FROM USER;
~~~

|host|user|
|----|----|
|localhost|root|
|localhost|hong|

<br>

자세한 내용은 다음의 링크에서 확인한다. 

[https://mariadb.com/kb/en/create-user/](https://mariadb.com/kb/en/create-user/)

<br>

# 계정 권한 확인

생성된 계정의 권한을 확인하기 위해서 다음과 같은 쿼리문을 실행한다. 

~~~
	SHOW GRANTS FOR 'user'@'localhost'
~~~





