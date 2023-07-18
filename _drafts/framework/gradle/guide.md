---
title : gradle 설명
categories : framework gradle
---

## Some basics
---
<br>

gradle 파일에 설정 스크립트는 각가의  `delegate object`를 통해서 호출되어진다.

그 중에서 몇가지 중요한 스크립트를 살펴보면 빌드 스크립트는 Project 인스턴스로 전파되고 초기화 스크립트는 Gradle 인스턴스로 전파, 

그리고 설정 스크립트는 Settings 인스턴스로 전파된다.

각각의 모든 Gradle Script는 Script 인터페이스를 구현한다.

<br><br>

### Build script structure
---
<br>





