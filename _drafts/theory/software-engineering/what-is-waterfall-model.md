---
title : 폭포수 모형(Waterfall Model)이란?
categories : theory software-engineering
---

## 1. 정의

Boehm이 제시한 고전적 생명주기 모형으로, 소프트웨어 개발 과정의 각 단계가 순차적으로 진행된다.

선형 순차적 모델이라고도 한다.

## 2. 개발 단계

- 타당성 검사 : 시스템을 개발하는 것이 타당한지를 검사하는 단계이다.
- 계획 : 추진 방안을 제시하고 개발 비용, 소요 기간, 인력 등 개발 계획을 수립하는 단계이다.
- 요구분석 : 시스템의 기능, 성능, 환경 등의 요구사항을 면밀히 분석하는 단계이다.
- 기본 설계 : 하드웨어,  소프트웨어, 제어 구조, 자료 구조 등의 설계를 작성하는 단계이다.
- 상세 설계 : 각 단위  프로그램의 제어, 자료 구조와 인터페이스를 상세히 작성하는 단계이다.
- 구현 : 설계된 문서를 통해 실제 컴퓨터가 작동할 수 있는 코드로 변환하는 단계이다.
- 시험(검사) : 구현한 프로그램을 테스트하여 요구조건에 맞는지 확인하는 단계이다.
- 유지보수 : 개발 후 발생하는 문제점이나 수정 사항을 적용하는 단계로 가장 많은 비용이 소요된다.

## 3. 장점

- 적용 경험과 성공 사례가 많다.
- 단계별 정의가 분명하고, 전체 공조의 이해가 용이하다.
- 단계별 산출물이 명확하다.

## 4. 단점

- 개발 과정 중에 발생하는 새로운 요구나 경험을 설계에 반영하기 어렵다.
- 두 개  이상의 과정이 병행 수행되거나 이전 단계로 넘어가는 경우가 없다.
- 이전 단계의 오류 수정이 어렵다.






