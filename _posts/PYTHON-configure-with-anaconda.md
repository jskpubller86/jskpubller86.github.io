---
title : 아나콘다와 함께 파이썬 개발환경 구축
categories : java
---

## 1. 아나콘다(Anaconda) 설치

**아나콘다(Anaconda)**는 데이터 과학, 머신러닝, 인공지능, 통계 분석 등을 위한 파이썬 기반 통합 개발 환경이다.

쉽게 말하면, 필요한 도구들을 한 번에 설치하고 관리할 수 있게 해주는 개발자용 툴박스다.

필수 라이브러리 기본 내장, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, PyTorch 등.

Jupyter Notebook 내장, 데이터 분석과 실험 코드를 기록하기에 최적화된 웹 기반 툴.

아나콘다는 가상화를 지원한다.

가상환경은 말 그대로 **‘가짜로 만든 독립적인 파이썬 실행 환경’**이다.

각각의 프로젝트가 자신만의 파이썬 인터프리터와 라이브러리 집합을 갖게 된다.

같은 PC에 여러 개의 파이썬 버전과 패키지들이 공존할 수 있다.

하나의 환경에서 버전을 바꿔도 다른 프로젝트에 영향이 없다.

아나콘다를 설치하면 함께 python이 제공되므로 별도 설치 필요 없음.

아래의 공식 사이트에서 아나콘다를 설치한다.

아나콘다(Anaconda) 다운로드 [https://www.anaconda.com/download]

설치파일을 실행하고 아래와 같이 설치옵션을 설정한다.

<img src="/assets/images/python/anaconda-install-option.png">

위 옵션을 설정하지 않을 경우 시스템 환경 변수 `PATH`에  'anaconda' 설치 경로를 직접 지정해야한다.

그래야 `conda` 명령어를 어디서든 사용할 수 있다.

이제 `conda`의 가상환경에 접속해보겠다.

먼저 아래의 명령어로 가상환경 목록을 확인해 볼 수 있다.

```sh
$ conda env list

## 출력
# conda environments:
#
base                   C:\Users\ICT\anaconda3
.virtualenvs           C:\Users\ICT\anaconda3\envs\.virtualenvs
```

가상화 환경의 접속하고 빠져나오는  명령어는 다음과 같다.

```sh
$ conda activate base # 접속
$ conda deactivate # 접속 해제
```

### 1.1. 가상화 환경 생성

현재는 base라는 기본 가상화 환경만 존재한다.

`myconda`라는 가상화를 추가해 보겠다.

```sh
$ conda create -n myconda python=3.11  #파이썬 3.11의 myconda생성
```

## 2. Pycharm 설치

공식사이트에서 pycharm을 설치한다.

pycharm 공식 사이트 [https://www.jetbrains.com/ko-kr/pycharm/download/]

다운로드를 실행하고 실행한 후에 다음 설치옵션에서 아래와 같이 설정한다.

<img src="/assets/images/python/pycharm-install-option.png">













