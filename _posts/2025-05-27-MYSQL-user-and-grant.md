---
title : 사용자를 생성하고 권한 부여하기
categories : mysql
---

## 1. root 계정으로 MySQL 접속하기

MySQL에 접속하기 위해 터미널이나 명령 프롬프트에서 아래 명령어를 입력한다.

```bash
mysql -u root -p
# 비밀번호를 입력하면 MySQL 프롬프트(mysql>)에 접속된다.
```

## 2. 현재 사용자 정보 확인

사용자 목록을 확인하려면 mysql.user 테이블을 조회하면 된다.

```sql
SELECT User, Host FROM mysql.user;
```

이 명령어를 실행하면 현재 등록된 사용자와 그 사용자가 접근할 수 있는 호스트 정보가 출력된다.

예시 결과:
```
+--------+-----------+
| User   | Host      |
+--------+-----------+
| root   | localhost |
| mysql  | localhost |
| ...    | ...       |
+--------+-----------+
```


## 3. 새로운 데이터베이스 생성

이제 우리가 사용할 새로운 데이터베이스를 생성하자. 예를 들어 sample이라는 이름으로 생성한다.

```sql
CREATE DATABASE sample;
```

정상적으로 실행되면 Query OK 메시지가 출력된다.


## 4. 사용자 계정 생성

이제 ict라는 새로운 사용자 계정을 만들어 보자. 사용자 계정은 특정 호스트에서 접속할 수 있게 설정할 수 있는데, 여기서는 로컬호스트에서 접속 가능하도록 설정한다.

```sql
CREATE USER 'ict'@'localhost' IDENTIFIED BY '비밀번호';
```

※ 실제 운영 환경에서는 '비밀번호' 부분에 복잡한 비밀번호를 사용하는 것이 중요하다.

## 5. 데이터베이스에 대한 권한 부여

ict 사용자에게 sample 데이터베이스에 대한 모든 권한을 부여한다. 이는 SELECT, INSERT, UPDATE, DELETE 등 대부분의 작업을 포함한다.

```sql
GRANT ALL PRIVILEGES ON sample.* TO 'ict'@'localhost';
```

## 6. 권한 변경 적용

MySQL 5.x 이하 버전에서는 GRANT 명령 이후 FLUSH PRIVILEGES를 실행해야 하지만, MySQL 8.0 이상에서는 자동 적용된다. 그래도 명시적으로 적용하고 싶다면 아래 명령어를 실행하자.

```sql
FLUSH PRIVILEGES;
```

## 7. 확인 - ict 계정으로 접속해서 권한 테스트

MySQL에서 로그아웃한 뒤 ict 사용자로 접속해보자.

```sql
mysql -u ict -p
```

접속 후 아래 명령으로 권한이 있는 데이터베이스를 확인할 수 있다.

```sql
SHOW DATABASES;
```

sample 데이터베이스가 목록에 보이면 권한 부여가 잘 된 것이다.

끝.