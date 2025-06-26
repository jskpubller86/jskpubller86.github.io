---
title : 파이썬 기본
categories : language python
---

파이썬에서 자료구조는 크게 3가지로 분류되고 세부적으로 5가지가 있다.

- 순서가 있는 자료구조 (String, Tuple, List)
- 순서가 없는 자료구조 (Set)
- 키:값 자료구조 (Dictionary)

## 1. 순서가 있는 자료구조 (String, Tuple, List)

순서가 있는 자료구는 들어온 순서대로 자료가 정리된다.

### 1.1. String

String은 문자열로 구성되어 있다.

```python
s = "python"
s_cnt = len(s) # 문자 길이를 반환한다.(6)
print(s[0]) # 지정한 인덱스의 문자를 반환한다.
print(s[len(s)-1]) # 마지막 문자를 반환한다.
print(s[-1]) # 뒤에서 부터 찾을 경우 -1부터 시작 (n)
print(s[::-1]) # 끝에서 앞으로 한칸씩 움직임 (nohtyp)
print(s[2::-1]) # 인덱스 2 부터 시작하여 앞으로 한칸씩 움직임 (typ)
print(s[2::-2]) # 인덱스 2 부터 시작하여 앞으로 두칸씩 움직임 (tp))
print(s[0:3]) # 0부터 3미만의 인덱스에 속하는 문자들 반환 (pyt) 
print(s + 'a') # 문자열이 합해짐 (pythona)
print(s * 2) # 문자열이 두배가 됨. (pythonpython)
print('py' in s) # 지정한 문자열이 있는 확인 후 True, False 반환 (true)
print('Py' in s) # 대소문자를 가리기 때문에 확인 실패 (False)

print('-------')

s2 = "abCD Efg"
print(s2.upper()) # 모두 대문자로 변환 후 반환 (ABCD EFG)
print(s2.lower()) # 모두 소문자로 변환 후 반환 (abcd efg)
print(s2.capitalize()) # 첫글자만 대문자 (Abcd efg)
print(s2.title()) # 단어 마다 첫글자를 대문자로 변환 후 반환 (Abcd Efg)
print(s2.count("E")) # E를 몇개나 있는지 찾고 그 갯수를 반환 (1)
print(s2.count("e")) # 대소문자를 구분하기에 못찾음 (0)
print(s2.find("C")) # 찾으면 그 문자열의 인덱스를 반환 (2)
print(s2.find("c")) # 마찬가지로 대소문자를 구분하기에 못찾으면 -1을 반환 (-1)

s2 = s2 + "g" # g가 더해져서 'abCD Efgg'가 됨
print(s2.find("g")) # g가 여러개 있을 경우 가장 작은 인덱스를 반환 (7)
print(s2.split(" ")) # 지정한 문자를 기준으로 문자열을 나누고 리스트로 반환 (['abCD', 'Efgg'])
print(s2.replace("g", "*")) # 지정한 문자를 *로 교체 (abCD Ef**)

print('-------')

# ljust는 왼쪽으로 정렬해서 지정한 크기에서 남은 크기만큼 지정한 문자로 채움
# rjust는 그 반대임
tel = "010-1234-5961"
print("핸드폰 번호:" + tel[0:8].ljust(13, "*"))
```

### 1.1. Tuble

튜플은 순서를 보장하지만 직접적인 추가, 수정, 삭제를 할 수 없다.

```py
t = () # 튜플 생성
print(t) # ()
print(type(t)) # <class 'tuple'>

t = (1,3,4,3.14, 'ABC')
print(t)
print(t[0]) # 1
# print(t[0]=6) -> 직접적인 데이터 수정 안됨
print(t[0:2]) #1, 3
print(t[0::2]) # 1,4, 'ABC'
print(t[::-1]) # :: 앞에 값이 없으면 끝에서부터 시작함
print(len(t))

# + 연산으로 튜플을 합침
t = t+(100, 'PASS')
print(t) # (1, 3, 4, 3.14, 'ABC', 100, 'PASS')

# * 연산으로 반복 합침
print(t * 2) # (1, 3, 4, 3.14, 'ABC', 100, 'PASS', 1, 3, 4, 3.14, 'ABC', 100, 'PASS')

print(3.14 in t) # True

t = 1, 3 # 소괄호 생략가능

print(t) # (1, 3)
```
