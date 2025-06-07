---
title : 기본 스트림
categories :  java
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
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
        int total = fis.read(arr); // 읽은 배열의 크기를 반환
        for (int j = 0; j < total; j++) { // 읽은 배열의 크기만큼 반복해서 출력
            System.out.println((char)arr[j]); 
        }	        
    } catch (Exception e) {
        // TODO: handle exception
    } finally {
        // TODO: call close()
    }
}
```


### 1.2. 스트림 해제

스트림으로 데이터를 모두 읽었다면 다른 시스템에서 사용할 수 있도록 `close()` 메서드를 이용하여 스트림을 해제해야 한다.

```java
// 파일 : src/demo1.txt 
// 내용 : abc
public static void main(String[] args) {
    FileInputStream fis = null;
    try {
        fis = new FileInputStream("src/demo1.txt"); // 파일 입력 스트림 생성
        System.out.println((char)fis.read()); // 한 바이트 씩 읽음. 읽은 바이트를 char형으로 변환해서 문자 출력
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

위 리소스를 try-with-resources 구문으로 표현하면 자동으로 `close()`한다.

```java
// try-with-resources, 자동으로 리소스를 해제
try(FileInputStream fis = new FileInputStream("src/demo1.txt")){
    byte[] arr = new byte[2]; //읽은 데이터를 담을 바이트 배열 선언
    fis.read(arr); // 한 바이트씩 읽고 배열에 담음
    System.out.println((char)arr[0]); // 'a' 출력
    System.out.println((char)arr[1]); // 'b' 출력
} catch (Exception e) {
    
}
```

### 1.3. 출력 스트림

출력 스트림도 입력 스트림과 방식이 동일하다. 다만 write메서드를 호출하는 것이 다르다.

다음은 출력 스트림으로 파일에 1바이트씩 출력하는 예이다.

```java

// 1바이트씩 출력 

public static void main(String[] args) {
    try(FileOutputStream fos = new FileOutputStream("src/demo1.txt")){
        fos.write(65); // A출력
        fos.write(66); // B출력
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// src/demo1.txt 파일에 다음 내용이 작성됨.
// AB

```

다음은 배열을 이용하여 한번에 작성하는 예이다.

```java
public static void main(String[] args) {
    try(FileOutputStream fos = new FileOutputStream("src/demo1.txt")){
        byte[] arr = {65, 66}; // 입력할 배열 데이터 생성
        fos.write(arr); // 배열 데이터들 한번에 작성
    } catch (Exception e) {
        // TODO: handle exception
    }
}
```

## 2.문자 단위 스트림

위의 스트림은 1바이트 단위로 읽는 스트림이어서 한글을 읽는데 문제가 있었다.

그래서 JAVA에서 문자 단위로 읽을 수 있는 스트림을 제공하는 데 그게 Reader 클래스이다.

리더클래스는 char형을 다루는 데 즉 데이터를 2바이트씩 처리한다.

```java
// 파일 : src/sample.txt
// 내용 : 한글 

public static void main(String[] args) {
    try(FileReader fr = new FileReader("src/sample.txt")){
        int i;
        // 반환한 값이 -1이 나올 때까지 데이터를 읽음.
        while ((i=fr.read()) != -1) {
            System.out.println((char)i); // 문자 출력
        }
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// 출력 내용
// 한
// 글
```

### 2.1. 배열을 이용한 입력

처리단위가 char형이라는 것 외에는 바이트 단위 스트림과 크게 다르지 않다.

```java
// 파일 : src/sample.txt
// 내용 : 한글

public static void main(String[] args) {
    try(FileReader fr = new FileReader("src/sample.txt")){
        char[] arr = new char[2]; // 한번에 읽은 배열 바구니 선언
        int total = 0;
        // 반환한 값이 -1이 나올 때까지 데이터를 읽음.
        while ((total=fr.read(arr)) != -1) { // 읽어온 데이터 크기만큼 반복
            for (int j = 0; j < total; j++) {
                System.out.println(arr[j]);// 문자 출력
            }
        }
    } catch (Exception e) {
        // TODO: handle exception
    }
}

// 출력 내용
// 한
// 글
```

### 2.2. 배열을 이용한 출력

마찬가지로 char형이라는 것 외에 바이트 단위 스트림과 크게 다르지 않다.

```java
// 파일 : src/sample.txt
public static void main(String[] args) {
    try (FileWriter fw = new FileWriter("src/sample.txt")){
        char[] arr = {'영','어'}; // 작성할 char형 배열 생성
        fw.write(arr); // 작성
    } catch(Exception e) {
        
    }
}

// 작성한 내용
// 영어
```

끝.






























