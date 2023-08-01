---
title : 진법(2진수, 8진수, 16진수)
categories : theory software-engineering
---

개발에 필요한 진수는 크게 2진수, 8진수, 10진수, 16진수가 있다.

10진수는 모두가 알고 있으므로 넘어가고 2진수, 8진수, 16진수에 대해 이야기하겠다.


### 2진수

2진수는 2단위로 수의 자리가 변한다.


컴퓨터에서 bit는 기본적으로 2진수를 사용한다. 

그래서 0, 1을 표현하고 비트가 증가할 때 오른쪽에서 왼쪽으로 수가 제곱으로 증가한다.

> ....(2의 3승), (2의 2승), (2의 1승), (2의 0승)

수 5를 표현하면 아래와 같이 된다.

> |(2의 2승)|(2의 1승)| (2의 0승)|
  |--------|---------|----------|
  |  1     |     0   |    1     | 
                 

2의 2승은 4이고 2의 0승은 1이어서 합치면 5가 된다.

<br>

### 8진수

8진수는 2진수의 3자리를 묶어서 한 번에 표기한다.

여기서 왜 묶어서 표현하는지 알아야 하는데 5라는 숫자를 이진수로 표현하면 101이다.

그러나 수가 조금이라도 커지면 101로 끝나지 않고 1111011010101010101 식으로 늘어난다.

그래서 이를 좀더 알아보기 쉽게 표현하기 위해서 진수를 올린다.

예를 들면 10은 2진수에서 다음과 같이 표현된다. 

> 1010

8진수는 2진수 3자리를 묶어서 표현한 것이므로 다음과 같이 된다.

> | 1 | 010 |
  |---|-----|
  | 1 |  2  |

결론적으로 1010을 12로 간단히 표현하여 숫자 10을 나타낸다.

<br>

### 16진수

16진수는 2진수 4자리를 묶어서 표현한다.

100이라는 숫자를 2진수로 변경하면 다음과 같다.

> 1110100

위 2진수의 각자리를 4자리씩 묶어서 표현하면 16진수가 된다.

> | 111 | 0100 |
  |-----|------|
  | 7   |  4   |


만약 4자리 묶은 수가 10을 넘어가면 알파벳으로 표현한다.

`A=10, B=11, C=12, D=13, E=14, F=15`

2진수 1111는 16진수로 F가 된다.



### 진수를 구하는 공식

`10진값에서 진수로 나눈 몫과 나머지를 역순으로 나열`

15의 2진수
```
15 % 2 = 7, 1
7  % 2 = 3, 1
3  % 2 = 1, 1

결과 : 1111
```

<br>

15의 8진수
```
15 % 8 = 1, 7

결과 : 17
```


<br>

15의 16진수
```
16보다 작고 10부터는 알파벳 ABC 순이므로

결과 : F
```

<br>

### 진수의 음수

10의 음수는 일반적으로 -10과 같이 표현한다.

하지만 컴퓨터는 2진수가 기본 단위이고 MSB(Most Significant Bit)라 하여 맨 왼쪽 비트를 음수 양수를 결정 짓는 비트로 활용한다.

참고로 1이 음수이고 0이 양수이다.

10은 2진수로 1010인데 대부분 기본 단위가 바이트를 기준으로 하고 1바이트는 8비트이므로 00001010이 된다.

그러면 아무생각없이 우리는 MSB가 맨 왼쪽 비트이므로 10의 음수  10001010과 같을 것이라고 생각할 수 있다.

그런데 컴퓨터 입장에서 이것은 -10이 될 수없다. 컴퓨터의 입장에서는 음수는 양수와 더했을 때 0이되는 수가 음수이다.

위 두 양수와 음수를 더하면 어떻게 되는지 확인해 보자.

>| 양수 |00001010|
 |------|--------|
 | 음수 |10001010|
 | 결과 |10010100|


결과는 10010100이 나왔고 이는 0이 아니다.

그러므로 MSB만 변경한다고 해서 음수가 안된다는 것을 확인했다. 그러면 음수로 만들기 위해서는 어떻게 해야할까?

바로 2의 보수를 적용하면 된다.

2의 보수 공식은 아래와 같다.


먼저 1의 보수를 구한다. 1의 보수는 1과 0을 반대로 표현하면 1의 보수가 된다.

> | 양수    | 00001010 |
  |---------|--------|
  | 1의 보수  |11110101|


이후 1의 보수에 1을 더한다.

> | 양수    |00001010|
  |---------|--------|
  | 1의 보수 |11110101|


> | 1의 보수 |11110101|
  |---------|--------|
  | 2의 보수 |11110110|


실제로 0이 되는지 확인해 본다.


>| 양수 |00001010|
 |------|--------|
 | 음수 |11110110|
 | 결과 |00000000|


1바이트 기준이므로 8비트를 넘어가는 수는 버리게 되고 결과는 0이 된다.

정리하면 10은 이진수로 00001010이고 음수로 표현하기 위해서 2의 보수를 적용하고 11110110 맨 왼쪽은 MSB 이므로 수로 표현하면 -112이 된다.

나머지 8진수, 16진수는 규칙은 동일하며 다음과 같이 된다.

> 8진수  : 11 / 110 / 110  = -166 <br>
> 16진수 : 1111 / 0110  = -76



참고로 MSB는 수의 옵션 중에 unsigned를 선택하게 되면 비활성화 된다.

이것으로 진법 설명을 마무리한다.



























