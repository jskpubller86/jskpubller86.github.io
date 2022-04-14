---
title : 자바 아카이브(jar) 버전(version) 확인하는 방법
categories : java
---

## 1. 명령 프롬프트(prompt)에서 확인하는 방법
~~~cmd
javap -verbose [class filename] | find /N "version"
~~~

## 2. 메타정보(META-INF)에서 확인하는 방법
자바 아카이브(jar)에 보면 META-INF 폴더에 MANIFEST.MF 파일이 존재하는데 이 파일에 자바 컴파일 버전을 확인할 수 있다.
