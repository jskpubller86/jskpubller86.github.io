---
title : SQL 트레이스 수집 및 분석
categories : db oracle
---

SQL의 실행계획을 정밀하게 분석하려면 sql trace를 이용해야 한다.

SQL 트레이스르 사용하려면 먼저 활성화를 해야한다.

아래는 현재 세션에만 트레이스를 활성화하는 설정 방법이다.

```sql
alter session set sql_trace = true; // 활성화 
alter session set sql_trace = false; // 비활성화 
```

이후 쿼리 수행한 후에는 생성된 트레이스 파일을 찾아서 확인하면 되는데 파일 경로를 찾는 것에 어려움이 발생할 수 있다. 

이를 위해 경로를 찾는 쿼리 스크립트가 있다. 

아래는 스크립트가 있는 gist 주소이다.

[트레이스 파일 경로 찾는 스크립트](https://gist.github.com/jskpubller86/d215f699c8bc9ed3acce03db35386fe0)


위 스크립트로 찾은 경로로 파일을 열면 아래와 같이 실행 계획이 트레이스되어 있다. 

```txt
PARSING IN CURSOR #140177612354264 len=273 dep=0 uid=5 oct=3 lid=5 tim=1694240705176463 hv=2467177394 ad='7c900ee8' sqlid='dpb7tfa9hw8xk'
select r.value || '/' || lower(t.instance_name) || '_ora_' || ltrim(to_char(p.spid)) || '.trc' trace_file
from v$process p, v$session s, v$parameter r, v$instance t
where p.addr = s.paddr
and r.name = 'user_dump_dest' and s.sid = (select sid from v$mystat where rownum = 1)
END OF STMT
PARSE #140177612354264:c=52007,e=52008,p=0,cr=474,cu=6,mis=1,r=0,dep=0,og=1,plh=1532885003,tim=1694240705176462
EXEC #140177612354264:c=26,e=25,p=0,cr=0,cu=0,mis=0,r=0,dep=0,og=1,plh=1532885003,tim=1694240705176536
FETCH #140177612354264:c=3544,e=3543,p=0,cr=0,cu=0,mis=0,r=1,dep=0,og=1,plh=1532885003,tim=1694240705180126
STAT #140177612354264 id=1 cnt=1 pid=0 pos=1 obj=0 op='HASH JOIN  (cr=0 pr=0 pw=0 time=3510 us cost=1 size=2315 card=1)'
STAT #140177612354264 id=2 cnt=1 pid=1 pos=1 obj=0 op='NESTED LOOPS  (cr=0 pr=0 pw=0 time=3166 us cost=1 size=2269 card=1)'
STAT #140177612354264 id=3 cnt=25 pid=2 pos=1 obj=0 op='NESTED LOOPS  (cr=0 pr=0 pw=0 time=2092 us cost=1 size=2211 card=1)'
```

깊게 공부한 전문가라면 위 내용을 빠르게 분석할 수 있지만 일반 개발자가 분석하기에는 어렵다. 

그래서 위 내용을 보기 쉽게 정리해주는 TKProf 유틸리티가 있다. 

도스 또는 쉘에서 tkprof를 치면 사용법을 확인할 수 있다.

만약 tkprof 명령어를 찾을 수 없다고 오류가 나온다면  


=끝=