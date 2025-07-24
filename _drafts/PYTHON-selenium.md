---
title : 파이썬 기본
date: 
categories : python
---

먼저 selenium을 설치한다.

```py
# 셀레니움 설치
!pip install selenium

# 세레 chrome drive 인식 여부 확인
import os
import selenium
selenium.__version__
os.listdir()
```

필요한 모듈을 정의한다. 

```py
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

#webdriver 생성시 chrome driver의 실행파일의 경로를 매개변수
service = Service(executable_path='chromedriver.exe')
driver = webdriver.Chrome(service=service)
```