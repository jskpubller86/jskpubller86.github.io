---
title : 트랜잭션 2단계 로킹
categories : theory software-engineering
---

완벽한 직렬성을 보장하기 위해 로킹(locking)기법을 보다 강화한 방법이다.

2단계로 이루어져 있으며, 확장 단계 후 수축 단계를 실행하게 되고 서로 중복되거나 겹칠 수 없다. 

## 1. 단계 설명 

## 1.1. 확장 단계 (Growing Phase) 

항목들에 대한 새로운 로크를 획득할 수 있지만 해제할 수 없다. 

## 1.2. 수축 단계 (Shrinking Phase)

이미 보유하고 있는 로크들을 해제할 수 있지만 어떤 새로운 로크를 획득할 수 없다.

## 2. 문제점

교창 삭태가 발생할 수 있다.