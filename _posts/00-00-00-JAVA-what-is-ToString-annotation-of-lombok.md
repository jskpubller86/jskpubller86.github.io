---
title : lombok에서 @ToString이란?
date: 2025-07-16
categories : java 
---

JAVA 웹 애플리케이션 lombok 라이브러리는 자바 클래스를 만들 때 자주 사용되는 getter와 equlas 등의 메서드들을 자동으로 만들어 주는 편리한 도구이다.

이러한 lombok 라이브러리에는 @ToString 어노테이션이 있는데 이것의 쓰임새에 대해서 알아보자.

아래는 FileEntity 클래를 @ToString 어노테이션을 적용한 모습은 다음과 같다.

~~~java
@ToString
public class FileEntity {
	private long fileId;
	private String fileOrgNm;
	private String fileStoredNm;
	private String filePathNm;
	private long fileSize;
	private String fileExt;
	private String grpId;
	private Date creDate;
	private Date modDate;
}
~~~

여기서 @ToString 어노테이션은 다음과 같이 toString() 메서드를 재정의한다.

~~~java
@ToString
public class FileEntity {
	private long fileId;
	private String fileOrgNm;
	private String fileStoredNm;
	private String filePathNm;
	private long fileSize;
	private String fileExt;
	private String grpId;
	private Date creDate;
	private Date modDate;

	// @ToString으로 재정의된 toString() 메서드
	@Override
	public String toString() {
		return "FileEntity(" + "fileId=" + fileId + ", fileOrgNm=" + fileOrgNm + ", fileStoredNm=" + fileStoredNm + ", filePathNm=" + filePathNm + ", fileSize=" + filePathNm + ", fileExt=" + fileExt + ", grpId=" + grpId + ", creDate=" + creDate + ", modDate=" + modDate + ")"
	}
}
~~~

toString() 메서드는 객체가 가지고 있는 정보나 값들을 문자열로 만들어 리턴하는 역할을 한다.

여기서 toString() 메서드를 재정의하지 않는다면 부모 클래스에 정의된 toString() 메서드를 호출하게 된다.

아무튼 @ToString 어노테이션을 사용하지 않았다면 toString() 메서드를 직접 재정의해야하는 것이다.

toString() 메서드를 재정의하는 것은 선택사항이다. 그러므로 필요가 없을 경우 @ToString 어노테이션은 없어도 된다..

마지막으로 아래는  FileEntity 객체에서 @ToString 어노테이션을 적용 후 toString을 호출하면 다음과 같이 출력된다.

~~~java
log.info(new FileEntity().toString());

// 아래는 출력된 내용
// FileEntity(fileId=0, fileOrgNm=null, fileStoredNm=null, filePathNm=null, fileSize=0, fileExt=null, grpId=null, creDate=null, modDate=null)
~~~


=끝=









