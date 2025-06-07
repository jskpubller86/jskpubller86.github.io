---
title : Groovy 구문
categories : groovy
---

## 1. Comments
---
<br>

### 1.1. Single-line comment
---
<br>

```groovy
// Single-line comment
```

<br><br>

### 1.2. Multiline comment
---
<br>

```groovy
// Multiline comment
```

<br><br>

### 1.3. Groovydoc comment
---
<br>

자바와 동일하다.

```groovy
/**
 * A Class description
 */
class Person {
    /** the name of the person */
    String name

    /**
     * Creates a greeting method for a certain person.
     *
     * @param otherPerson the person to greet
     * @return a greeting message
     */
    String greet(String otherPerson) {
       "Hello ${otherPerson}"
    }
}
```

<br>

추가적으로 Groovy Doc은 기본적으로 비활성화 되어 있다. 

활성화를 위해서는 JVM에 다음 옵션을 추가한다.

```sh
Dgroovy.attach.runtime.groovydoc=true
```

<br><br>

### 1.4. Shebang line
--- 
<br>


기호를 이요한 주석


```groovy

#!/usr/bin/env groovy
println "Hello from the shebang line"
```

<br><br>

## 2. Keywords
---
<br>

키워드는 규칙은 다른 프로그램과 흡사하다. 

다만, Groovy는 키워드를 변수나 메서드로 선언해서 사용할 수 있는 방법을 제공한다.


```groovy
// contextual keywords can be used for field and variable names
def as = true
assert as

// contextual keywords can be used for method names
def in() { true }
// when calling such methods, the name only needs to be qualified using "this." in scenarios which would be ambiguous
this.in()
```

메서드는 반드시 this 키워드를 이용해서 호출해야 한다.


그리고 char, null 등과 같은 데이터 타입 키워드는 위 방법을 제공하지 않는다.

<br><br>

## 3. Identifiers
---

<br><br>

### 3.1. Normal identifiers
---
<br>

식별자 일반적인 이름 규칙은 다른 프로그램과 동일하다.

그리고 dotted expression에서는 모든 키워드 사용이 유효하다.

```groovy
    foo.as
    foo.assert
```

<br><br>

### 3.2. Quoted identifiers
---
<br>

dotted expression 뒤에는 여러 문자열을 조합하여 식별자를 선언할 수 있다.

```groovy

// 쿼트를 통한 식별자 선언
def map = [:]

map."an identifier with a space and double quotes" = "ALLOWED"
map.'with-dash-signs-and-single-quotes' = "ALLOWED"

assert map."an identifier with a space and double quotes" == "ALLOWED"
assert map.'with-dash-signs-and-single-quotes' == "ALLOWED"

// 다양한 문자열을 통한 식별자 선언
map.'single quote'
map."double quote"
map.'''triple single quote'''
map."""triple double quote"""
map./slashy string/
map.$/dollar slashy string/$

// 변수를 이용한 식별자 선언
def firstname = "Homer"
map."Simpson-${firstname}" = "Homer Simpson"

assert map.'Simpson-Homer' == "Homer Simpson"

```

<br><br>


## 4.Strings
---

<br><br>

### 4.1. Single-quoted string
---
<br>

싱글 쿼트는 String과 같다. 그러므로 interpolation(상호작용)을 지원하지 않는다.

```groovy
'a single-quoted string'
```

<br><br>

### 4.2. String concatenation
---

<br>

(+) 연산자로 문자열을 결합할 수 있다.

```groovy
assert 'ab' == 'a' + 'b'
```

<br><br>


### 4.3. Triple-single-quoted string
---
<br>

Triple-single-quoted string을 이용하여 문자열을 표현할 수 있다. 

```groovy
'''a triple-single-quoted string'''

// 트리플 쿼트 문자열이 문자열에 붙는 형태
def aMultilineString = '''line one
line two
line three'''

// 트리플 쿼트 문자열이 혼자만 있는 형태
def startingAndEndingWithANewline = '''
line one
line two
line three
'''

// 백슬래쉬를 이용하여 줄바꿈 표현
def strippedFirstNewline = '''\
line one
line two
line three
'''
```

<br><br>

#### 4.3.1. Escaping special characters
---
<br>

백슬래쉬를 이용하면 문자열을 이스케이프할 수 있다.

```groovy
'an escaped single quote: \' needs a backslash'
```
 
<br><br>

#### 4.3.2. Unicode escape sequence
---
<br>

```groovy
'The Euro currency symbol: \u20AC'
```

<br><br>

### 4.4. Double-quoted string
---
<br>

더블 쿼트 문자열은 표현에 따라 String과 GString(interpolation)으로 변환한다.

<br><br>

#### 4.4.1. String interpolation
---
<br>

```groovy
// 변수와 상호작용
def name = 'Guillaume' // a plain string
def greeting = "Hello ${name}"

assert greeting.toString() == 'Hello Guillaume'


// 연산을 통한 상호작용
def sum = "The sum of 2 and 3 equals ${2 + 3}"
assert sum.toString() == 'The sum of 2 and 3 equals 5'
```

`${}` placeholder는 표현 뿐만 아니라 문장도 들어갈 수 있다.


다음의 경우 마지막 결과가 출력된다. 

```groovy
"${def a = 1; def b = 2; a + b}" // 5 출력
```

또한 $ 하나로 다음과 같이 변수를 표현할 수 있다.

```groovy
def person = [name: 'Guillaume', age: 36]
assert "$person.name is $person.age years old" == 'Guillaume is 36 years old'
```

<br><br>

#### 4.4.2. Special case of interpolating closure expressions
---
<br><br>

#### 4.4.3. Interoperability with Java
---
<br><br>

#### 4.4.3. Interoperability with Java
---
<br><br>

#### 4.4.4. GString and String hashCodes
---
<br><br>


### 4.5. Triple-double-quoted string
---




























































