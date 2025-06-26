---
title : 리눅스에서 환경변수 설정하기
categories : linux
---

리눅스에서 환경변수 설정하는 방법은 다음과 같다.

## 1. 일시적으로 환경변수 설정 (현재 셸에서만 유효)

```bash
export 변수명=값 # 기본틀
```

[사용예]

```bash
## 터미널에서
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
echo $JAVA_HOME
```

## 2. 영구적으로 환경변수 설정 (로그인 시 자동 적용)

사용 중인 셸에 따라 설정 파일이 다르다. 가장 일반적인 셸은 bash이며, 다음 파일 중 하나에 설정을 추가하면 된다:

### 2.1. [bash 사용자:]

- 현재 사용자만 적용: ~/.bashrc, ~/.bash_profile, ~/.profile

[사용예]

```bash
nano ~/.bashrc ## .bashrc 편집
## .bashrc 파일 맨 아래에 추가 
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
##
source ~/.bashrc # 환경 변수 설정하고 나서 source로 업데이트
```

### 2.2. [시스템 전역]

- 전 사용자 적용: /etc/profile, /etc/environment

```bash
sudo nano /etc/environment # /etc/environment 편집
## /etc/environment 마지막에 추가
JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"
PATH="/usr/lib/jvm/java-17-openjdk-amd64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
##

## 저장 후 로그아웃 & 로그인 또는 재부팅.
```

확인하는 방법은 다음과 같다.

```bash
echo $JAVA_HOME
echo $PATH
```

끝.