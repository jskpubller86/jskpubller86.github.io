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

jmeter.bat 또는 ApacheJMeter

## 5. 테스트 플랜 작성
jemeter는 쓰레드를 이용하여 테스트를 실행한다. 

jmeter 화면에서 왼쪽 패널의 Test Plan에서
마우스 오른쪽 버튼을 클릭하여 나오는 Context menu에서 
`add > Threads(Users) > Thread Group` 선택하여 Thread Group을 생성한다. 

`Test Plan > Thread Group`이 생성되면 
Thread Group 선택하여 환경 설정을 해주는데 
주요 환경설정은 그림과 같다.

![jmeter 대체 텍스트](../../../assets/images/develop/apach-jmeter-0.PNG)

1. Name : thread group 이름 
2. Comments : thread group 설명
3. Action to be taken after a Sampler error 
    
    Sampler 즉 테스트 수행시 에러가 발생할 경우 취할 행동
    - continue : 에러가 발생해도 테스트를 수행한다.
    - Start Next Thread Loop : 에러가 발생시 쓰레드의 다음 반복을 시작한다.
    - Stop Thread : 에러가 발생한 thread를 멈춘다. 
    - Stop Test : 테스트를 멈춘다. 
    - Stop Test Now : 테스트를 당장 멈춘다.
4. Thread Properties : thread 설정
   - Number of Threads (users) : 동시 접속자 수
   - Ramp-up period (seconds) : 몇 초 마다 실행할 것인지
   - Loop Count : 실행 횟수
     - Same user on each iteration : 
     - Delay Thread lifetime : 활성화 되어 있으면 Ramp-up period 옵션에 지정한 시간에 Thread를 생성한다. 비활성화 되어 있으면 미리 쓰레드를 생성한 후 정지 상태로 만든 후 Ramp-up period 옵션에 지정한 시간에 쓰레드를 깨운다. 
     - Specify Thread lifetime :

## 6. Sampler 생성
thread를 설정했다면 thread를 이용하여 수행할 Sampler를 작성해야한다. 

생성된 thread group에 오른쪽 마우스 클릭을 하여 contextmenu를 활성하고 
`Add > Sampler` 로 이동한다. 

Sampler에는 여러 종류가 있는데 그 중에서 HTTP Request 선택한다. 
HTTP Request 설정화면은 다음과 같다. 

![jmeter 대체 텍스트](../../../assets/images/develop/apach-jmeter-1.PNG)

옵션은 다음과 같다. 

1. Name
2. Comments
3. Basic : 기본 설정
   - Web Server : 요청을 보낼 웹서버 정보 
     - protocol [http] : 통신 방식
     - Server Name or IP : 서버 주소 
     - Port Number : 서비스 포트 번호
  
   - HTTP Request : 요청 방식
     - content encoding : 인코디 방식 (euc-kr, utf-8, ...)
4. Advanced : 추가 설정 


## 7. 동적인 값을 이용한 테스트
먼저 동적으로 만들 텍스트 파일을 생성한다. 
각각의 인자값은 comma(,)로 구분하고 
각 쓰레드당 할당될 인자값 그룹은 CRLF 로 구분한다. 
동적 파라미터를 담은 텍스트 파일을 만든 후 

Test Plan의 context menu 에서 ADD > Config Element > CSV Data Set Config 선택한 후 환경설정을 한다. 

환경설정 옵션은 다음과 같다. 
1. Name
2. Comments
3. Configure the CSV Data Source
   - filename : 인자 값이 있는 텍스트 파일 경로
   - file encoding : 
   - Variable Names(comma-delimited) : 인자값과 매칭한 변수 이름. 변수 이름은 콤마로 나열 하며 변수를 통해서 동적으로 인자값이 할당된다.
   - Ignore first line (only used if Variable Names is not empty) : 첫 번째 라인을 무시한다. 첫번째 라인에 필드명을 지정했을 경우 사용하면된다. 
   - Delimiter(use "\t" for tab) : 각 인자값을 구분하는 구분자 
   - Allow quoted data : 인자값이 "" 로 감싸져 있을 경우 true
   - Recycle on EOF : 인자값 할당이 끝났을 때 다시 처음부터 인자값 할당을 반복할지 여부
   - Stop thread on EOF : 인자값 할당이 끝났을 때 thread 멈출지 여부 
   - Sharing mode : 인자값 공유 설정
     - All threads : 모든 쓰레드 공유
     - Current thread group : 현재 쓰레드 그룹 공유
     - Current thread : 현재 쓰레드만 공유
4. 























