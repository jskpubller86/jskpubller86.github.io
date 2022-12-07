---
title : 트랜잭션 특성
categories : transaction
---

트랜잭션은 특성을 가지고 있다. 

이를 ACID라고 부른다. 

## 1. ACID

### 1.1. 원자성(Atomicity)

- 완전하게 수행이 완료되지 않으면 전혀 수행되지 않아야 한다.
- 연산은 Commit, Rollback을 이용하여 적용 또는 취소로 한꺼번에 완료되어야 한다.
- 중간에 하나의 오류가 발생되더라도 취소가 되어야 한다.
- 은행 ATM 이용 시 출금액 입력 후 트랜잭션 발생에 오류가 생기면 작업은 취소되고 다시 시도를 요구한다.

### 1.2. 일관성(Consistency)

- 시스템의 고정 요소는 트랜잭션 수행 전후가 같아야 한다.
- 트랜잭션 결과는 일관성을 유지해야 한다.
- 트랜잭션 처리 전과 후의 데이터베이스 상태는 같아야 한다. 처리 후라고 해서 구조나 형식이 변경되어서는 안 된다.

### 1.3. 격리성(Isolation)

- 트랜잭션 실행 시 다른 트랜잭션의 간섭을 받지 않아야 한다.

### 1.4. 영속성(Durability)

- 트랜잭션의 완료 결과가 데이터베이스에 영구히 기억되어야 한다.