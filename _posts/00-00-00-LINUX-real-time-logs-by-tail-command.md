---
title : tail 명령어를 이용한 실시간 로그 확인
date: 2025-07-16
categories : linux
---

실무에서 리눅스 서버에 배포된 애플리케이션에 로그가 생성될 때 실시간으로 확인해야 하는 경우가 있다. 

이럴 때는 tail 명령어를 사용하여 모니터링할 수 있으며 다음과 같이 사용한다.

~~~
	$ tail -f {로그파일 이름}
~~~

위와 같이 작성할 경우 지정한 로그파일에 로그가 기록될 때 터미널에서 실시간으로 로그를 확인할 수 있다. 

tail 명령어가 끝 라인부터 출력하므로 최신 로그를 확인할 수 있게 되는 것이다. 

물론 -f 옵션은 필수다. 

이를 응용하여 실시간으로 올라오는 로그 중에 특정한 문자열을 가지고 있는 로그를 확인하고 싶은 경우 다음과 같이 작성할 수 있다.

```
	$ tail -f {파일이름} | grep {찾을 문자열}
```

=끝=