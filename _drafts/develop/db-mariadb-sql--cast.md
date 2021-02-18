## 1. CAST로 문자열로 된 숫자 변환
문자열로 "123"이 되어 있을 경우 숫자형 123으로 변환할 수 있다. 
~~~sql
    SELECT CAST('1234' AS UNSIGNED) FROM DUAL -- 1234
~~~
UNSIGNED 부호는 타겟 문자를 양수로 지정하는 옵션이다.
만약 "-1234"를 UNSIGNED로 하게 되면 부호 비트를 인식하지 못하기 때문에 값이 달라짅다. 

~~~sql
    SELECT CAST('-1234' AS UNSIGNED) FROM DUAL -- 18446744073.......
~~~

음수 처리를 하고 싶다면 다음과 같이 SIGNED 옵션을 추가하여 부호 비트를 인식하게 해야한다.
~~~sql
    SELECT CAST('-1234' AS SIGNED) FROM DUAL -- -1234
~~~



