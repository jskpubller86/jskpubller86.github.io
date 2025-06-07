---
title : 보안 솔루션
categories : theory
---

## 1. 방화벽(Firewall)

내부 보안 정책을 만족하는 트래픽만 통과할 수 있다.

내부 네트워크와 외부 네트워크 사이에 존재한다.

```
[외부 네트워크(인터넷)] + [방화벽] + [내부 네트워크]
```

침입 차단 정책과 이를 지원하는 하드웨어 및 소프트웨어를 제공한다.

내부에서 외부 네트워크로 나가는 패킷은 통과시키므로 내부 사용자에 대한 보안은 방어하지 못한다.

### 1.1. 방화벽의 유형

#### 1.1.1. 패킷 필터링(Packet Filtering)

패킷의 출발지 및 목적지 IP 주소, 서비스의 포트 번호 등을 이용한 접속제어를 수행한다.

파일에 대한 분석은 불가능하다.

OSI 참조 모델 3,4계층에 대한 제어를 하므로 속도가 빠르다.

#### 1.1.2. 상태 검사(Stateful Inspection)

[개념이 어렵다..........보류]

#### 1.1.3. 응용 레벨 게이트웨이(Application Level Gateway)

OSI 참조 모델 중 7계층(응용계층)에서 트래픽을 감시하는 방법이다.

응용계층에서 실행되기 때문에 보안 솔루션 중 속도가 가장 느리며 대표적인 구현형태로는 Proxy 서버가 있다.

#### 1.1.4. 회선 레벨 게이트웨이(Circuit Level Gateway)

OSI 참조 모델 중에 5계층(세션계층)에서 감시하는 방법이다.




## 2. 웹 방화벽(Web Firewall)



## 3. IDS(Intrusion Detection System) 침입 탐지 시스템

## 4. IPS(Intrusion Prevention System) 침입 방지 시스템

## 5. DMZ(DeMilitarized Zone) 비무장 지대

## 6. NAC(Network Access Control) 네트워크 접근 제어
 
## 7. DLP(Data Loss PreventIon)

## 8. ESM(Enterprise Security Management) 통합 보안 관리

## 9. VPN(Virtual Private Network) 가상 사설망
