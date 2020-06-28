---
title: grid
date: '2020년 06월 25일'
categories:
  - css
tags:
  - css
---

### Grid란?
행과 열, 2차원적인 레이아웃을 만들 수 있는 CSS이다. 
<br />
Flex가 단순한 1차원적인 레이아웃을 표현한다면 Grid는 좀 더 복잡한 레이아웃을 표현할 수 있다. 

![](https://softtechgroup.us/blog/public/images/flexboxvscssgrid.jpeg)

그리드의 구조를 HTML 표현하면 다음과 같다. 
<br />
- container : 자식요소인 item들을 감싸는 부모 요소로 Grid의 영향을 받는 전체 공간.
- item : 자식요소로 설정된 속성에 따라 각각의 아이템들이 배치

~~~css
<div className="container">
    <div className="item1">1</div>
    <div className="item2">2</div>
    <div className="item3">3</div>
    <div className="item4">4</div>
    <div className="item5">5</div>
    <div className="item6">6</div>
</div>

//css
.container {
  display: grid;
}
~~~

<br />
<br />

### Grid 속성

#### 1. grid-template-row와 grid-template-columns
이 속성은 container에 적용하는 속성으로 row는 행, column은 열의 크기를 지정한다. 
<br />
아래 코드를 보면 100px의 열 2개, 100px의 행 3개를 만들었고 아래 이미지와 같은 레이아웃이 완성된다. 
<br />

반복되는 값은 repeat를 사용해서 표현할 수 있는데 **repeat(반복횟수, 반복값)**으로 표현한다. 
<br />
만약 고정된 값이 아닌 비율로 각 아이템의 크기를 조절하고 싶을 땐, fr을 사용해서 표현할 수 있다. `grid-template-columns: 1fr 1fr 1fr`은 1:1:1의 비율인 열 3개를 만든다는 의미이다.  
<br />
이외에도 minmax함수, auto-fill, auto-fit, row-gap 등 다양한 속성을 활용하여 배치할 수 있다. 
~~~css
.container {
    display: grid;
    grid-template-rows: 100px 100px; /* repeat(2, 100px)과 동일 */
    grid-template-columns: 100px 100px 100px; /* repeat(3, 100px)과 동일 */

/* 아래 코드처럼 다양하게 크기를 지정할 수 있다. 
    grid-template-rows: 1fr 2fr 2fr;
    grid-template-rows: 200px 2fr 2fr;
    grid-template-rows: repeat(3, 1fr); */
}
~~~
![](https://images.velog.io/images/ppl8709/post/f734faa3-dc38-4310-be7f-8e3125de259a/image.png)

#### 2. item 배치
이 속성은 item에 적용하는 속성으로 `grid-row`와 `grid-column`를 사용해서 각각의 아이템의 위치와 크기를 지정할 수 있다. 
<br />
아래 이미지를 보면 각 행과 열에 선이 그어져 있고 각각에 번호가 메겨져 있는 것을 볼 수 있는데 이 선을 grid-line이라고 하며 번호를 이용해서 row와 column의 범위를 결정할 수 있다.   
![](https://images.velog.io/images/ppl8709/post/56829237-261f-4f8f-9fc6-5a302c2bf3ee/image.png)

<br />
각 시작과 끝에 해당하는 번호를 통해 아이템의 영역을 설정할 수 있다. 

~~~css
.item1 {
    grid-column-start: 1;
    grid-column-end: 4;    
    
    /* 두 속성을 한줄로 축약할 수 있다.
    grid-column: 1 / 4; */
}
~~~
![](https://images.velog.io/images/ppl8709/post/b4e21ae8-4194-45cf-bb1e-9faceb655492/image.png)

이외의 다양한 속성들은 아래 참조한 블로그를 통해 확인할 수 있다. 
***

참조

* https://heropy.blog/2019/08/17/css-grid/
* https://studiomeal.com/archives/533
