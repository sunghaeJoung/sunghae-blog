---
title: Dom이란 ?
date: '2020년 2월 3일'
categories:
  - dev
tags:
  - dev
  - dom
---

## 문서 객체 모델 DOM

### 1. Dom이란 무엇일까?

> Document Object Model로 텍스트로만 구성된 HTML 문서를 객체 모델(Dom tree)로 변환한다. 자바스크립트는 DOM을 통해 웹페이지에 접근하고 문서를 제어하여 동적인 웹페이지를 만들 수 있다.

### 2. DOM Tree

> HTML의 tag와 element를 객체 트리로 구조화시킨 모델이다.
> 최상위의 문서 노드는 DOM tree에 접근하기 위한 시작점으로 하위의 요소, 어트리뷰트 등에 접근하기 위해선 문서 노드를 통해야 한다.

![image.png](https://images.velog.io/post-images/ppl8709/8de072b0-442f-11ea-80bd-63538db7ad6e/image.png)

### 3. 요소 접근 방법

- **document.querySelector(cssSelector)**
  querySelector로 class나 id를 선택할 경우에는 '#id'또는 '.class'로 써야한다.

- **document.getElementById(id)**
  복수개의 요소가 선택된 경우 첫번째 요소만 반환한다.
  ![image.png](https://images.velog.io/post-images/ppl8709/de54f860-4650-11ea-b0c7-11ba93b0f761/image.png)

- **document.getElementsByClassName(class)**
  공백으로 구분하여 여러개의 class를 지정할 수 있고 배열로 리턴된다. (class가 한개여도 배열형태로 리턴.!)

### 4. 어트리뷰트 접근 및 수정

- **className**
  className 프로퍼티에 값을 할당할 때, class가 존재하지 않으면 class를 생성하고 지정된 값을 설정한다.
  `.className = ''`

- **classList**
  add, remove, item, toggle 등의 메소드를 제공한다.
  `.classList.add('')`

### 5. HTML 콘텐츠 조작

- **innerText**
  요소의 텍스트 콘텐츠에만 접근할 수 있다.
  `.innerText='';`

- **innerHTML**

### 6. DOM 조작

- **creatElement(tagName)**
  태그이름을 인자로 전달하여 요소를 생성한다.

- **appendChild(Node)**
  `createElement`로 생성한 요소를 마지막 자식 요소로 DOM 트리에 추가한다.

- **removeChild(Node)**
  `createElement`로 생성한 요소를 마지막 자식 요소로 DOM 트리에 제거한다.

![image.png](https://images.velog.io/post-images/ppl8709/c5d529a0-4654-11ea-b0c7-11ba93b0f761/image.png)

---

참조 : https://poiemaweb.com/js-dom
