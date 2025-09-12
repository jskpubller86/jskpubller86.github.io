---
title: 오라클 설치와 상태확인
data: 2025-07-16
categories: oracle
tags: oracle install status
---

# 오라클 리스너 실행상태 확인

```bash
$ lsnrctl status

# 다음과 같이 되어 있다면 리스너가 실행안된 상탠
Connecting to (DESCRIPTION=(ADDRESS=(PROTOCOL=IPC)(KEY=EXTPROC_FOR_XE)))
TNS-12541: TNS:no listener
 TNS-12560: TNS:protocol adapter error
  TNS-00511: No listener
   Linux Error: 2: No such file or directory
Connecting to (DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=de8a5a0a07a8)(PORT=1521)))
TNS-12541: TNS:no listener
 TNS-12560: TNS:protocol adapter error
  TNS-00511: No listener
   Linux Error: 111: Connection refused

# 다음 명령어로 리스터 실행
lsnrctl start
```
