---
title : 리눅스의 기본 명령어
categories : linux
---

리눅스에서 제공하는 기본 명령어에 대해서 알아보겠다. 

## 1. ls 커맨드

List의 약자로 파일 목록을 나열한다.

[사용예]

```bash
$ ls # 현재 디렉터리의 파일 목록
$ ls /etc/systemd # /etc/systemd 디렉터리의 목록
$ ls -a # 현재 디렉터리의 목록(숨김 파일 포함)
$ ls -l # 현재 디렉터리의 목록을 자세히 보여줌(영문자 엘)
$ ls *.conf # 확장자가 conf인 목록을 보여줌
$ ls -l /etc/systemd/b* # /etc/systemd 디렉터리에 있는 목록 중 앞 글자가 'b'인 것의 목록을 자세히 보여줌
```

## 2. cd

Change Directory의 약자로 디렉터리를 이동하는 명령이다.

[사용 예]

```bash
$ cd # 현재 사용자의 홈 디렉터리로 이동. 만약 현재 사용자가 root면 '/root' 디렉터리로 이동
$ cd ~ubuntu # ubuntu 사용자의 홈 디렉터리로 이동
$ cd .. # 바로 상위의 디렉터리로 이동. '..'은 현 디렉터리의 부모 디렉터리를 의미(예를 들어, 현재 디렉터리가 /etc/systemd라면, 바로 상위인 /etc 디렉터리로 이동)
$ cd /etc/systemd # /etc/systemd 디렉터리로 이동(절대 경로)
$ cd ../etc/systemd # 상대 경로로 이동. 현재 디렉터리의 상위('...')로 이동한 후, 다시 /etc/systemd로 이동
```

## 3. pwd

Print Working Directory의 약자로 현재 디렉터리의 전체 경로를 화면에 보여준다.

```bash
$ pwd # 현재 작업 중인 디렉터리의 경로 출력
```

## 4. rm

ReMove의 약자로 파일이나 디렉터리를 삭제한다. 삭제할 때는 현재 사용자가 파일이나 디렉터리를 삭제할 권한이 있어야 한다. 단, root 사용자는 모든 권한이 있으므로 이 명령에 제약이 없다.

[사용 예]

```bash
$ rm abc.txt # 해당 파일을 삭제(내부적으로 'rm -f'로 연결됨)
$ rm -i abc.txt # 삭제 시 정말 삭제할 지 확인하는 메시지가 나옴
$ rm -f abc.txt # 삭제 시 확인하지 않고 바로 삭제함(f는 Force의 약자)
$ rm -r abc # abc 디렉터리와 그 아래에 있는 하위 디렉터리를 강제로 전부 삭제함. 편리하지만 상당히 주의해서 사용해야 함(r은 Recursive의 약자)
```

## 5. cp

Copy의 약자로 파일이나 디렉터리를 복사한다. 새로 복사한 파일은 복사한 사용자의 소유가 된다. 그러므로 명령을 실행하는 사용자는 해당 파일의 읽기 권한이 필요하다. (권한은 잠시 후에 다룬다.)

[사용 예]

```bash
$ cp abc.txt cba.txt # abc.txt를 cba.txt라는 이름으로 바꿔서 복사
$ cp -r abc cba # 디렉터리 복사. abc 디렉터리를 cba 디렉터리로 복사
```

## 6. touch

크기가 0인 새 파일을 생성하거나, 이미 파일이 존재한다면 파일의 최종 수정 시간을 변경한다.

[사용 예]

```bash
$ touch abc.txt # 파일이 없을 경우엔 abc.txt라는 빈 파일을 생성하고, abc.txt가 있을 경우엔 파일의 최종 수정 시간을 현재 시각으로 변경
```

## 7. mv

Move의 약자로 파일이나 디렉터리의 이름을 변경하거나, 다른 디렉터리로 옮길 때 사용한다.

[사용 예]

```bash
$ mv abc.txt aaa.txt # abc 이름을 aaa 이름으로 변경
$ mv abc.txt /etc/systemd/ # abc.txt를 /etc/systemd/ 디렉터리로 이동
$ mv aaa.txt bbb.txt ccc.txt ddd # aaa, bbb, ccc 파일을 '/ddd' 디렉터리로 이동
$ mv abc.txt www.txt # abc.txt의 이름을 www.txt로 변경해서 이동
```

## 8. mkdir

Make Directory의 약자로 새로운 디렉터리를 생성한다. 생성된 디렉터리는 명령을 실행한 소유자가 된다.

[사용 예]

```bash
$ mkdir abc # 현재 디렉터리 아래에 '/abc'라는 디렉터리 생성
$ mkdir -p /def/fgh # /def/fgh 디렉터리를 생성하는데, 만약 '/fgh'의 부모 디렉터리인 '/def' 디렉터리가 없다면 자동 생성(p는 Parents의 약자)
```

## 9. rmdir

Remove Directory의 약자로 디렉터리를 삭제한다. 해당 디렉터리의 삭제 권한이 있어야 하며, 디렉터리는 비어 있어야 한다. 파일이 들어 있는 디렉터리를 삭제하려면 'rm -r'을 실행해야 한다.

[사용 예]

```bash
$ rmdir abc # '/abc' 디렉터리를 삭제
```

## 10. cat

cat 명령어는 **파일 내용을 출력하거나 결합(concatenate)**하는 데 사용되는 아주 기본적이고 자주 쓰이는 명령어이다. 이름도 "concatenate(연결하다)"에서 왔다.

[사용 예]

```bash
$ cat filename.txt  # filename.txt 파일 내용을 보여줌
$ cat a.txt b.txt  # a.txt와 b.txt를 연결해서 파일의 내용을 화면에 보여줌
$ cat > newfile.txt # 사용자에게 내용을 입력받고 ctrl+D로 작업을 끝내면 newfile.txt에 새로 덮어쓴다.
$ cat file1.txt file2.txt > merged.txt # 두 파일을 합쳐서 merged.txt파일에 새로 저장한다.
$ cat >> myfile.txt # myfile.txt의 기존 내용에 이어서 추가로 입력한다.
$ cat -n file.txt # 줄번호 붙여서 출력
## 출력 ##
1 첫번째
2 두번째
3
4 세번째
#######
$ cat -b file.txt # d옵션은 빈줄을 제외하고 줄번호를 붙여 출력한다.
## 출력 ##
1 첫번째
2 두번째

3 세번째
#######
```

## 11. hsead, tail

텍스트 형식으로 작성된 파일의 앞 10행 또는 마지막 10행만 화면에 출력한다.

[사용 예]

```bash
$ head /etc/systemd/bootchart.conf # 해당 파일의 앞 10행을 화면에 출력
$ head -3 /etc/systemd/bootchart.conf # 앞 3행만 화면에 출력
$ head -5 /etc/systemd/bootchart.conf # 마지막 5행만 화면에 출력
```

## 12. more

텍스트 형식으로 작성된 파일을 페이지 단위로 화면에 출력한다. [space bar]를 누르면 다음 페이지로 이동하며, [B]를 누르면 앞 페이지로 이동한다. [Q]를 누르면 종료한다.

[사용 예]

```bash
$ more /etc/systemd/systemd.conf
$ more +10 /etc/systemd/systemd.conf # 10행부터 출력
```

## 13. less

more 명령어와 용도가 비슷하지만 기능이 더 확장되어 있다. more 명령에서 사용하는 키도 사용할 수 있으며, 추가로 화살표 키나 pageup, pagedown도 사용할 수 있다.

[사용 예]

```bash
$ less /etc/systemd/system.conf
$ less +10 /etc/systemd/system.conf #  10행부터 출력
```

## 14. file

해당 파일이 어떤 종류의 파일인지를 표시해준다.

[사용 예]

```bash
$ file /etc/systemd/system.conf # system.conf는 텍스트 파일이므로 아스키 파일(ASCII)로 표시됨
$ file /bin/gzip # gzip은 실행 파일이므로 'ELF 64-bit LSB executable' 파일로 표시됨
```

## 15. zip 

리눅스에서 zip 명령어는 파일이나 디렉터리를 **압축(zip 파일 생성)**하는 데 사용된다. 사용법은 간단하면서도 유용한 옵션이 많다.

```bash
$ zip [옵션] 압축파일이름.zip 압축할파일들...
```

```bash
$ zip archive.zip file.txt # archive.zip으로 file.txt파일을 압축함
$ zip archive file.txt # 압축파일의 확장자를 생략할 수도 있음
$ zip archive.zip file1.txt file2.txt file3.txt # 여러 파일을 하나로 압축
$ zip -r archive.zip myfolder/ # 디렉터리 통째로 압축
$ zip -9 archive.zip file.txt # 최고 압축률
$ zip -0 archive.zip file.txt # 압축 안 함 (단순 저장)
$ zip archive.zip newfile.txt # 기존 archive.zip이 있다면 newfile.txt를 거기에 추가
$ zip archive.zip *.txt # 현재 디렉터리의 .txt 파일 모두 압축
$ zip -e archive.zip file.txt # 압축시 비밀번호를 설정한다.
$ zip archive.zip * -x "*.log" "*.tmp" # *.log, *.tmp 파일은 제외하고 압축
$ zip -d archive.zip file.txt # archive.zip에서 file.txt 제거
$ zip -r archive.zip .[!.]* * # 현재 디렉터리의 숨김 파일 포함 전체 압축
$ zip archive.zip -@ < filelist.txt # filelist.txt에 파일 이름을 줄 단위로 적어두면 그 목록대로 압축함 : filelist.txt에는 다음과 같이 명시되어 있음
## filelist.txt
file1.txt
file2.txt
mydir/file3.txt
###
$ zip -m archive.zip file1.txt file2.txt # file1.txt, file2.txt를 압축하고 원본 파일 삭제
```

## 16. unzip

압축을 풀 때는 unzip 명령어 사용

```bash
$ unzip archive.zip # 압축해제
$ unzip archive.zip && rm archive.zip # 압축해제 후 zip파일 삭제
$ unzip archive.zip && mv archive archive2 # 압축해제 후 폴더이름 변경
```

## 17. tar

tar 명령어는 파일 및 디렉토리를 아카이브(묶기) 하고, 압축하거나 압축 해제할 때 사용한다.

```bash
tar [옵션] [아카이브파일명] [대상파일/디렉토리] # 기본틀
```

[ 자주 사용하는 옵션 정리 ]

| 옵션   | 의미                      |
| ---- | ----------------------- |
| `-c` | 아카이브 파일 생성 (create)     |
| `-x` | 아카이브 파일 해제 (extract)    |
| `-v` | 처리되는 파일 이름 출력 (verbose) |
| `-f` | 아카이브 파일 이름 지정 (file)    |
| `-z` | gzip 압축/해제 (gzip 사용 시)  |
| `-j` | bzip2 압축/해제             |
| `-J` | xz 압축/해제                |


[ 사용 예시 ]

```bash
tar -cvf archive.tar mydir/  # 디렉토리 묶기 (압축 없이)
tar -czvf archive.tar.gz mydir/ # 17.2.2. gzip으로 압축
tar -xzvf archive.tar.gz  # 압축 해제 (gzip)
tar -xvf archive.tar # .tar 파일 해제 (압축 없음)
tar -xzvf archive.tar.gz -C /path/to/extract/ # 디렉토리 묶기 (압축 없이)
tar -tvf archive.tar.gz # 내용 목록만 보기 (실제 해제 없이)
```

## 18. clear

현재 사용 중인 터미널 화면을 깨끗하게 지워준다.

[사용 예]

```
# clear
```

끝.