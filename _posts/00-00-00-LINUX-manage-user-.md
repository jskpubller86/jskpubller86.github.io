---
title : 리눅스에서 사용자 관리하는 방법
date: 2025-07-16
categories : linux
---

리눅스에서 사용자를 관리하는 방법에 대해서 알아보겠다.

참고로 명령어를 수행한 후에는 사용자 정보가 있는 /etc/passwd와 그룹정보가 있는 /etc/group을 항상 확인해야 한다.

또한 root권한을 가지고 있어야 사용자를 관리할 수 있다.

## 사용자 추가

리눅스에서는 adduser를 사용하여 새로운 사용자를 추가할 수 있다.

```sh
adduser newuser2
## 출력
Adding user `newuser2' ...
Adding new group `newuser2' (1001) ... # 그룹을 지정하지 않더라도 사용자 대응하는 그룹이 자동으로 생성된다.
Adding new user `newuser2' (1001) with group `newuser2' ...
Creating home directory `/home/newuser2' ...
Copying files from `/etc/skel' ...
New password: 
Retype new password: 
passwd: password updated successfully
Changing the user information for newuser2
Enter the new value, or press ENTER for the default
        Full Name []: 
        Room Number []: 
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
....
```

adduser로 새로운 사용자 이름을 입력하면 이어서 비밀번호와 부가 정보를 입력받게 된다.

adduser 명령어에는 마찬가지로 여러 옵션이 존재하는데 그 중에서 몇가지 중요한 옵션을 살표보면 다음과 같다. 

```sh
adduser --uid 1111 newuser2 # newuser2 사용자를 생성하면서, 사용자 ID를 1111 지정한다.
adduser --gid 1000 newuser3 # newuser3 사용자를 생성하면서, 그룹 ID가 1000인 그룹에 newuser3 사용자를 포함시킨다.
adduser --home /newhome newuser4 # newuser4 사용자를 생성하면서, 홈 디렉터리를 /newhome으로 지정한다.
adduser --shell /bin/csh newuser5 # newuser5 사용자를 생성하면서, 기본 셸을 /bin/csh로 지정
cat /etc/passwd | grep ictman # 생성된 사용자의 정보를 확인하는 명령어
## 사용자 정보 출력
ictman:x:1002:1002:,,,:/home/ictman:/bin/bash
```
[사용자 정보 출력내용 설명]

| 번호 | 값              | 설명                                               |
| -- | -------------- | ------------------------------------------------ |
| 1  | `ictman`       | 사용자 이름 (username)                                |
| 2  | `x`            | 암호는 `/etc/shadow`에 저장됨을 의미 (보안을 위해 `x`로 대체됨)     |
| 3  | `1002`         | 사용자 ID (UID) – 시스템에서 이 사용자를 고유하게 식별              |
| 4  | `1002`         | 기본 그룹 ID (GID) – `/etc/group`에 있는 그룹 ID와 연관      |
| 5  | `,,,`          | GECOS 필드 – 사용자에 대한 설명 정보 (실명, 전화번호 등). 여기선 비어 있음 |
| 6  | `/home/ictman` | 홈 디렉토리 경로 – 로그인 시 진입하는 디렉토리                      |
| 7  | `/bin/bash`    | 로그인 시 사용할 셸 – 사용자가 명령어를 입력할 수 있는 인터페이스           |

현재 활성화된 사용자가 누구인지 확인하기 위해서 다음의 명령어를 수행한다.

```sh
whoami
# 출력
ictother
```

## 사용자 전환

사용자를 전환하기 위해서 다음의 명령어를 수행한다.

```sh
su [사용자이름] # 기본틀
su john  # john으로 변경, 이전 사용자의 로그인 환경을 유지
su  # 뒤에 아무것도 명시하지 않으면 su root와 동일
su - john # john의 로그인 환경까지 변경하여 전환, 이전 사용자는 로그아웃되지 않는다.
```

## 사용자 비밀번호 변경

사용자의 비밀번호는 passwd 명령어를 사용한다. 

```sh
passwd newuser1 # newuser1 비밀번호를 변경
```

## 사용자 속성 변경

사용자의 그룹, 기본 셸 등을 변경은 usermod를 사용한다.

```sh
usermod --shell /bin/csh newuser1 # newuser1 사용자의 기본 셸을 /bin/csh로 변경
usermod --groups ubuntu newuser1 # newuser1 사용자의 보조그룹에 ubuntu 그룹을 추가
```

## 사용자 삭제

사용자를 삭제할 경우 userdel을 사용한다.

```sh
userdel newuser2 # newuser2 사용자를 삭제한다. 단, 홈 디렉터리는 삭제되지 않는다.
userdel -r newuser3 # newuser3 사용자를 삭제하면서 홈 디렉터리까지 삭제한다.
```

## 사용자의 암호를 주기적으로 변경하도록 설정

정보보안을 위해서 정기적으로 사용자의 비밀번호를 변경하도록 해야 하는 경우가 있다. 

이런 경우를 위해서 change 명령어를 사용하면 비밀번호 사용기간을 지정할 수 있다.

```sh
chage newuser1 # newuser1 사용자의 새로운 정보를 입력받는다.
chage -l newuser1 # newuser1 사용자에 설정된 사항을 확인
chage -m 2 newuser1 # newuser1 사용자에 설정한 암호를 사용해야 하는 최소 일자(즉, 변경 후 최소 2일은 사용해야 함)
chage -M 30 newuser1 # newuser1 사용자에 설정한 암호를 사용할 수 있는 최대 일자(즉, 변경 후 최대 30일까지 사용할 수 있음)
chage -E 2023/12/12 newuser1 # newuser1 사용자에 설정한 암호가 만료되는 날짜(즉, 2023/12/12까지만 사용할 수 있음)
chage -W 10 newuser1 # newuser1 사용자에 설정한 암호가 만료되기 전에 경고하는 기간, 지정하지 않았을 경우 기본 값은 7일(즉, 암호가 만료되기 10일 전부터 경고 메시지가 나감)
```

`chage -l ictman`을 수행하면 다음의 형태로 출력된다.

```sh
chage -l ictman
# 출력
Last password change                                    : May 28, 2025
Password expires                                        : never
Password inactive                                       : never
Account expires                                         : never
Minimum number of days between password change          : 0
Maximum number of days between password change          : 99999
Number of days of warning before password expires       : 7
```

[ 출력 설명 ]

| 항목                                                            | 해석                                             |
| ------------------------------------------------------------- | ---------------------------------------------- |
| **Last password change**<br>`May 28, 2025`                    | 마지막으로 비밀번호를 변경한 날짜는 **2025년 5월 28일**이다.        |
| **Password expires**<br>`never`                               | 비밀번호는 **만료되지 않음**. 즉, 비밀번호를 계속 바꾸지 않아도 됨.      |
| **Password inactive**<br>`never`                              | 비밀번호가 만료된 후에도 계정은 **비활성화되지 않음**. 즉, 계속 로그인 가능. |
| **Account expires**<br>`never`                                | 계정 자체의 **만료일이 설정되어 있지 않음**. 즉, 영구적으로 사용 가능.    |
| **Minimum number of days between password change**<br>`0`     | 비밀번호를 바꾼 뒤, **즉시 다시 변경 가능**함. (최소 보존일 0일)      |
| **Maximum number of days between password change**<br>`99999` | 비밀번호를 최대 **99999일 동안 유지 가능**. 사실상 **무제한**.     |
| **Number of days of warning before password expires**<br>`7`  | 비밀번호 만료 7일 전에 **경고 메시지**가 뜬다. (만약 만료 설정 시)     |


## 사용자가 소속된 그룹 확인

사용자가 소속된 그룹을 확인하는 경우네는 groups 명령어를 사용할 수 있다.

```sh
groups # 현재 사용자가 소속된 그룹을 보여줌
groups newuser1 # newuser1 사용자가 소속된 그룹을 보여줌
```

## 새로운 그룹을 생성

새로운 그룹을 생성할 경우 groupadd 명령어를 사용한다. 

```sh
groupadd newgroup1 # newgroup1이라는 그룹을 생성
groupadd --gid 2222 newgroup2 # newgroup2이라는 그룹을 생성하면서 그룹 ID를 2222로 지정한다.
```

## 그룹의 속성 변경

그룹의 속성을 변경할 경우 groupmod 명령어를 사용한다.

```sh
groupmod --new-name mygroup1 newgroup1 # newgroup1 그룹의 이름을 mygroup1로 변경
```

## 그룹 삭제

그룹을 삭제할 경우 groupdel 명령어를 사용한다.

```sh
groupdel newgroup2 # newgroup2 그룹을 삭제(단, 해당 그룹을 주요 그룹으로 지정한 사용자가 없어야 함)
```

## 그룹 암호 설정 및 관리

그룹 암호를 설정하거나 관리하기 위해서 gpasswd 명령어를 사용한다.

```sh
gpasswd mygroup1 # mygroup1 그룹의 암호를 지정
gpasswd -A newuser1 mygroup1 # newuser1 사용자를  mygroup1 그룹의 관리자로 지정
gpasswd -a newuser4 mygroup1 # newuser4 사용자를  mygroup1 그룹의 사용자로 추가
gpasswd -d newuser4 mygroup1 # newuser4 사용자를  mygroup1 그룹의 사용자에서 제거
```

끝.
