---
title : 스프링 테스트에서 @transactional 어노테이션 주의사항
categories : platform spring
tags: transactional test springtest
---


스프링 테스트시 @Transactional  어노테이션이 있으면 테스트 후 롤백을 한다.

코드는 아래와 같다.


```java

@SpringBootTest
@Transactional
class DefaultTests {

    @Autowired
	private EmployeeRepository repository;

    @Test
    void save() {
        Employee employee = Employee.builder().email("test@test.co.kr").password("1234").build();
        repositoy.save(employee);
    }
}
```

<br>

그래서 테스트 후 디비에서 저장된 데이터를 확인할 수 없다. 

이렇게 테스트 후 롤백되는 것을 원하지 않을 경우 @Rollback 어노테이션을 사용하여 롤백을 막을 수 있다.

```java
@SpringBootTest
@Transactional
class DefaultTests {

    @Autowired
	private EmployeeRepository repository;

    @Test
    @Rollback(false)
    void save() {
        Employee employee = Employee.builder().email("test@test.co.kr").password("1234").build();
        repositoy.save(employee);
    }
}
```






































