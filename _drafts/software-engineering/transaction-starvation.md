---
title : 트랜잭션 기아 현상(Starvation)
categories : transaction
---

- 로킹을 사용할 때 발생하는 교착 상태 외에 또 다른 문제점이다.
- 어떤 트랜잭션이 무한정 수행되지 않는 반면 시스템에 있는 다른 트랜잭션들은 정상적으로 수행될 때 발생한다.
- 기아 현상을 해결하기 위해 선착 처리(First-come First-served) 큐를 사용한다.


`선착 처리(First-come First-served)` : 트랜잭션들이 어떤 항목에 락을 요청한 순서에 따라 그 항목에 로크(Lock)를 걸 수 있는 방법이다.
