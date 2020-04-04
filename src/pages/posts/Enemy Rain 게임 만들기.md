---
title: Enemy Rain 게임 만들기
date: '2020년 2월 7일'
categories:
  - react
tags:
  - react
---

인스타그램 클론을 끝내고 게임을 만들어 보았다 !
하늘에서 귀신이 떨어지면 밑에서 영웅은 귀신을 머리로 들이받으면서 죽이는 게임!

#### 완성본

![image.png](https://images.velog.io/post-images/ppl8709/7ef0e090-4953-11ea-ae72-d1a4dfb08214/image.png)

![image.png](https://images.velog.io/post-images/ppl8709/144b2ae0-4960-11ea-ae28-cf3a94038637/image.png)

왼쪽 오른쪽 방향키로 영웅을 이동할 수 있고 방향에 맞는 옆모습도 볼 수 있다.

![image.png](https://images.velog.io/post-images/ppl8709/2a66a700-4960-11ea-ae28-cf3a94038637/image.png)

`start버튼`을 누르면 하늘에서 귀신이 떨어진다. (귀신이 떨어지는 x축은 랜덤으로 지정된다.)

![image.png](https://images.velog.io/post-images/ppl8709/45ea6a20-4960-11ea-b5c7-5fa51e72d367/image.png)

영웅의 머리 위로 귀신이 떨어지면 귀신은 죽는다.

---

#### 어려웠던 부분

1. 영웅을 좌우로 이동시키는 부분을 어떻게 접근해야할지 막막했고 hero.style.left와 hero.offsetLeft 각각이 스트링인지 숫자인지 제대로 알지못해서 코드가 작동이 안되는 경우가 많았다.

2. 귀신을 생성하는 과정에서 하나의 귀신을 생성하고 내려보내는건 어렵지 않았는데 여러개를 생성하는게 어려웠다. 멘토님께서 class를 사용해야한다고 하셨지만 아직 class에 대한 개념이 정확하게 잡혀있지 않아서 접근 자체가 어려웠다.

3. start버튼을 클릭하면 게임이 시작되는데 stop버튼을 누르면 게임이 멈추는 것 까지는 구현하지 못했다. stop버튼에 대한 click 이벤트를 만들고 함수안에 clearInterval을 쓰면 될거라 생각했는데 귀신이 계속 내려온다... 이부분은 다시 생각해봐야할 것 같다!

---

#### 배운 내용

- offsetLeft(Top) vs style.left(top)
  영웅이 백그라운드 이미지의 범위 안에서만 움직이게 하기 위해서 if문 안에 `hero.style.left <= "612px"` 이라고 했지만 적용이 되지 않았다. 왜냐하면 `style.left`는 string이기 때문에 범위를 지정하는 것 자체가 말이 안됬던 것! 그래서 숫자값인 `offsetLeft`를 사용했더니 범위가 지정됐다!

![image.png](https://images.velog.io/post-images/ppl8709/ac9ee150-4b28-11ea-8c4b-454db6a41f87/image.png)

- image sprite
  각각의 이미지를 다운받아서 사용하는 것이 아닌 합쳐져있는 이미지 하나를 잘라서 사용하는 방식이다. 만약 이미지가 100개라면 그만큼 로딩시간이 길어질 것이다. 이미지 스프라이트는 하나의 이미지로 여러개의 이미지를 관리할 수 있기 때문에 로딩시간을 단축시킬 수 있다.

![image.png](https://images.velog.io/post-images/ppl8709/c4346fc0-4b27-11ea-89f4-11e1fd3d5794/image.png)

영웅을 세팅할 때, 영웅의 앞모습 그리고 왼쪽, 오른쪽 각각의 옆모습이 필요했고 이미지 스프라이트를 사용해 필요한 이미지를 잘라서 사용했다.

![image.png](https://images.velog.io/post-images/ppl8709/104dca50-4b28-11ea-ad70-2f9c1108b959/image.png)

- 생성자함수 Class
  개념은 이해하고 있지만 생소한 함수여서 귀신을 만드는게 적용하기가 어려웠고 지금도 제대로 적용을 하지는 못했다,,
  ~~일단 귀신 생성하는 함수, 떨어지고 죽는 함수를 각각 만든 뒤 생성자함수 안에 넣는 방식으로 했다.~~ ~~여기서 헷갈리는 부분이 `this`!! 내가 이해했을 때, **this는 생성자함수를 통해 만들어진 객체**를(여기서는 귀신) 가리킨다.~~
  ~~예를들면, 생성자함수를 통해 만들어진 귀신1, 귀신2, 귀신3의 세팅값 중 다른 부분은 바로 랜덤으로 정해지는 x축의 값일 것이다.~~ ~~그래서 x축의 값을 통해 이 귀신이 귀신1인지 2인지 알 수 있기때문에 x축을 결정하는 랜덤함수를 `this.'변수명'`으로 지정했다.~~

![image.png](https://images.velog.io/post-images/ppl8709/bdf2c340-4b28-11ea-89f4-11e1fd3d5794/image.png)

**+++ class 함수로 변경 후**

1. this
   처음에는 귀신의 x축의 값에만 *this*를 사용했는데, 귀신이 만들어지는 div에도 추가를 했다. 그 이유는 this는 **생성된 객체**이기고 Enemy라는 클래스 내부에서 생성되는 객체는 귀신이기 때문이다.

![](https://images.velog.io/images/ppl8709/post/dd410645-3254-47ee-aa48-81ce11eb0ed5/image.png)

2. 함수호출
   생성자함수가 호출되면 class함수 안에 있는 모든 메소드가 호출되는 것이 아닌 constructor안에 있는 내용들이 실행된다. 정의한 함수를 호출하기 위해서는 constructor 내부에 **"this.함수명()"** 으로 호출을 해야한다.
