---
title : 자바와 JDBC
categories : java
---

jdbc는 자바에서 데이터베이스를 사용할 수 있도록 도와주는 라이브러리이다.

드라이버를 로드하기 위해서 Class.forName을 사용한다.


## 조회

아래는 드라이버를 로딩하고 DB에 연결해서 조회를 하는 코드다.

```java

//포맷: jdbc:oracle:thin:@호스트:포트:SID
String url = "jdbc:oracle:thin:@localhost:1521:xe";
String user ="user";
String password ="userpass";

// ojdbc6.jar 있는 OracleDriver란 클래스를 로딩
try {
    Class.forName("oracle.jdbc.driver.OracleDriver");
    System.out.println("로딩 성공!");
} catch (ClassNotFoundException e) {
    System.out.println("로딩 실패");
}

// Connection을 연결
String sql ="select sname, age";
try (Connection conn = DriverManager.getConnection(url, user, password);
        PreparedStatement pstmt = conn.prepareStatement(sql);
        ResultSet rs = pstmt.executeQuery(); // 조회 쿼리 실행
        ){
    //rs.next(): cursor가 존재 할때까지 반복, 없으면 false 
    //rs.next() -> 첫번째 row : true반환
    //rs.next() -> 두번째 row : false반환
    while(rs.next()) {
        System.out.print("sname : " + rs.getString("sname"));
        System.out.print(", age : " + rs.getInt("age"));
    }
} catch (Exception e) {
    e.printStackTrace();
    System.out.println("연결실패"+e.getMessage());
}
```


## 추가

```java 
//... 드라이버 연결 생략

// 추가 쿼리
String sql ="INSERT INTO student(no, sname, age) VALUES (student_seq.nextVal,?,?)";
try ( Connection conn = DriverManager.getConnection(url, user, password);
        PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
        ){
    //값을 바인딩한다.
    pstmt.setString(1, "홍길동"); // ? 매개변수의 순서는 1부터임
    pstmt.setString(2, 16); //  
    pstmt.executeUpdate();// 바인딩된 정보를 포함해서 전송
    Repstmt.getGeneratedKeys(); // student_seq.nextVal 생성 된 키를 받기 위해서 필수
    try (ResultSet rs = pstmt.getGeneratedKeys()) {
        if (rs.next()) { // 커서를 이동
            long id = rs.getLong(1); // pk 컬럼의 데이터 형을 참고하여 int 또는 long으로 받음.
            System.out.println("생성된 사용자 ID: " + id);
        }
    }
} catch (Exception e) {
    e.printStackTrace();
}
```

## 삭제, 수정

```java 
//... 드라이버 연결 생략

// 추가 쿼리
String sql ="delete from student where no=?";
try ( Connection conn = DriverManager.getConnection(url, user, password);
        PreparedStatement pstmt = conn.prepareStatement(sql);
        ){
    //값을 바인딩한다.
    pstmt.setLong(1, 1); // ? 매개변수의 순서는 1부터임
    pstmt.executeUpdate();// 수정, 삭제도 동일 메서드 호출
} catch (Exception e) {
    e.printStackTrace();
}
```

끝.