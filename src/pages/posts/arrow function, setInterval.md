---
title: arrow function, setInterval
date: '2020년 2월 10일'
categories:
  - react
tags:
  - react
---

저번주에 enemy rain 게임을 만드는 건 다 했지만, class를 제대로 쓰지 않았기 때문에 만들어 놓은 함수를 class로 바꾸는 작업을 했다.

**arrow function**
arrow function은 함수를 간략하게 쓰기 위해서도 사용하지만 class 내부에서 함수간 매개변수를 전달하지 않아도 화살표함수를 사용한다면 자동으로 처리?가 되는 장점이 있다.

constructor안에는 기본적인 설정값이 들어가야하는데, enemy rain으로 예를 들면 귀신을 만들 span, 귀신이 떨어질 x축의 값 그리고 이후 실행될 함수(drop()) 등이 있다. 그리고 각각의 귀신을 가리키도록 this를 붙여서 사용한다.

이전에 하나의 함수에 작성했던 귀신을 만들고 떨어뜨리고 등등의 함수를 class안에 넣었을 때, 작동하지 않았던 이유는

> 1. arrow function으로 작성하지 않아서 매개변수에 접근을 하지 못함
> 2. arrow function으로 바꿨음에도 불구하고 constructor안에 함수를 실행하지 않음

두 가지가 있다. 함수를 작성했다고 하더라고 constructor안에서 실행시키지 않으면 함수는 정의만 내려졌을 뿐, 실행이 되지 않는다!

**setInterval**
귀신이 지정된 Top값에 닿았을 때 setInterval을 중지시키고 싶어서 `clearInterval(drop())` 이라고 했지만 작동되지 않았다. clearInterval은 카드결제를 취소시키는 과정과 비슷하다. 결제취소를 위해서는 영수증이 필요한데, clearInterval을 변수에 담는 것이 영수증과 같은 역할을 한다.

```js
let movement = setInterval(() => {
  this.drop();
}, 100);

clearInterval(movemonet);
```

위의 코드와 같이 movement를 let, const 등의 변수에 저장할 수 있다. 하지만 movement와 clearInterval이 같은 함수가 아닌 각각 다른 함수에 있다면 clearInterval은 동작하지 않을 것이다. 그 이유는 전역변수가 아닌 매개변수이기 때문에 해당 함수 밖에서는 접근이 불가능하기 때문이다.

만약 movement와 clearInterval이 각각 다른 함수에 정의되어 있더라고 그 함수가 하나의 class안에 있는 경우라면 this를 사용해서 접근이 가능하다.

```js
this movement = setInterval(() => {
    this.drop();
}, 100);

clearInterval(this.movemonet);
```
