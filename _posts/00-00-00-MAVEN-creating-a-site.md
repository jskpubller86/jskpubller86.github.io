---
title : 메이븐에서 사이트 만들기
date: 2025-07-16
categories : maven
---

프로젝트를 패키지화 한 후 배포했을 때 프로젝트 설명이 필요할 수 있다. 

이때 메이븐에서는 이러한 가이든 문서를 생성할 수 있도록 사이트 기능을 제공한다.

## 컨텐츠 생성

사이트를 생성하기 위해서는 먼저 문서를 작성해야 한다. 

문서는 ${project.basedir}/src/site를 기준으로 작성하며 site 디렉터리에는 site.xml이 있어야 한다.

다음은 문서로 활용될 수 있는 유형을 디렉터리로 구분해 놓은 모습이다.

```
+- src/
   +- site/
      +- apt/
      |  +- index.apt
      !
      +- markdown/
      |  +- content.md
      |
      +- fml/
      |  +- general.fml
      |  +- faq.fml
      |
      +- xdoc/
      |  +- other.xml
      |
      +- site.xml
```

사용할 수 있는 문서의 유형을 살펴보면 다음과 같다. 

- apt : "Almost Plain Text"의 약자로 간단하게 텍스트를 작상할 수 있는 유형이다.
- markdown : 잘 알려진 마크다운 유형이다.
- fml : FAQ 유형이다.
- xdoc : 작은 크기의 xml 문서이다.

사용할 수 있는 다른 문서 유형들이 있지만 위 4가지 유형이 가장 대표적이다.


## 룩앤필 사용자 맞춤화

사이트의 스킨을 변경할 수 있다. 

아래 링크에서 확인한다.

https://maven.apache.org/skins/


## 사이트 생성

다음 명령어로 빠르게 생성할 수 있다.

```
mvn site
```

위 명령을 실행하면 기본적으로 target/site/..에 생성된다. 

## 사이트 배포

### 전통적인 사이트 배포

사이트를 배포하기 위해서 배포 위치를 지정해야 한다.

pom.xml에 다음과 같이 지정할 수 있다.

```xml
<project>
  ...
  <distributionManagement>
    <site>
      <id>website</id>
      <url>scp://www.mycompany.com/www/docs/project/</url>
    </site>
  </distributionManagement>
  ...
</project>
```

아이디는 저장소를 식별한다. 
해당 아이디는 settings.xml에 아이디와 함께 주소 및 인증정보가 정의되어 있다.

url은 배포 위치를 설정한다.

이제 다음 명령어로 사이트를 배포할 수 있다.

```
mvn site-deploy
```

### GitHub Pages, Apache svnpubsub/gitpubsub 배포


GitHub Pages, Apache svnpubsub/gitpubsub 에서 commit이 완료될 경우 
Maven SCM Publish Plugin을 이용하여 사이트를 배포할 수 있다.

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-scm-publish-plugin</artifactId>
    <version>3.1.0</version>
    <configuration>
      <pubScmUrl>${project.scm.developerConnection}</pubScmUrl>
      <scmBranch>gh-pages</scmBranch>
    </configuration>
</plugin>
```

배포는 두 단계로 이루어진다.

1. site 단계에 의한 준비
2. 준비된 사이트를 배포

## 사이트 명세서

site.xml에 사이트 구조를 명시할 수 있다.

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<project xmlns="http://maven.apache.org/DECORATION/1.8.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/DECORATION/1.8.0 https://maven.apache.org/xsd/decoration-1.8.0.xsd"
  name="Maven">
  <bannerLeft>
    <name>Maven</name>
    <src>https://maven.apache.org/images/apache-maven-project.png</src>
    <href>https://maven.apache.org/</href>
  </bannerLeft>
  <bannerRight>
    <src>https://maven.apache.org/images/maven-small.gif</src>
  </bannerRight>
 
  <body>
    <links>
      <item name="Apache" href="http://www.apache.org/" />
      <item name="Maven 1.x" href="https://maven.apache.org/maven-1.x/"/>
      <item name="Maven 2" href="https://maven.apache.org/"/>
    </links>
 
    <menu name="Maven 2.0">
      <item name="Introduction" href="index.html"/>
      <item name="Download" href="download.html"/>
      <item name="Release Notes" href="release-notes.html" />
      <item name="General Information" href="about.html"/>
      <item name="For Maven 1.x Users" href="maven1.html"/>
      <item name="Road Map" href="roadmap.html" />
    </menu>
 
    <menu ref="reports"/>
 
    ...
  </body>
</project>
```

자세한 내용은 아래 링크를 참고한다.

https://maven.apache.org/plugins/maven-site-plugin/examples/sitedescriptor.html


## 외부 자원 추가

stie/resources 디렉터리에는 어떠한 자원도 추가할 수 있다. 

보통 css와 image 파일을 추가한다. 

구조는 다음과 같다. 

```
+- src/
   +- site/
      +- resources/
         +- css/
         |  +- site.css
         |
         +- images/
            +- pic1.jpg
```

## 보고서 설정

메이븐은 현재 프로젝트의 상태를 보여주기 위해서 사이트에 몇가지 보고서를 추가할 수 있다.

이러한 보고서들은 플러그인을 통해서 얻을 수 있다.

보고서는 POM의 정보를 통해 사용할 수 있다.

기본적으로 제공되는 것은 다음과 같다. 

- Dependencies Report
- Mailing Lists
- Continuous Integration
- Source Repository
- Issue Tracking
- Project Team
- License

사이트에 보고서를 추가하기 위해서 \<reporting\> 엘리먼트에 플러그인을 추가해야 한다.

다음 예제는 POM에 플러그인을 어떻게 설정하는지 보여준다.

```xml
<project>
  ...
  <reporting>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-project-info-reports-plugin</artifactId>
        <version>2.8</version><!-- define version here if not already defined in build/plugins or build/pluginManagement -->
      </plugin>
    </plugins>
  </reporting>
  ...
</project>
```

위 예제는 만약 당신이 site.xml에 \<menu ref="reports"\/> 태그를 포함했다면 그 메뉴에서 플러그인에 의해 생성된 목록을 보여줄 것이다.

빌드와 보고서 둘다에 플러그인을 추가할 경우 build/plugins의 버전이 사용되기 때문에 보고서에 사용되는 플러그인 버전을 명시할 필요가 없다.

## 국제화

국제화는 설정하는 것은 간단하다.

다음은 국제화를 여러 개 추가한 예제이다.

```xml
<project>
  ...
  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-site-plugin</artifactId>
        <version>3.4</version>
        <configuration>
          <locales>en,fr</locales>
        </configuration>
      </plugin>
    </plugins>
  </build>
  ...
</project>
```

위 예제는 영어와 프랑스 버전으로 사이트를 생성한다.

만약 현 지역이 영어권이라면 en 버전의 사이트는 루트에 생성되고 fr은 fr/ 서브 디렉터리에 생성된다.


다음은 생성된 구조이다.

```
+- src/
   +- site/
      +- apt/
      |  +- index.apt     (Default version)
      |
      +- fr/
      |  +- apt/
      |     +- index.apt  (French version)
      |
      +- site.xml         (Default site descriptor)
      +- site_fr.xml      (French site descriptor)
```

descript를 이용하면 번역된 사이트를 독립적으로 변형할 수 있다.

끝.























































