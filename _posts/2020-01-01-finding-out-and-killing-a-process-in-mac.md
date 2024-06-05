---
title : 맥에서 프로세스 찾고 죽이기
categories : platform mac
---

플랫폼에서 특정 프로세스가 문제를 발생시킬 때 그 프로세스를 찾고 강제로 종료해야 하는 경우가 있다. 

이런 경우 MAC에서는 lsof(list open files) 명령어를 사용하여 프로세스를 찾고 죽일 수 있다. 

lsof 명령어를 단독으로 사용하면 너무 많은 프로세스를 출력하므로 옵션을 조합하여 사용하여야 한다.

lsof 명령어가 제공하는 옵션을 확인하려면 뒤에 --help를 옵션을 붙인다. 

```bash
$ lsof --help
```

확인한 옵션 중에서 자주 사용하는 -i 옵션을 이용해서 8080 포트로 실행되는 프로세스를 찾아 보겠다. 

```bash
$ lsof -i :8080

# 결과
COMMAND PID    USER   FD   TYPE DEVICE                 SIZE/OFF NODE NAME
httpd   830 jskim86    4u  IPv6 0x5cdb9beb60a6c30f     0t0      TCP  *:http-alt (LISTEN)
httpd   854 jskim86    4u  IPv6 0x5cdb9beb60a6c30f     0t0      TCP  *:http-alt (LISTEN)
```

위 결과에서 PID 열에 있는 정보가 프로세스 아이디를 말하며 이것을 kill 명령어와 함께 사용하여 종료할 수 있다.

참고로 kill 명령에서 -9 옵션은 강제로 종료하는 옵션이다.

```bash
$ kill -9 830
```

=끝=





























