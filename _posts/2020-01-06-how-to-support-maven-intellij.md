---
title : 인텔리제이에서 메이븐 프로젝트를 지원하는 방법
categories : intellij
---

인텔리제이에서는 메이븐 형식의 프로젝트를 사용할 수 있도록 지원한다.

메이븐 프로젝트를 만드는 방법은 크게 아래의 두 가지 정도로 나눌 수 있다.  

- 처음부터 메이븐 프로젝트를 만드는 방법
- 기존 프로젝트를 메이븐 프로젝트로 변환하는 방법

먼저 처음부터 메이븐 프로젝트를 생성하는 방법에 대해서 알아보겠다. 

## 처음부터 메이븐 프로젝트를 만드는 방법

mac에 설치된 인텔리제이를 예로 들어 설명하면 먼저 'File > New > Project'를 선택하고 이후 나오는 대화 화면에서 좌측의 옵션 선택 영역의 Generators 부분에서 'Maven Archetype'을 선택한다.

선택 후 우측에 메이븐 프로젝트의 생성을 위한 상세 옵션이 나오는데 옵션을 기입하고 우측하단의 create 버튼을 클릭하면 프로젝트 생성이 완료된다.

## 기존 프로젝트를 메이븐 프로젝트로 변환하는 방법

기존 프로젝트를 메이븐 프로젝트로 변환하기 위해서는 먼저 기존 프로젝트를 열고 좌측의 Project 패널에서 프로젝트를 선택하고 마우스의 왼쪽 버튼을 클릭한 후 생성되는 컨텍스트 메뉴에서 'Add Framework Support...' 메뉴를 선택한다. 

선택하면 'Add Framework Support' 대화창이 나올 것인데 여기서 좌측의 옵션 패널에서 Maven을 찾아서 선택하고 OK 버튼을 클릭하면 메이븐 프로젝트로 변환된다.

끝.



