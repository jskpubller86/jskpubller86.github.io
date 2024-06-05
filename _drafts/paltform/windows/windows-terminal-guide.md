---
title : Window Terminal 툴 사용법
categories : platform windows
---

window terminal을 사용할 경우 터미널을 탭하여 사용할 수 있다. 


## 설치 


윈도우의 마켓 플레이스에서 다운받는다.

![설치화면](/assets/images/window/window-terminal-guide-01.png)

설치 후 열기를 통해 실행한다. 

<br>

## ssh 명령어 

터미널을 명령줄에 ssh 명령를 추가하고 즐겨찾기로 등록하면 나중에 탭을 통해 열때 빠르게 접속할 수 있다.

명령줄에 실행 명령어를 추가하기 위해서는 앞에 wt를 붙여야 한다.

다음은 윈도우 파워셸을 입력하고 ssh 접속을 하는 명령줄이다.

```
wt %SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe ; ssh ct2user@21.215.169.87 -p 22 -i "C:\Users\emotion-jsk\Desktop\서버 정보\azure.pem"
```

![실행화면](/assets/images/window/window-terminal-guide-01.png)
  

