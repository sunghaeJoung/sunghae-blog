---
title: 'Object 메소드 정리'
date: '2020년 08월 30일'
tags:
  - js
  - wecode
categories:
  - js
---

### Object.entries
객체가 가지고 있는 모든 프로퍼티를 [key, value] 쌍이 담긴 배열 형태로 반환한다. 

~~~js
const obj = {
    apple: 'red',
    banana: 'yellow',
    orange: 'orange',
}

Object.entries(obj); // [ [ 'apple', 'red' ], [ 'banana', 'yellow' ], [ 'orange', 'orange' ] ]
~~~
<br />

### Object.keys

key가 담긴 배열 형태로 반환한다.

~~~js
const obj = {
    apple: 'red',
    banana: 'yellow',
    orange: 'orange',
}

Object.entries(obj); // [ 'apple', 'banana', 'orange' ]
~~~
<br />

### Object.values

value가 담긴 배열 형태로 반환한다.

~~~js
const obj = {
    apple: 'red',
    banana: 'yellow',
    orange: 'orange',
}

Object.entries(obj); // [ 'red', 'yellow', 'orange' ]
~~~
