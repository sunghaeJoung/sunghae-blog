---
title: HTML / CSS part 2 (flexbox)
date: '2020년 01월 29일'
categories:
  - html/css
tags:
  - css
---

## 1. FlexBox란?

flexbox는 기존의 방식으로 구현하기 어려운 레이아웃을 우연하게 구현할 수 있도록 CSS3에 추가된 레이아웃 방식

### flexbox의 구성

부모요소인 flex container와 자식요소인 flex item으로 구성된다.

![image.png](https://images.velog.io/post-images/ppl8709/06b1e5e0-428f-11ea-954c-2f896f9f7c7c/image.png)

### flexbox 만드는 방법

container에 display:flex; 속성을 선언하면 block 요소였던 item들은 inline요소로 변하게 된다.

</br>

## 2. Container 설정

item 개별적이 아닌 container 전체에 영향을 준다.
ex) box라는 container와 그의 item인 box-1, box-2, box-3이 있을 때, item인 box-3에 justify-end를 주더라도 영향을 받지 않는다.

### justify-content

container안의 item들이 가로축을 기준으로 정렬된다. (flex-start가 기본값)

- space-between : item들을 양쪽 끝으로 붙이고 나머지 item들은 일정한 간격으로 정렬
- space-around : item들을 좌우 각각 일정한 간격으로 정렬

---

![image.png](https://images.velog.io/post-images/ppl8709/74de1750-428f-11ea-a087-77a9e605a7b0/image.png)

### align-items

container안의 item들이 세로축을 기준으로 정렬된다. (flex-start가 기본값)

- stretch : container의 높이만큼 item들을 늘려서 정렬
- baseline : item 문자열의 baseline을 기준으로 정렬

![image.png](https://images.velog.io/post-images/ppl8709/1985bba0-4290-11ea-a7b7-9d75f838c5bb/image.png)

---

### flex-direction

어떤 방향으로 item들을 나열할지 지정한다. (row가 기본값)
왼쪽부터 row / row-reverse / column / column-reverse

![image.png](https://images.velog.io/post-images/ppl8709/ea112f20-4290-11ea-8fb4-7bddcf1bd6b1/image.png)

---

### flex-wrap

item들이 container를 넘어설 때 줄바꿈 또는 한 줄로 표현할지를 지정한다.

- nowrap(기본값) : 줄바꿈하지 않고 한줄에 표시
- wrap : 다음줄에 줄바꿈하여 표시
- wrap-reverse : item이 container를 넘어설 경우 역방향으로 줄바꿈하여 표시

---

### flex-flow

flex-direction과 flex-wrap을 flex-flow로 한번에 지정할 수 있다.
첫번째 요소는 flex-direction을 두번째 요소는 flex-wrap의 속성값을 나타낸다.

![image.png](https://images.velog.io/post-images/ppl8709/849b1ab0-4291-11ea-8fb4-7bddcf1bd6b1/image.png)

---

## 3. Item 설정

item의 넓이, 순서 등 item의 개별적인 속성을 설정한다.

### order

container안에서 item의 순서를 지정한다. 숫자가 작을수록 왼쪽에 위치한다.

![image.png](https://images.velog.io/post-images/ppl8709/3dab33f0-4292-11ea-a3bf-dfdf70119473/image.png)

---

### align-self

align-self로 지정한 요소에만 속성이 적용된다. 단, align-items가 사용하는 값들을 인자로 받기 때문에 수직방향으로 정렬된다.

![image.png](https://images.velog.io/post-images/ppl8709/99639480-4292-11ea-a3bf-dfdf70119473/image.png)

---

### flex

flex-grow, flex-shrink, flex-basis의 단축 속성이다. (flex: 0 1 auto가 기본값)

---

#### flex-grow

item의 넓이를 배수로 지정한다. (음수 사용안함)

![image.png](https://images.velog.io/post-images/ppl8709/c41d6d30-4293-11ea-8efc-61c7a582211e/image.png)

---

#### flex-shrink

flex-grow와 반대의 속성이다.
아래와 같은 경우 item-2는 item-1보다 2배 작게 된다.

![image.png](https://images.velog.io/post-images/ppl8709/f95cdda0-4293-11ea-8efc-61c7a582211e/image.png)

---

#### flex-basis

item의 기본 크기값을 지정한다.

![image.png](https://images.velog.io/post-images/ppl8709/262b5af0-4294-11ea-a2e9-99572f34b354/image.png)

---

참조 : https://junistory.blogspot.com/2017/06/flexbox-layout.html
