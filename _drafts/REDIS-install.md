---
title : redis 설치 가이드
categories : redis
---

# 리눅스 운영체제에서 설치

```sh
# 1. 패키지 목록 업데이트
sudo apt update

# 2. Redis 설치
sudo apt install redis-server -y

# 3. Redis 자동 시작 설정
sudo systemctl enable redis-server

# 3-1. Redis 시작
sudo systemctl start redis-server

# 3-2. 상태 확인
systemctl status redis-server

# 4. systemctl을 설치할 수 없는 환경이거나 실행할 수 없는 환경이라면 service로 호출
```sh
$ service redis-server start
$ service redis-server status
```







