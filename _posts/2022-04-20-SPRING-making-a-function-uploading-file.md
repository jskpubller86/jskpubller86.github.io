---
title : 스프링에서 파일 업로드 기능 구현하기
categories : spring
---


## 1. 개발 환경

구현에 앞서 Springframework-3.0.x와 mariaDB-10.3.x 환경에서 구현했음을 알린다.

## 2. DB 설계

파일을 저장할 때 파일에 대한 정보를 DB에 저장을 해야 한다.

여기서는 DBMS로 MariaDB를 설치하였다. 

테이블 구조는 다음과 같다.

![file table](/assets/images/java/upload-file-table-structure.PNG)

위에 컬럼에서 몇 가지를 살펴보면 `file_org_nm` 컬럼은 파일의 원래 이름을 저장하기 위해서 사용하고 `file_stored_nm`은 파일을 올릴 때 지정한 이름을 저장하기 위해서 사용한다.

예를 들어 `vedio.mp4` 파일을 `myVedio` 이름으로 올린다면 `file_org_nm` 컬럼에는 `vedio`가 저장되고 `file_stored_nm`에는 `myVedio`가 저장된다.

이는 사용자가 원하는 이름으로 파일을 올릴 수 있도록 하기 위해서다.

그리고 `grp_id`는 하나의 게시판에서 여러 파일을 올릴 때 그 파일들이 게시판에 종속됨을 표한하기 위해 사용한다.

예를 들어 아이디가 109번인 게시판에서 여러 개의 파일을 올리면 그 파일들의 `grp_id`에는 109번이 저장된다.

이렇게 구성함으로써 나중에 게시판에서 파일을들 쉽게 불러올 수 있다.

## 3. Entity 설정

Spring에서 Files 테이블의 입출력에 사용될 Entity를 생성한다.

~~~java
@Getter@Setter@ToString
public class FileEntity {
	private long fileId;
	private String fileOrgNm;
	private String fileStoredNm;
	private String filePath;
	private long fileSize;
	private String fileExt;
	private String grpId;
	private Date creDate;
	private Date modDate;
}
~~~

FileEntity는 되도록 Files 테이블과 구조와 호환되도록 구성한다.


## 4. ORM 설정

데이터 모델을 영속해주는 도구에는 여러가지가 있다.

그 중 대표적인 방식은 MyBatis와 JPA가 있다. 

MyBatis는 ORM보다는 쿼리 매핑을 쉽게 해주는 도구에 가깝다. 

JPA가 ORM이다.

대부분 실무에서 MyBatis를 많이 사용하므로 이번에는 JPA를 설정한다. 

JPA도



=끝=













