---
title : 리눅스에서 자주 쓰이는 명령어
categories : linux
---

# 운영체제 확인

```sh
$ cat /etc/os-release

## output ##
root@de8a5a0a07a8:/# cat /etc/os-release
NAME="Ubuntu"
VERSION="18.04.1 LTS (Bionic Beaver)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 18.04.1 LTS"
VERSION_ID="18.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic

```
# 실행 중인 프로세스의 포트정보 확인
```sh
$ ps -ef | grep redis-server
```







