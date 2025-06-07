---
title : 리눅스에서 MySql 설치하기
categories : linux
---

## 1. MySQL 설치

```bash
sudo apt update
sudo apt install mysql-server
# 설치가 완료되면 MySQL 서버는 자동으로 시작된다.
```

## 2. MySQL 상태 확인

```bash
sudo systemctl status mysql
## 출력
mysql.service - MySQL Community Server
     Loaded: loaded (/lib/systemd/system/mysql.service; enabled; ...)
     Active: active (running) ... 
# 상태가 active (running)이면 정상적으로 실행 중이다.
```

혹 상태가 안나온다면 mysql 프로세스를 찾아본다. 찾았다면 실행중인 상태이다.

```bash
ps -ef | grep mysql
## 출력
mysql      39506       1  0 03:13 ?        00:00:18 /usr/sbin/mysqld
ubuntu     77144   75277  0 05:39 pts/0    00:00:00 grep --color=auto mysql
```

## 3. MySQL 시작 / 재시작 / 종료

| 작업      | 명령어                            |
| ------- | ------------------------------ |
| 시작      | `sudo systemctl start mysql`   |
| 재시작     | `sudo systemctl restart mysql` |
| 종료 (중지) | `sudo systemctl stop mysql`    |

## 4. MySQL 접속

```bash
sudo mysql -u root  # root권한으로 접속한다.
## 접속 후 프롬프트가 이렇게 나오면 성공
mysql>
```

root 비밀번호를 변경한다.

```bash
alter user 'root'@'localhost' identified by 'ict01';
## 출력
Query OK, 0 rows affected (0.01 sec)
```

## 5. 접속 종료

```bash
exit;
## 또는 Ctrl + D
```