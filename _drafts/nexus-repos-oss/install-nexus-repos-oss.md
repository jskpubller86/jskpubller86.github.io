---
title: 넥서스 레파지토리 설치하기
categories : sql
---

# 넥서스 설치하기

먼저 아래의 링크로 이동한다.

<https://www.sonatype.com/products/repository-oss-download>

다음 화면에 입력란에 다운로드에 필요한 정보를 입력한다.

이메일 입력 폼에는 gmail, naver 등 개인 이메일을 제외한 회사 이메일을 입력한다.

![다운로드 폼](/assets/images/nexus-repos-oss/input-download.png)

입력 후 다운로드를 받고 압축파일을 푼다.

압축을 푼 폴더의 이름일 nexus-3.42.0.-01-win64 이면 nexus-3.42.0.-01-win64 > nexus-3.42.0-01 > bin 경로를 관리자 권한으로 CMD 창을 연다.

CMD 창에서 다음의 명령어를 실행한다. 

```
$> nexus.exe/install
// nexus 설치

$> nexus.exe/start
// nexus 실행
```

