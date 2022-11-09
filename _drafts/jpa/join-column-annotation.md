---
title : @JoinColumn에 대한 생각
categories : java serialize
---

## 1. @JoinColumn

JPA를 이용한 프로젝트에서 연관관계를 엔터티 객체에 표현해야 한다. 

이때 조인 컬럼을 사용하는데 다음 예시를 생각해보자.

아래는 Engine entity 객체이다.

<br>

````java
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @Table(name="engine")
    @Entity
    public class Engine {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", length = 20, nullable = false)
        private Long id;
        
        @Column(name = "name", length = 20, nullable = false)
        private String name;        
    }
````

id와 name 속성을 만들었다. 이 속성은 @Column 어노테이션에 명시된 이름으로 실제 디비에 생성된다.

<br>

다음은 엔진을 가지고 있는 Car 클래스의 Entity이다. 

````java
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    @Table(name="car")
    @Entity
    public class Car {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", length = 20, nullable = false)
        private Long id;

        @Column(name = "name", length = 20, nullable = false)
        private String name;

        @ManyToOne
        @JoinColumn(name = "engine_id", length = 20, nullable = false)
        private Engine engine;
    }
````

<br>

`Car` 객체가 `Engine` 객체와 연관관계를 가질 수 있도록 `@JoinColumn` 어노테이션을 명시하였다. 

`@JoinColumn` 어노테이션은 여러가지 옵션을 제공한다. 그중에서 `name` 속성은 참조하는 객체에서 참조되는 객체의 매핑되는 컬럼을 명시할 수 있게 한다. 

즉, `name="engine_id"`는 `engine` 테이블의 pk에 매칭되는 `engine_id` 컬럼을 생성을 하게된다.


<br>

````
car (id, engin_id) 
````

<br>

FK가 되는 컬럼을 명시했다면 @OneToOne 어노테이션을 적용하면 다:1 관계가 성립하게된다.

그럼 여기서 car 객체를 저장할 때 `engine_id` 컬럼에 값을 전달하기 위해서는 어떻게 해야할까?

```

























