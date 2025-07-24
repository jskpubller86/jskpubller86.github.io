---
title : 메이븐의 빌드 생명주기
date: 2025-07-16
categories : maven
---

## 빌드 생명주기

메이븐은 빌드 생명주기라는 주요한 개념을 가지고 있고 이 개념은 빌드와 배포 과정을 명확하게 정의하고 있다. 

메이븐 프로젝트를 빌드하기 위해서는 약간의 명령어를 배우는 것이 필요하고 POM은 빌드의 결과물이 여러분이 원하는 형식으로 될 수 있도록 보장할 것이다.

빌드 생명주기는 내부적으로 default, clean 그리고 site가 있다.
default는 배포, clean은 결과물 삭제, site는 웹사이트 생성을 처리한다.

## 빌드 생명주기를 만드는 단계들

빌드 생명주기는 빌드의 각 상황을 나타내는 단계들로 구성되어 있다.

예를 들어 default 생명주기는 다음 단계들로 구성된다.

- validate - 프로젝트의 정보가 유효한지 검사한다.
- compile - 소스코드를 컴파일한다.
- test - 컴파일된 테스트 코드를 실행한다.
- package - jar와 같은 배포 파일로 패키징한다.
- verify - 품질 기준에 부합하는지 검사하기 위해서 통합 테스트를 수행한다.
- install - 로컬 저장소에 패키지를 저장한다.
- deploy - 원격 저장소에 최종 패키지를 복사한다.

이러한 단계들은 defalut 생명주기를 완료하기 위해서 위에서 언급된 순서대로 실행된다.

## 보편적인 명령어 라인 호출

프로젝트의 결과물을 만들기 위해서 단계를 선택해야 한다. 

만약 jar 파일을 만들고 싶다면 package 단계를 실행하고 test를 수행하고 싶다면 test 단계를 실행한다.

만약 무엇을 수행해야 할지 모르겠다면 verify 단계를 호출해라.

```
mvn verify
```

위 명령어는 verfiy 단계를 수행하기 전에 순차적으로 validate, compile, test, package 단계를 실행한다.

이전 단계의 빌드를 지우고 다시 빌드한 후 원격 저장소에 배포하고 싶다면 다음과 같이 수행한다. 

```
mvn clean deploy
```

위 명령어는 멀티 모듈(서브 프로젝트가 있는 환경)에서는 각 서브 프로젝트의 clean 단계와 deploy 단계를 이전 단계를 포함하여 수행한다.

## 플러그인의 목표로 만들어지는 빌드단계

빌드 단계가 빌드 생명주기를 단계를 명확히 정의해 주지만 플러그인의 목표를 이용하여 빌드 생명주기를 이루는 단계를 만들 수 있다. 

이러한 목표는 빌드 단계에 종속되어 수행될 수도 있고 아니면 독립적으로 호출되어 수행될 수도 있다.

다음은 플러그인의 'dependency:copy-dependencies' 목표를 독립적으로 호출한 예이다.

```
mvn clean dependency:copy-dependencies package
```

위 명령어는 clean을 수행한 후 dependency:copy-dependencies 목표를 수행하고 그 다음 package 단계(package 단계를 수행하면 이전 단계들을 포함하여 수행)를 수행한다.

더 나아가 목표는 빌드 단계에 종속될 수 있는데 이러한 목표는 빌드 단계에서 수행될 때 같이 수행된다.

## 명령어에서 보편적으로 호출되지 않는 단계들

하이픈으로 연결된 단계들(pre-*, post-*, 또는 process-*)은 보편적으로 명령어에서 호출되지 않는다. 

만약 하이픈으로 연결된 단계들을 호출하게 되면 어떠한 인스턴스가 대기 상태나 혹은 실행 상태로 남아 있을 수도 있다.

그리고 그러한 상태는 메이븐으로 종료할 수 없을 수도 있다.

예를 들어 integration-test를 명령어로 직접 호출할 경우 tomcat이 실행 상태로 남아 있고 이를 메이븐으로 종료할 수 없는 경우다.

## 빌드 생명주기를 위한 프로젝트 설정

### Packaging

프로젝트를 어떠한 포맷으로 만들기 위해서 \<packaging\> 엘리먼트를 사용한다.

보통 packaging 값은 jar, war, ear 그리고 pom 중에 하나이다.

만약 packaging 값을 지정하지 않으면 기본 값으로 jar가 설정된다.

jar 패키징의 기본 빌드 생명주기는 다음과 같다. 

|Phase|plugin:goal for the jar packaging|
|-----------------|-------------------|
|process-resources|resources:resources|
|compile          |compiler:compile   |
|process-test-resources|resources:testResources|
|test-compile|compiler:testCompile|
|test|surefire:test|
|package|jar:jar|
|install|install:install|
|deploy|deploy:deploy|

위의 기본적인 패키지 이외에 다른 패키지에서는 플러그인이 필요할 수 있다. 

그럴 경우 \<build\> 엘리먼트에 플러그인을 포함시키고 \<extensions\>true\</extensions\>에 명시한다.

### Plugins

플러그인의 목표는 플러그인의 기능을 대표하며 하나 또는 그 이상을 가지고 있다. 

그리고 이러한 목표를 빌드 단계에서 실행시킬 수 있다.

플러그인은 \<build\> 엘리먼트의 \<plugins\> 엘리먼트에 추가한다.

```xml
<plugin>
   <groupId>org.codehaus.modello</groupId>
   <artifactId>modello-maven-plugin</artifactId>
   <version>1.8.1</version>
   <executions>
     <execution>
       <configuration>
         <models>
           <model>src/main/mdo/maven.mdo</model>
         </models>
         <version>4.0.0</version>
       </configuration>
       <goals>
         <goal>java</goal>
       </goals>
     </execution>
   </executions>
 </plugin>
```

위 설정에서 modello:java 목표는 generate-sources 단계에 기본적으로 종속되어 있다.
그렇기에 따로 generate-sources 단계를 명시하지 않았다.

만약 특정 단계에 종속시키고 싶다면 다음과 같이 \<phase\> 엘리먼트를 사용하여 명시한다.

```xml
<plugin>
   <groupId>com.mycompany.example</groupId>
   <artifactId>display-maven-plugin</artifactId>
   <version>1.0</version>
   <executions>
     <execution>
       <phase>process-test-resources</phase>
       <goals>
         <goal>time</goal>
       </goals>
     </execution>
   </executions>
 </plugin>
```



끝.




















































