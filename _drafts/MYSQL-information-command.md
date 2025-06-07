---
title : MYSQL information 확인하는 명령어
categories : mysql
---


## 1. 확인 명령어

<br>

#### 1. 현재 활성화된 커넥션 개수

```sql
show status where `variable_name` = 'Threads_connected';
```

<br>

#### 2. 최대 커넥션 개수

```sql
show variables like 'max_connections';
```

<br>

#### 3. 커넥션 타임아웃 

```sql
show global variables like '%connect_timeout';
```

<br>

#### 4. 대기 시간

쿼리 수행을 기다리는 시간으로 지정된 시간 안에 쿼리가 수행되지 않으면 커넥션이 종료된다.

```sql
show global variables like '%wait_timeout';
```


#### 4. 프로세스 리스트

```sql
show processlist;
```

<br>

