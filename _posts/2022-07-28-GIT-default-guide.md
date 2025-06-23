---
title :  GIT 기본 가이드
categories : git
---

깃에 기본 흐름에 대해서 살펴보자.


## 1. 프로젝트 파일 생성

형상관리를 할 프로젝트 A를 생성한다.

## 2. 깃 초기화

프로젝트를 git저장소로 만들기 위해서 초기화를 해야한다.

```sh
$ git init
```

초기화를 하면 `.git` 디렉터리가 생성된다.

## 2. 깃 환경설정

git을 적용하기전에 git 환경설정을 확인할 필요가 있다.

`git config`는 이러한 환경정보를 보거나 수정할 수 있게하는 명령이다.

```sh
$ git config list # 환경정보 목록을 볼 수 있다.
## 출력
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
user.name=jskpu
user.email=jskpubller86@gmail.com
##
$ git config get user.name # user.name 정보를 볼 수 있다. 즉 특정 속성을 선택해서 볼 수 있다.
## 출력
jskpu
##
$ git config set user.name aaa # user.name 의 값을 aaa 변경한다.
$ git config get user.name 
## 출력
aaa
##
$ git config --show-origin user.name ## 설정 정보가 시스템, 로컬, 현사용자 중 어디에 속한지 확인
## 출력
file:.git/config        aaa
##
```
user.name과 user.email은 정보는 꼭 설정해주자.

참고로 한번 커밋하면 설정은 변경할 수 없다.

## 3. GITHUB 연결

GITHUB에 A라는 저장소를 만들고 로컬에서 다음 과정을 수행한다.

```sh
$ touch README.md # 파일 생성
$ git add . # 현 디렉터리의 파일 또는 폴더를 stage에 추가
$ git status # stage의 상태를 보여줌.
$ git commit -m "first commit" # 커밋 생성
$ git branch -M main # 마스터 브랜치를 main으로 설정
$ git branch --show-current # 현 브랜치 확인
$ git remote add origin https://github.com/jskpubller86/A.git # origin이름으로 GiTHUB 저장소 주소 생성
$ git remote add second https://github.com/jskpubller86/A.git # second이름으로 GiTHUB 저장소 주소 생성
$ git remote rename second third # 원격지 second 이름을 third로 변경
$ git remote rm third # 원격지 third 삭제
$ git remote -v # 저장된 모든 원격지 저장소를 보여줌
$ git remote show origin # origin 저장소 정보를 상세히 보여준
$ git push -u origin main # -u 옵션은 origin을 기본 원격지로 설정하고 main 브랜치가 없으면 생성, 다음부터 git push로만 수행가능 
```
`[git push -u origin main]` 명령어를 수행하면 SignIn 화면이 나올 것이다.

SignIn하면 GitHub의 A라는 저장소에 파일이 업로드 된 것을 확인할 수 있다.

## 4. 스냅샷과 커밋 그리고 태그

깃은 스냅샷을 커밋한다. 

그래서 작업한 후 변경사항을 스냅샷으로 만들어야 한다.

이를 위해 다음과정을 수행한다.

```sh
$ git status # 스냅샷이 여부 확인
$ git add . # 현재 디렉토리의 모든 변경사항을 스냅샷으로 만든다.
$ git status # 스냅샷이 여부 확인
$ git status -s # 스냅샷 여부를 짧게 확인

```

`git add`로 스냅샷을 만들면 이제 커밋을 할 수 있다.

반대로 스냅샷을 취소할 수 있다. 

```sh
$ git reset # 스냅샷 취소
$ git reset --hard # 스냅샷 취소와 함께 워킹디렉터로 초기화
$ git rm --cached README.md # README.md 파일만 스냅샷에서 제거
$ git rm README.md # README.md 파일만 스냅샷과 워킹디렉터리에서 제거
```

또한 이름도 변경할 수 있다.

```sh
$ git mv README.md README # 파일을 이름을 변경하고 스냅샷에 추가
```

추가로 스냅샷을 생략할 수도 있다.

```sh
$ git commit -a -m "커밋 메시지" # tracked된 파일들만 스냅샷으로 생성
```

기존 커밋에서 추가할 경우 다음을 수행한다.

```sh
$ git commit -m 'initial commit' # 커밋
$ git add forgotten_file # 추가할 스냅샷 생성
$ git commit --amend # 이전 커밋에 추가 (정확히는 동일한 이름으로 새로 만들고 덮어씀)
```

현재 커밋한 내용을 확인하기 위해서는 `show` 또는 `log` 명령어를 사용할 수 있다.

`show`는 현 커밋의 상세한 내용을 보여주고 `log`는 전체 커밋의 간략한 내용을 보여준다.

```sh
$ git show # 최근 커밋의 내용을 보여줌
$ git show 53e36a94b5f5 # 지정한 53e36a94b5f5 리비전의 내용을 보여줌
$ git log --name-status #옵션은 커밋내용에 수정식별자를 추가하여 보여준다. A 추가, M은 수정, D는 삭제를 의미한다.
$ git log --pretty=oneline #한줄로 보여줌
$ git log -p # 변경사항을 상세히 보여줌
$ git log --since=2.weeks # 지정한 날짜 이후의 커밋 보기
$ git log --until="2024-12-31" # 지정한 날짜 이전의 커밋 보기
$ git log --since="2025-06-01" --until="2025-06-03" # 조합해서 보기
$ git log --grep="fix" # 메세지에 fix가 들어간 커밋 보기
$ git log --grep="fix" --ignore-case # 대소문자 무시
$ git log --grep="bug\|error" # 정규식 표현 사용
$ git log -S"password" # 변경 내용에 password가 들어간 커밋 보기
$ git log --author="Han" # 커밋 소유자의 이름이나 메일을 검색해서 보기
$ git log --author="kim" --grep="fix" --all-match # 소유자와 메세지 둘다 만족하는 커밋 보기
$ git log --author="kim" --grep="fix" --all-match # 소유자와 메세지 둘중 하나 만족하는 커밋 보기 
$ git log --oneline --decorate --graph --all # 브랜치 별 분리된 커밋을 보여줌.
```

태그를 이용하면 좀더 쉽게 커밋을 찾을 수 있다.

```sh
$ git tag v1.4-lw # 마지막 커밋에 태그를 추가.
$ git tag v1.3-lw 53e36a9 # 지정한 53e36a9 버전에 태그 추가
$ git tag # 태그 목록을 보여줌
$ git show v1.3-lw # 특정 태그로 내용확인
```

## 5. fetch와 pull 그리고 push

```sh
$ git fetch origin/main  # 원격지 main 브랜치에서  최신 커밋들을 받음
$ git log a..origin/main  #  a브랜치와 origin/main 비교
$ git diff a origin/main	# a와 origin/main의 코드 차이 비교
$ git merge origin/main # origin/main을 현 브랜치에 병합
```

## 6. 비교

커밋을 확인했다면 이제는 비교해야한다.

`READ.md`에 내용을 추가한다.

```
안녕
오랜만이야
반가워
```

그러고 나서 다음 명령어로 확인한다.

```sh
$ git diff
## 출력
diff --git a/README.md b/README.md
index d4f6232..486dfdb 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,3 @@
-안녕
\ No newline at end of file
+안녕
+오랜만이야
+반가워
\ No newline at end of file
```

`git diff`는 현재 작업과 스냅샷을 비교한다. 만약 스냅샷이 없다면 최근 커밋의 스냅샷과 비교한다.

만약 최근 커밋과 스냅샷을 비교하려고 하면 다음과 같이 한다.
```sh
$ git diff --cached # 최근 커밋과 스냅샷(스테이징)을 비교
```
## 7. 브랜치 

브랜치는 작업 영역을 분리한다.
```sh
$ git branch # 브랜치 목록 확인
$ git branch sub # 브랜치로 생성
$ git checkbout sub # sub 브랜치로 변경
$ git checkout -b iss53 # iss53 브랜치를 생성하고 변경
$ git merge sub # sub 브랜치의 커밋들을 병합
$ git branch -d sub # sub 브랜치 삭제
```

## 8. 복구

변경 파일을 마지막 스냅샷으로 복구하려고 하면 다음과 같이 할 수 있다.

```sh
$ git checkout -- CONTRIBUTING.md  #  CONTRIBUTING.md의 마지막 커밋 스냅샷으로 복구
$ git restore . # 현 작업디렉터리를 마지막 커밋상태로 만듬.
```

## 9. 스태시(stash)

스태시는 현 작업상황을 스냅샷으로 만들어 임시 메모리에 저장하는 기능이다.

```sh
$ git stash	추적된 파일의 변경사항만 저장
$ git stash -u 또는 --include-untracked	**추적되지 않은 파일(예: 새로 만든 파일)**도 함께 저장
$ git stash -a 또는 --all	.gitignore된 파일까지 모두 저장
$ git stash list	저장된 stash 목록 확인
$ git stash show	가장 최근 stash 변경 요약
$ git stash show -p	diff까지 확인
$ git stash apply	가장 최근 stash를 적용 (stash는 유지됨)
$ git stash pop	stash를 적용하고 목록에서 제거
$ git stash drop	특정 stash 삭제
$ git stash clear	모든 stash 삭제
```