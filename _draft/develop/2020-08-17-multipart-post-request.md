# Multipart 
멀티파트는 이미지 파일과 같은 바이너리 형태의 데이터를 전달 하기 위해서 사용하는 타입니다. 

html에서는 form 태그에서 enctype에 multipart/form-data를 선언한다. 

~~~html 
<form action="FileUploadServlet" method="post"
      enctype="multipart/form-data">
사진: <input type="file" name="photo"><br> 
사진: <input type="file" name="photo1"><br> 
설명: <textarea name="description" cols="50" rows="3"></textarea><br>
      <input type="submit" value="추가"><br>
</form> 
~~~

이미지를 추가하고 form 태그의 submit 버튼을 클릭하게 되면  다음과 같은 요청정보를 얻을 수 있다. 


~~~
POST http://localhost:9999/web02/FileUploadServlet HTTP/1.1
Host: localhost:9999
Connection: keep-alive
Content-Length: 9360
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36
Origin: http://localhost:9999
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryjNGZbjZRLEmm8YjM
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: http://localhost:9999/web02/MultipartTest.html
Accept-Encoding: gzip, deflate, br
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7

------WebKitFormBoundaryjNGZbjZRLEmm8YjM
Content-Disposition: form-data; name="photo"; filename="캡처.PNG"
Content-Type: image/png
.....
------WebKitFormBoundaryjNGZbjZRLEmm8YjM
Content-Disposition: form-data; name="photo1"; filename="캡처.PNG"
Content-Type: image/png
.....
------WebKitFormBoundaryjNGZbjZRLEmm8YjM
Content-Disposition: form-data; name="description"

설명
------WebKitFormBoundary9NKeKg5J81yPYYTP--

~~~

요청정보를 보면 Content-Type 속성이  multipart/form-data 이고 boundary 값이 ----WebKitFormBoundaryjNGZbjZRLEmm8YjM 값으로 되어 있는 것을 확인할 수가 있다. 

이 값은 파트의 구분자라 하며 여러 개의 매개변수를 구분하는데 사용된다. 
파트 구분자의 끝은 하이픈 두 개를 추가하여 표시한다. 
~~~
------WebKitFormBoundary9NKeKg5J81yPYYTP--
~~~
