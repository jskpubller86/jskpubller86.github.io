# jmeter 사용법

## 1. 설치 환경
window10 x64


## 2. jmeter 다운로드
https://jmeter.apache.org/download_jmeter.cgi 이동

Binaries 섹션에서 apache-jmeter-5.3.zip( 현재 작성일 기준 버전) 다운로드

## 3. java 설치
Apache JMeter 5.3일 경우 java8+ 설치


## 4. jmeter 설치 
다운로드 받은 apache-jmeter-5.3.zip 압축해제

apache-jmeter-5.3\apache-jmeter-5.3\bin 이동

jmeter.bat 실행 


## 5. 테스트를 위한 쓰레드 생성
jmeter는 쓰레드를 이용하여 request를 만든다.

jmeter 화면에서 왼쪽 패널의 Test Plan에서
마우스 오른쪽 버튼을 클릭하여 나오는 Context menu에서 
add > Threads(Users) > Thread Group 선택하여 Thread Group을 생성한다. 

Test Plan > Thread Group이 생성되면 
Thread Group 선택하여 환경 설정을 해주는데 
주요 환경설정은 그림과 같다. 

![jmeter 대체 텍스트](/assets/images/develop/apach-jmeter-0.PNG)

여기서 Thread Properties 를 살펴보면
- Number of Threads (users) : 동시 접속자 수
- Ramp-up period (seconds) : 몇 초 마다 실행할 것인지
- Loop Count : 실행 횟수




