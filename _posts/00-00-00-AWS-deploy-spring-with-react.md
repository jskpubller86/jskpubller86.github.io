---
title : AWS 배포
date : 2025-07-16
categories : aws
---

1. `D:\deploy/spreact` 경로에 디렉터리 생성

2. yarn create react-app  client --template=typescript

3. client 디렉터리로 이동,  yarn start 실행, 실행 확인

4. public, src 폴더 안의 파일 삭제
   
5. 본인 react프로젝트의 public, src 폴더 안의 파일을 가져옴

6. 필요한 패키지 설치

7. vscode 마켓플레이스로 이동, Extension Pack for Java, Gradle Language Support, Lombok Annotations Support for VS Code, ESLint, SpringBoot Extension 설치

8. VScode 검색창에 F1입력, Spring Initializr: Create a Maven Project... 선택,  3.5.3 버전 선택, Java 선택, 본인 프로젝트 패키지명 입력, artifact에 보인 프로젝트명 입력, War 선택, 17 버전 선택, Spring Boot DevTools 입력 및 선택, Spring Web 입력 및 선택, Lombok 입력 및 선택

9. bacend 폴더 생성 및 이동

10. gradle clean build

11. 다시 client로 돌아와서 package.json에서 운영체제 맞는 빌드를 생성, 이때 중요한 것은 bulid 결과물을 spring 프로젝트의 static에 생성되게 하는 것이다.

12. 빌드 스크립트 설정

```json
"scripts" : {
    "build": "react-scripts build && yarn copy:build",
    "build:linux": "react-scripts build  && yarn copy:build:linux", 
    "copy:build": "powershell -Command Copy-Item -Recurse -Force -Path .\\build\\* -Destination ..\\backend\\myictstudy0521\\src\\main\\resources\\static\\",
    "copy:build:linux":"cp -r build/* ../backend/myictstudy0521/src/main/resources/static/"
}
"homepage": "/back", # 스프링의 properties : server.servlet.context-path=/back
```

13. 파일의 경우 파일의 경로 지정

14. 클라이언트의 API 수정

