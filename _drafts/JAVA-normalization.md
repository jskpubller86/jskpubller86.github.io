---
title : 기본 스트림
categories :  language java
---			

## 1. 바이트 단위 스트림

기본이 되는 스트림은 추상클래스로 정의되어 있고 하위 클래스에서 이를 구현하도록 유도하고 있다.

바이트 단위 스트림은 기본적으로 1바이트씩 처리한다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        System.out.println((char)fis.read()); // 한 바이트 씩 읽음. a 출력
    } catch (Exception e) {
        // TODO: handle exception
    }
}
```

만약 demo1.txt파일에 한글이 있다면 한글은 2byte를 사용하기 때문에 글자가 깨져서 나온다.

### 1.1. 입력 스트림과 배열을 이용한 읽기

배열을 이용하면 한 번에 지정한 배열의 크기만큼 읽어 올 수 있다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
        fis.read(arr); // 한 바이트씩 읽고 배열에 담음
        System.out.println((char)arr[0]); // 'a' 출력
        System.out.println((char)arr[1]); // 'b' 출력
    } catch (Exception e) {
        // TODO: handle exception
    } finally {
        try {
            // 스트림 해제
            fis.close();
        } catch (IOException e) {
            // 해제시 IOException 발생
            e.printStackTrace();
        }
    }
}
```

배열로 읽어오는 방법은 만약 읽어온 데이터 보다 배열의 크기가 클 경우 이전에 읽어온 데이터가 아직 남아 있을 수 있다. 

예를 들면 다음과 같은 상황이다.

```
// abcde
// 3크기 배열 바구니
첫번째 read -> [a][b][c]
두번째 read -> [d][e][c]
```

위 상황에서 첫번째 read에서 읽어온 c가 남아있다. 그래서 배열 바구니 전체를 반복해서 읽으면 안되고 읽어온 데이터 수만큼 반복해야 한다.

```java
public static void main(