---
title : IP 주소
categories : theory software-engineering
---

IP는 인터넷에 연결된 모든 컴퓨터 자원을 구분하기 위한 고유한 주소이다.

아이피는 8비트씩 4부분, 총 32비트 즉, 4바이트로 구성되어 있다.

아이피는 네트워크 망 기준으로 주소를 분리하기 위해서 클래스라는 개념을 사용하고 A~E까지 총 5가지로 구분한다.

#### A class

국가나 대형 통신망에 앞 8비트를 사용하며 0~127로 시작한다.

앞 8비트를 제외한 나머지 24비트를 호스트로 사용한다.

> 1~8(A class 주소), 9~32(호스트)

<br>

#### B class

중대형 통신망에 사용하며 앞 A class 비트 다음에 오는 8비트를 사용한다.

128~191로 시작한다.

> 1~8(A class 주소), 9~16(B클래스), 17~32(호스트)

<br>

#### C class

소규모 통신망에 사용하며 앞 B class 비트 다음에 오는 8비트를 사용한다.

192~223로 시작한다.

> 1~8(A class 주소), 9~16(B클래스), 17~24(C클래스), 25~32(호스트) 

<br>

#### D class

멀티캐스트용으로 224~239로 시작

> 1~8(A class 주소), 9~16(B클래스), 17~24(C클래스), 25~32(D클래스)

#### E class

실험적 주소로 공용되지 않음.


## 서브넷 마스크 (Subnet Mask)

IP 주소에서 네트워크와 호스트를 구별하기 위해서 사용하며 비트를 1로 채운다.

C클래스의 하위 네트워크를 만들기 위해서 2비트를 추가했다면 서브넷 마스크는  다음과 같다.

>  11111111, 11111111, 11111111, 11000000

<br>

## IPv6