# 오라클 외부 접속 방법
 
게스트에 오라클 XE를 설치한 후 윈도우 방화벽 인바운드 규칙에서 오라클 서비스 포트를 허용하고 호스트에서 sqldeveloper 툴을 이용하여 게스트에 설치된 오라클에 접속을 시도하면 무한정 기다리게 되는 경우가 있다. 

접속을 취소하면 `Socket read interrupted, Authentication lapse 0ms` 라는 상태 메시지를 받게 되는데 이는 해당 아이피에 접속이 허용되지 않았기 때문이다. 

이때는 게스트에 설치된 오라클에 아이피 접속을 허용시켜줘야 한다. 

먼저 오라클을 중지한다. 

~~~
lsnrctl stop
~~~

윈도우 10 기준으로 `C:\app\[userName]\product\18.0.0\dbhomeXE\network\admin` 으로 이동하면 listener.ora, tnsnaems.ora  파일이 있다. 

이 두 파일을 열어보면 각각의 파일에서 해당 부분을 찾을 수 있다. 
~~~
# listener.ora
LISTNER = 
(DESCRPTION LIST =
    (DESCRIPTION =
        (ADDRESS = ( PROTOCOL = TCP)(HOST =DESKTOP-54SFU62)(PORT =1521))
        (ADDRESS = (PROTOCOL =IPC)(KEY = EXTPROC1521))
     )
)

# tnsnames.ora
XE = 
    (DESCRIPTION = 
        (ADDRESS = (PROTOCOL = TCP) (HOST = DESKTOP-54SFU62)(PORT = 1521))
        (CONNECT_DATA = 
            (SERVER = DEDICATED)
            (SERVICE_NAME = XE)
        )
    )

LISTENER_XE = 
    (ADDRESS = (PROTOCOL = TCP)(HOST = DESKTOP-54SFU62)(PORT =1521))
~~~

위 두 파일에 HOST 부분을 보면 모두 아이피가 아닌 컴퓨터 이름으로 되어 있는 것을 확인할 수 있다. 

이 부분을 게스트의 아이피 주소로 변경하고 저장한 후 아래의 명령으로 오라클을 시작해 준다. 

~~~
lsnrctl start 
~~~

그 후 호스트에서 게스트에 설치된 오라클에 접속을 시도하면 성공하게 된다. 
