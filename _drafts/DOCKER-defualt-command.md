---
title : docker의 기본 가이드
data : 2025-07-16
categories : docker
tags: docker default guide
---

# docker 컨테이너 연관 명령어

## 도커 프로세스

```sh
$ docker ps -a # 실행 중인 모든 도커 확인
$ docker stop  <container id>
```

## 도커 접속

```sh
$ docker exec -it <[docker's id | docker's name]> /bin/bash # 실행 중인 도커에 접속
$ docker exec -it de8a5a0a07a8 /bin/bash # 실행 중인 도커 접속 예시
```


## 도커 로그인

도커 hub에 로그인한다.

```sh
$ docker login
## 아래 정보 단계별로 입력
Username: <도커허브_아이디>
Password: <도커허브_비밀번호>

# 로그인 성공 후 아래 메세지 출력
Login Succeeded

# 인증정보는 /root/.docker/config.json에 저장됨
```
