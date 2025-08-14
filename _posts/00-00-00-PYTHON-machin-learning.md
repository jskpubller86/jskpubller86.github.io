---
title : 파이썬 머신러닝
date: 2025-08-06
categories : python
---

머신러닝 중에서 자주사용하는 모델은 회귀 분석이다.

**회귀 분석(Regression Analysis)**은 변수들 간의 관계를 모델링하고, 이를 통해 한 변수(종속 변수)를 다른 변수들(독립 변수)로 예측하거나 설명하려는 통계적 기법입니다. 주로 예측과 관계 분석을 목적으로 사용되며, 예를 들어 집의 가격을 면적이나 위치 등의 변수로 예측하거나, 학력 수준과 소득 간의 관계를 분석하는 데 활용됩니다.

회귀 분석에는 **선형 회귀 (Linear Regression)**, **로지스틱 회귀 (Logistic Regression)**, **다항 회귀 (Polynomial Regression)**, **릿지 회귀 (Ridge Regression) / 라쏘 회귀 (Lasso Regression)**, **엘라스틱넷 회귀 (ElasticNet Regression)** 이렇게 5가지가 있다.


## 선형 회귀 (Linear Regression)

선형회귀(Linear Regression)는 통계학과 머신러닝에서 사용되는 기법으로, 두 변수 또는 여러 변수 간의 관계를 직선 또는 초평면으로 모델링하는 방법이다.

이를 통해 입력 변수(특징)와 출력 변수(목표값) 간의 선형 관계를 파악하고, 새로운 데이터를 예측하는 데 사용된다.

```py
# 행과 열을 관리하기 위한 모듈
import pandas as pd
import numpy as np

# 선형회귀 모델 모듈
from sklearn.linear_model import LinearRegression

# 시각화를 위한 모듈 
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import matplotlib.image as mpimg
```

## 2D 텐서(행렬)
- x는 독립변수 (일반적으로 데이터의 관측치를 의미하고, 고객의 나이, 소득,구매이력,광고료)
- y는 종속변수 (타겟이나 레이블 의미하고 예측하고자하는 값) - 지도학습
- 연속형, 분류형으로 나눔



















