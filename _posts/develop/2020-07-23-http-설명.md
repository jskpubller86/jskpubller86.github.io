# http 설명
## 1. http 헤더
클라이언트가 서버로 요청할 때 요청에 대한 메타 정보가 필요한데 메타 정보가 담긴 곳이 바로 헤더이다. 

반대로 서버가 클라이언트에게 응답을 줄 경우에도 응답에 대한 메타 정보를 줘야하는데 
요청할 때와 마찬가지로 헤더에 그 정보가 추가된다.

헤더의 정보는 개행문자(줄바꿈)[CRLF] 로 구별된다. 

`````
GET / HTTP/1.1      [CRLF]
Host: www.daum.net           [CRLF]
Upgrade-Insecure-Requests: 1         [CRLF]
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36 Edg/84.0.522.40  [CRLF]
[CRLF]
`````

마지막 공백라인 [CRLF]은 헤더의 끝을 표시한다. 

GET 요청일 경우 헤더 끝 이후에 더 이상 추가 정보가 없다. 

### 1.1. 헤더 분류 

- 일반 헤더(General Header Fields)
    - Cache-Control
    - Connection
    - Date
    - Pragma
    - Trailer
    - Transfer-Encoding
    - Upgrade
    - Via
    - Warning

- 요청 헤더 (Request Header Fields)
    - Accept
    - Accept-Charset
    - Accept-Encoding
    - Accept-Language
    - Authorization
    - Expect
    - From
    - Host
    - If-Match
    - If-Modified-Since
    - If-None-Match
    - If-Range
    - If-Unmodified-Since
    - Max-Forwards
    - Proxy-Authorization
    - Range
    - Referer
    - TE
    - User-Agent
- 응답 헤더 (Response Header Fields)
    - Accept-Ranges
    - Age
    - ETag
    - Location
    - Proxy-Authenticate
    - Retry-After
    - Server
    - Vary
    - WWW-Authenticate
- 본문 헤더 (Entity Header Fields)
    - Allow
    - Content-Encoding
    - Content-Language
    - Content-Location
    - Content-MD5
    - Content-Range
    - Content-type
    - Expires
    - Last-Modified

